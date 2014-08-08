/*
* @file 自动创建文件
* @author jinzhiwei@baidu.com
*/
var fs = require('fs');
var path = require('path');

exports.cli = {
    description: 'a.b.c 文件目录最后为文件名 --formList 继承的对象（默认为default）',
    options: [ 'formList', 'default'],
    main: function( args, opts ) {
        var file = args[0];
        var superClass;

        if(!file) {
            console.log('require fileName');
            return;
        }

        for (var i in opts) {
            if(opts[i] === true) {
                superClass = i;
            }
        }

        if (!superClass) {
            superClass = 'default';
        }
        //console.log(process.cwd())

        initFile(file, superClass);
    }
};

var files = [
    'Action.js',
    'View.js',
    'Model.js',
    '.tpl.html'  
];

var author = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'].replace(/\\/g, '/').split('/').pop();

var root = 'src';

//创建路径
function mkdirSync(url,mode,cb){
    var arr = url.split('/');
    mode = mode || 0755;
    cb = cb || function(){};
    if(arr[0]==='.'){//处理 ./aaa
        arr.shift();
    }
    if(arr[0] == '..'){//处理 ../ddd/d
        arr.splice(0,2,arr[0]+'/'+arr[1]);
    }
    function inner(cur){
        if(!fs.existsSync(cur)){//不存在就创建一个
            fs.mkdirSync(cur, mode);
        }
        if(arr.length){
            inner(cur + '/'+arr.shift());
        }else{
            cb();
        }
    }
    arr.length && inner(arr.shift());
}

//格式化模板文件
function format(str, obj) {
    var arg = [].slice.call(arguments, 1);

    function filter(str,filter) {  
        return filter ? str.replace(/\./g, filter) : str;
    }

    return str.replace(/\${3}\{([^|}]+)(?:\|([^}]+))?\}/g, function (whole, unit, filterPat) {
        var index = Number(unit);

        if (index >= 0) {
            return filter(arg[index], filterPat);
        } else if (obj && obj[unit]) {
            return filter(obj[unit], filterPat);
        } 

        return whole;
    });
}

//创建文件
function initFile (fileRow, superClass) {
    var file = fileRow.split('.');
    var fileName = file.pop();
    var filePath = file.join('/');

    var rootPath = root + '/' + filePath;

    files.forEach(function (subFileName, index) {
        mkdirSync(rootPath, null, function () {
            var filePath = path.resolve(__dirname, '../asset') + '/' + superClass + subFileName;
            fs.writeFileSync(
                rootPath + '/' + fileName + subFileName,
                format(fs.readFileSync(filePath).toString(), {
                    file: fileRow,
                    fileName: fileName,
                    author: author
                })
                
            );
        });

    });

}














/* vim: set ts=4 sw=4 sts=4 tw=100: */
