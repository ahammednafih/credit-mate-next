# CreditMate - Credit and Debt Manager

CreditMate is a credit and debit manager built with Next.js, a popular React-based web framework.

## Getting Started

To get started with CreditMate, follow these steps:

1. Clone the repository to your local machine:

```shell
git clone git@github.com:ahammednafih/credit-mate-next.git
```

2. Navigate to the project directory:

```shell
cd credit-mate-next
```

3. Install dependencies:

```shell
pnpm i
```

4. Start the development server:

```shell
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

CreditMate uses environment variables to store sensitive information like API keys and database credentials. These variables can be set in a `.env` file in the root directory of the project. However, if you want to use different variables locally, you can create a `.env.local` file, which will take precedence over `.env`.

Make sure not to commit your `.env` or `.env.local` files to version control to avoid exposing sensitive information.

## Commands

```shell
# Start the development server.
pnpm dev

# Build the production application.
pnpm build

# Start the production server.
pnpm start

# Lint the codebase.
pnpm lint

# Run tests
pnpm test
```
