"use strict";
exports.__esModule = true;
var morphProject_1 = require("./morphProject");
var fs = morphProject_1.morphProject.getFileSystem();
// fsはnew Projectで生成したパスが自動で設定される
var content = fs.readFileSync('src/main.ts');
console.log(content);
