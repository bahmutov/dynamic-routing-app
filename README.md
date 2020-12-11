# Dynamic Routing example

This example shows how to do [dynamic routing](https://nextjs.org/docs/routing/dynamic-routes) in Next.js. It contains two dynamic routes:

1. `pages/post/[id]/index.js`
   - e.g. matches `/post/my-example` (`/post/:id`)
1. `pages/post/[id]/[comment].js`
   - e.g. matches `/post/my-example/a-comment` (`/post/:id/:comment`)

## Cypress tests

Run tests using

```shell
yarn local
```

Read the [Parse and use URL](https://glebbahmutov.com/blog/cypress-tips-and-tricks/#parse-and-use-url)
