---
title: 🧪 Testing During Development
description: How to locally test the app during development.
weight: -6
---

# Locally test the app during development

## WIP

## Run the tests

#### 1. Install the global dependencies

> Comment: You don't need to run it every time only the first time ever or after changing the dependencies.

```shell
npm ci
```

#### 2. Run Backend unit tests

- Install data provider

```shell
npm run build:data-provider
```

- Run backend unit tests

```shell
cd api && npm run test:ci
```

- Run librechat-data-provider unit tests

```shell
cd packages/data-provider && npm run test:ci
```

#### 3. Run frontend unit tests

- Build Client

```shell
npm npm run frontend:ci
```

- Run frontend unit tests

```shell
npm run test:ci --verbose
```

#### 4. Run e2e tests

- Install Playwright

```shell
npx playwright install --with-deps
npx playwright install chromium
```

- Run Playwright tests

```shell
npm run e2e:ci
```

- View results

```shell
ls e2e/playwright-report/
```

cd api && npm run test:ci

If everything goes well, you should see a `passed` message.

![testing-1](https://github.com/danny-avila/LibreChat/assets/32828263/35b5c6a8-5c76-4e76-8ad9-2b1977eabc2a)
