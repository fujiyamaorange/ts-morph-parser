import { Node } from 'ts-morph'
import { morphProject } from './morphProject'

const fs = morphProject.getFileSystem()

const source = morphProject.getSourceFileOrThrow('./src/eratosthenes.ts')

// コメントを含めたStatement配列を返す
const statements = source.getStatementsWithComments()

console.log('***************')
statements.forEach((state) => {
  if (Node.isCommentNode(state)) {
    console.log(state.getText())
  }
  // if (Node.isVariableStatement(state)) {
  //   state.getJsDocs().forEach((v) => console.log(v))
  // }
})
console.log('***************')
