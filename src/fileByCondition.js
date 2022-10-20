"use strict";
exports.__esModule = true;
var morphProject_1 = require("./morphProject");
var sourceFile = morphProject_1.morphProject.getSourceFiles("**/*.ts");
sourceFile.forEach(function (f) {
    console.log(f.getBaseName());
    console.log(f.getFilePath().replace(process.cwd(), ''));
});
// const fileByCondition = morphProject.getSourceFiles((f) => {
//   console.log(f.getFilePath())
//   return f.getBaseName().includes('ts')
// })
// console.log({ fileByCondition })
// console.log(fileByCondition?.getText())
// console.log(fileByCondition?.getFullText())
// console.log(fileByCondition?.getFilePath())
// console.log(fileByCondition?.getSourceFile())
