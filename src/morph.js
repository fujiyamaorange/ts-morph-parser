"use strict";
exports.__esModule = true;
var ts_morph_1 = require("ts-morph");
var morphProject_1 = require("./morphProject");
var fs = morphProject_1.morphProject.getFileSystem();
var source = morphProject_1.morphProject.getSourceFileOrThrow('./src/eratosthenes.ts');
// コメントを含めたStatement配列を返す
var statements = source.getStatementsWithComments();
console.log('***************');
statements.forEach(function (state) {
    if (ts_morph_1.Node.isCommentNode(state)) {
        console.log(state.getText());
    }
    // if (Node.isVariableStatement(state)) {
    //   state.getJsDocs().forEach((v) => console.log(v))
    // }
});
console.log('***************');
