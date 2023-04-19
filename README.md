# LoremGPT

![LoremGPT](https://raw.githubusercontent.com/moekidev/faker-gpt/main/docs/logo.svg)

A fake data generator using GPT.

## Installation

```
npm i -D lorem-gpt
```

```
yarn add -D lorem-gpt
```

## Usage

Please set an environment variable:

```ts
import LoremGPT from "lorem-gpt";

const Lorem = new LoremGPT({
  locale: "en",
  openaiApiKey: process.env.OPENAI_API_KEY as string,
});

// ...

const animals = await Lorem.gen("Animals", 2);

console.log(animals);
// [ 'Elephant', 'Giraffe' ]
```

## License

This code is free to use under the terms of the MIT license.
