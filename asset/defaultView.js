/**
 * @file $$${file}
 * @author $$${author}
 */
define(function (require) {
    var UIView = require('ef/UIView');
    var util = require('er/util');

    require('er/tpl!./$$${fileName}.tpl.html');

    function View() {
        UIView.apply(this, arguments);
    }

    View.prototype.template = '$$${file|_}';

    View.prototype.uiProperties = {};
   
    View.prototype.uiEvents = {};

    util.inherits(View, UIView);

    return View;
});
