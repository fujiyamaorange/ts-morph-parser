"use strict";
exports.__esModule = true;
exports.morphProject = void 0;
var path = require("path");
var ts_morph_1 = require("ts-morph");
exports.morphProject = new ts_morph_1.Project({
    tsConfigFilePath: path.join(process.cwd(), 'tsconfig.json')
});
