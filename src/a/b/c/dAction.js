/**
 * @file a.b.c.d
 * @author jinzhiwei
 */
define(function (require) {
    var ListFormAction = require('common/listForm/ListForm');

    function Action() {
        ListFormAction.apply(this, arguments);
    }

    var util = require('er/util');

    util.mix(Action.prototype, {
        modelType: require('./dModel'),
        viewType: require('./dView')
    });

    util.inherits(Action, ListFormAction);

    return Action;
});