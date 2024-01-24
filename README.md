1. created remix project: `npx create-remix remix-practice`
1. figured out how to query a free api every 10 seconds to get Calgary weather using this query: "https://api.open-meteo.com/v1/forecast?latitude=51.04&longitude=-114.07&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m" then used typescript and added zod to parse (not validate) the response.
1. followed this tutorial to add in jest and react-testing to remix project that already uses vite under the hood: https://dev.to/hannahadora/jest-testing-with-vite-and-react-typescript-4bap, and followed this: https://kentcdodds.com/blog/how-to-test-custom-react-hooks.


---
# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
