import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { serveStatic } from 'hono/bun'
import app from './server'

const bunApp = new Hono()

if (process.env.NODE_ENV !== 'production') {
  bunApp.use('*', logger())
}

bunApp.get(
  '/build/*',
  serveStatic({
    root: './public',
  })
)

bunApp.route('/', app)
bunApp.showRoutes()

export default bunApp
