/**
 * @file a.b
 * @author jinzhiwei
 */
define(function (require) {
    var ListFormView = require('common/listForm/ListFormView');
    var util = require('er/util');

    require('er/tpl!./b.tpl.html');

    function View() {
        ListFormView.apply(this, arguments);
    }

    View.prototype.template = 'a_b';

    View.prototype.uiProperties = {};
   
    View.prototype.uiEvents = {};

    util.inherits(View, ListFormView);

    return View;
});