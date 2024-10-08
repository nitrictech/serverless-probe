import { api } from '@nitric/sdk'
import { exec } from 'node:child_process'

const helloApi = api('main')

helloApi.get('/cpus', async (ctx) => {
  ctx.res.body = await new Promise((resolve) => {
    exec('cat /proc/cpuinfo', (error, stdout, stderr) => {
      if (error) {
        // set ISE
        ctx.res.status = 500
        resolve(stderr)
      } else {
        resolve(stdout)
      }
    })
  })
})
