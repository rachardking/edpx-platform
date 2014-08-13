/**
 * @file $$${file}
 * @author $$${author}
 */
define(function (require) {
    var ERAction = require('er/Action');

    function Action() {
        ERAction.apply(this, arguments);
    }

    var util = require('er/util');

    util.mix(Action.prototype, {
        modelType: require('./$$${fileName}Model'),
        viewType: require('./$$${fileName}View')
    });

    util.inherits(Action, ERAction);

    return Action;
});
