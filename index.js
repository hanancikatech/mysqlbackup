"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var dumpFileName = "".concat(Math.round(Date.now() / 1000), ".dump.sql");
var writeStream = (0, fs_1.createWriteStream)(dumpFileName);
var cred = [
    '-u',
    'root',
    'cikaslotmaster'
];
var runner = function () {
    var mysql = (0, child_process_1.spawn)('mysqldump', cred);
    mysql.stdout.pipe(writeStream).on('finish', function (args) {
        console.log(args);
        console.log('berhasil');
    }).on('error', function () {
        console.error("errror");
    });
};
runner();
