import fs from 'fs'

import { getCopiedFileSync } from 'yourails_common'
import { copyArr } from './config'

/**
 * @run ts-node tools/copyDistributionFiles.ts
 */
if (require.main === module) {
  const pathToCssFolder = 'web-build/dist/css'
  if (!fs.existsSync(pathToCssFolder)) {
    fs.mkdirSync(pathToCssFolder, { recursive: true })
  }

  copyArr.length &&
    copyArr.forEach(item => {
      if ('src' in item && 'dest' in item)
        getCopiedFileSync({ src: item['src'], dest: item['dest'] })
    })
}
