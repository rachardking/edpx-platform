/**
 * @file a.b
 * @author jinzhiwei
 */
define(function (require) {
    var ListFormAction = require('common/listForm/ListForm');

    function Action() {
        ListFormAction.apply(this, arguments);
    }

    var util = require('er/util');

    util.mix(Action.prototype, {
        modelType: require('./bModel'),
        viewType: require('./bView')
    });

    util.inherits(Action, ListFormAction);

    return Action;
});