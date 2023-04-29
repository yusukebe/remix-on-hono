# Remix on Hono

Run [Remix](https://remix.run) on [Hono](https://hono.dev).

Hono runs on Cloudflare Workers, Bun, Lagon, and Node.js. So, you can run Remix on Cloudflare Workers, Bun, Lagon, and Node.js.

## Features

* Multi runtimes. Some application runs on Cloudflare Workers, Bun, Lagon, and Node.js in development.
* Support variables including Cloudflare's variables for Cloudflare Workers and environment variables for Bun, Lagon, and Node.js.
* Deploy to Cloudflare Workers.

## Development

Node.js:

```
yarn dev:node
```

Bun:

```
yarn dev:bun
```

Lagon:

```
yarn dev:lagon
```

Cloudflare Workers:

```
yarn dev:workers
```

In Cloudflare Workers, reloading may be slow because Workers Sites need to be updated with every reload. It is not recommended to use Cloudflare Worker for a smoother development experience.


## Deploy

Deploy to Cloudflare Workers:

```
yarn deploy
```

## Authors

Yusuke Wada <https://github.com/yusukebe>

## License

MIT
