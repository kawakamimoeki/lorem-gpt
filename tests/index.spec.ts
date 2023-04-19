import { describe, it } from "mocha";
import { assert } from "chai";

import { FakerGPT } from "../src/index";

describe("FakerGPT", () => {
  it("should return a word", async () => {
    const faker = new FakerGPT({
      locale: "env",
      openaiApiKey: process.env.OPENAI_API_KEY as string,
    });
    const result = await faker.gen("Animals", 1);

    console.log(result);

    assert.equal(result.length, 1);
  });

  it("should return two words", async () => {
    const faker = new FakerGPT({
      locale: "env",
      openaiApiKey: process.env.OPENAI_API_KEY as string,
    });
    const result = await faker.gen("Animals", 2);

    console.log(result);

    assert.equal(result.length, 2);
  });
});
