/**
 * @file $$${file}
 * @author $$${author}
 */
define(function (require) {
    var ListFormModel = require('common/listForm/ListFormModel');

    function Model() {
        var model = this;
        model.requestList = '';
        ListFormModel.apply(model, arguments);
        
    }
       
    var util = require('er/util');

    util.inherits(Model, ListFormModel);

    return Model;
});
