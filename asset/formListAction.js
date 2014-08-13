/**
 * @file $$${file}
 * @author $$${author}
 */
define(function (require) {
    var ListFormAction = require('common/listForm/ListForm');

    function Action() {
        ListFormAction.apply(this, arguments);
    }

    var util = require('er/util');

    util.mix(Action.prototype, {
        modelType: require('./$$${fileName}Model'),
        viewType: require('./$$${fileName}View')
    });

    util.inherits(Action, ListFormAction);

    return Action;
});
