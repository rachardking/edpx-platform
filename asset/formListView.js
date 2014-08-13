/**
 * @file $$${file}
 * @author $$${author}
 */
define(function (require) {
    var ListFormView = require('common/listForm/ListFormView');
    var util = require('er/util');

    require('er/tpl!./$$${fileName}.tpl.html');

    function View() {
        ListFormView.apply(this, arguments);
    }

    View.prototype.template = '$$${file|_}';

    View.prototype.uiProperties = {};
   
    View.prototype.uiEvents = {};

    util.inherits(View, ListFormView);

    return View;
});
