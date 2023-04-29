import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import app from './server'

const nodeApp = new Hono()

if (process.env.NODE_ENV !== 'production') {
  nodeApp.use('*', logger())
}

nodeApp.get(
  '/build/*',
  serveStatic({
    root: './public',
  })
)

nodeApp.route('/', app)
nodeApp.showRoutes()

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

serve(
  {
    fetch: nodeApp.fetch,
    port,
  },
  (info) => {
    console.log(`Running on ${info.address}:${info.port}`)
  }
)
