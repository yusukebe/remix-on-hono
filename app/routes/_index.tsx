import { json, type LoaderFunction, type V2_MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }]
}

export const loader: LoaderFunction = ({ context }) => {
  const env = context.env as Record<string, unknown>
  return json({
    token: env.TOKEN,
  })
}

export default function Index() {
  const { token } = useLoaderData()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Remix with Hono</h1>
      <p>Your TOKEN is {token}</p>
    </div>
  )
}
