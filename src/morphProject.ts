import * as path from 'path'
import { Project } from 'ts-morph'

export const morphProject = new Project({
  tsConfigFilePath: path.join(process.cwd(), 'tsconfig.json'),
})
