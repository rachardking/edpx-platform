/**
 * @file $$${file}
 * @author $$${author}
 */
define(function (require) {
    var UIModel = require('ef/UIModel');

    function Model() {
        var model = this;
        UIModel.apply(model, arguments);
        model.datasource = {};     
    }
       
    var util = require('er/util');

    util.inherits(Model, UIModel);

    return Model;
});
