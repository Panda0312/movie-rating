This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
On dev will use msw mock data.
(optional: run `bash npm run mock` will start an separate mock server.)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project contains Home page and detail page with mocked 10 movie data in a static json.

1. mock data under: src/mocks/data
2. redux setup under src/lib
3. page component code under src/app

Page description:

1. Header component
   1.1 A logo as a home page link, click will redirect to home page.
   1.2 Search input, input text and return filtered movies by title. (local data search)

2. Home page:
   2.1 movies list with detailed fields and View detai button. (data is mocked http request data)

3. Detail page:
   3.1 Enter by either click 'View detail' button in home page or click search result.
   3.2 Poster image can be clicked, and will display a larger image. (I use the same image display in different size for demo use)
   3.3 Rate component: click the start next to movie rate value. If not rated yet it should be an empty start. If rated it will show the rate value. Click the rate button, 10 start component will show up and we can click on the star to rate the movie and the rate value will be used to calculate a new movie rate.
   The rate by amount will change accordingly if not rated before.
   This component interaction effects uses only redux and client side state change without server data exchange.
   3.4 Comments component: An input textarea for user to post comments. By click submit button the comment will show in list below. (P.S. empty or only space comment is not allowed thus the submit button is disabled)

This project is provided with unit test with a coverage report(coverage 100%).
run test

```bash
npm run test
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
