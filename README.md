# Explain This Code

A web application that allows users to paste code snippets, select a programming language, and receive AI-generated explanations of the code using OpenAI's API. Built with Next.js, React, and Tailwind CSS.

![Demo](./public/demo.gif)

---

## Features

- Paste or type code snippets in a variety of programming languages.
- Select the language of your code.
- Get clear, AI-generated explanations for your code.
- Responsive and modern UI built with Tailwind CSS.
- Secure backend integration with OpenAI (API key not exposed to the client).

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI API](https://platform.openai.com/docs/api-reference)
- TypeScript

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ifferrie/explain-this-code.git
cd explain-this-code
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key
```

### 4. Run the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## License

MIT

---

## Acknowledgements

- [OpenAI](https://openai.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

