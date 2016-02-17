module.exports = function(req, res, next) {

    if (!req.session.flash) {
        req.session.flash = [];
    }

    res.locals.flash = req.session.flash;

    req.session.flash = [];

    req.oneFlash = function(type, message) {
        if (!message) {
            message = type;
            type = 'info';
        }
        req.session.flash.push({
            type: type,
            message: message
        });
    }

    var _render = res.render;
    res.render = function(view, options, fn) {
        // support the callback as the second argument
        if(typeof(options) === 'function'){
            fn = options;
            options = {};
        }
        
        if (!options) {
            options = {};
        }
        
        if (req.session.flash.length > 0 && res.locals.flash.length === 0) {
            options.flash = req.session.flash;
            req.session.flash = [];
        }

        _render.call(this, view, options, fn);
    }
    next();
};