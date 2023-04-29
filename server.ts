import { Hono } from 'hono'
import { env } from 'hono/adapter'
import type { AppLoadContext } from '@remix-run/cloudflare'
import { createRequestHandler } from '@remix-run/cloudflare'
import * as build from './build'

// @ts-ignore
const handleRemixRequest = createRequestHandler(build, process.env.NODE_ENV)

const app = new Hono()

app.get('*', async (c) => {
  const loadContext: AppLoadContext = { env: env(c) }
  return await handleRemixRequest(c.req.raw, loadContext)
})

export default app
