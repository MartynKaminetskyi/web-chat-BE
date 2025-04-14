# Web Chat - Backend

This is the backend part of a real-time web chat application built with Nest.js.

## Tech Stack

- Nest.js (TypeScript)
- MongoDB
- WebSockets
- GraphQL

## Getting Started

```sh
yarn install
yarn start:dev
```

The server will start on http://localhost:3000.

## Development Tools

- ESLint – for linting
- Prettier – for formatting
- Husky – for Git hooks (e.g., lint before commit)
- Jest – for unit/integration testing
- GitHub Actions – for CI/CD

## Folder Structure

src/
├── modules/
├── common/
├── graphql/
└── main.ts

## Scripts

- yarn lint # Run ESLint
- yarn format # Format code
- yarn test # Run all tests
