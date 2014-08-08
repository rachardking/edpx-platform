/**
 * @file a.b.c.d
 * @author jinzhiwei
 */
define(function (require) {
    var ListFormView = require('common/listForm/ListFormView');
    var util = require('er/util');

    require('er/tpl!./d.tpl.html');

    function View() {
        ListFormView.apply(this, arguments);
    }

    View.prototype.template = 'a_b_c_d';

    View.prototype.uiProperties = {};
   
    View.prototype.uiEvents = {};

    util.inherits(View, ListFormView);

    return View;
});