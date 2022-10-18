import { morphProject } from './morphProject'

const fs = morphProject.getFileSystem()
// fsはnew Projectで生成したパスが自動で設定される
const content = fs.readFileSync('src/main.ts')
console.log(content)
