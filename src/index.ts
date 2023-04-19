import { Configuration, OpenAIApi } from "openai";
import { prompt } from "./prompt";

class FakerGPT {
  openai: OpenAIApi;
  language: string;

  constructor({
    language,
    openaiApiKey,
  }: {
    language: string;
    openaiApiKey: string;
  }) {
    this.language = language;
    this.openai = new OpenAIApi(new Configuration({ apiKey: openaiApiKey }));
  }

  async gen(type: string, num: number) {
    const response = await this.openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [
        {
          role: "user",
          content: prompt(this.language, type, num),
        },
      ],
    });

    const answer = response.data.choices[0].message?.content;

    const words = answer?.trim().split(",") || [];

    return words;
  }
}

export { FakerGPT };
