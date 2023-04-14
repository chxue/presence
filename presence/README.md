This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Directories

- `components` is for re-usable React components.
- `pages` is for routing. The path under `pages` will be the url of that page. For example, `pages/channels.tsx` or `pages/channels/index.tsx` corresponds to http://localhost:3000/channels.
- `pages/api` is for API routing.
- `public` is for resources but I don't have any for this project.
- `styles` is for CSS styles. In this project, I'm using Tailwind CSS to style the elements.
- `util` is for utility functions.

The main changes are in `components`, `pages`, `pages/api`, `util`. The other files are mostly created by `npx create-next-app`.

## Packages

- `react-spinners` is for the ring spinner that is rendered when you click on the channels the first time.
- `swr` is a lightweight solution for caching and revalidation.
