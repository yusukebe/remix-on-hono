import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import app from './server'

const workersApp = new Hono()

workersApp.get(
  '/build/*',
  serveStatic({
    root: './',
  })
)

workersApp.route('/', app)
workersApp.showRoutes()

export default workersApp
