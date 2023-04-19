const prompt = (language: string, type: string, num: number) => {
  switch (language) {
    case "en":
      return `Please generate ${num} words
        type: ${type}
        language: ${language}
        delimiter: ","
        word:`;
    case "ja":
      return `${num}個の単語を生成してください
        種類: ${type}
        言語: ${language}
        区切り文字: ","
        単語:`;
    default:
      return `Please generate ${num} words
        type: ${type}
        language: ${language}
        delimiter: ","
        word:`;
  }
};

export { prompt };
