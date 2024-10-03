// @ts-nocheck

import chalk from 'chalk'
import { consoler } from './consoler'

interface ConsolerType {
  (fileName: string, error: any): void
}

/**
 * @description Function to
 * @import import { consolerError } from './shared/utils/consolerError'
 */

export const consolerError: ConsolerType = (fileName, params) => {
  console.log('\n')
  consoler(chalk.bold.red(`${fileName} FAILURE`), params)
  console.log('\n')
}
