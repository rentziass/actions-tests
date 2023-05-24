import * as core from '@actions/core'
import * as fs from 'fs'

async function run(): Promise<void> {
  try {
    const secret = fs.readFileSync('./sample_secret', 'utf8')
    core.setSecret(secret)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
