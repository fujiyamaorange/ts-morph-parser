import { morphProject } from './morphProject'

const sourceFile = morphProject.getSourceFiles(`**/*.ts`)
sourceFile.forEach((f) => {
  console.log(f.getBaseName()) // ファイル名だけ
  console.log(f.getFilePath().replace(process.cwd(), '')) // ファイル名+パス
})

// console.log(fileByCondition?.getText())
// console.log(fileByCondition?.getFullText())
// console.log(fileByCondition?.getFilePath())
// console.log(fileByCondition?.getSourceFile())
