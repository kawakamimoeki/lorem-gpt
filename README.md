# FakerGPT

![FakerGPT](https://raw.githubusercontent.com/moekidev/faker-gpt/main/docs/logo.svg)

A fake data generator using GPT.

## Installation

```
npm i -D faker-gpt
```

```
yarn add -D faker-gpt
```

## Usage

Please set an environment variable:

```ts
import FakerGPT from "faker-gpt";

const faker = new FakerGPT({
  language: "en",
  openaiApiKey: process.env.OPENAI_API_KEY as string,
});

const animals = faker.gen("Animals", 2);

console.log(animals);
// [ 'Elephant', 'Giraffe' ]
```

## License

This code is free to use under the terms of the MIT license.
