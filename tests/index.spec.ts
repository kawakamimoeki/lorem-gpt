import { describe, it } from "mocha";
import { assert } from "chai";

import { LoremGPT } from "../src/index";

describe("LoremGPT", () => {
  it("should return a word", async () => {
    const Lorem = new LoremGPT({
      locale: "env",
      openaiApiKey: process.env.OPENAI_API_KEY as string,
    });
    const result = await Lorem.gen("Animals", 1);

    console.log(result);

    assert.equal(result.length, 1);
  });

  it("should return two words", async () => {
    const Lorem = new LoremGPT({
      locale: "env",
      openaiApiKey: process.env.OPENAI_API_KEY as string,
    });
    const result = await Lorem.gen("Animals", 2);

    console.log(result);

    assert.equal(result.length, 2);
  });
});
