const prompt = (locale: string, type: string, num: number) => {
  switch (locale) {
    case "en":
      return `Please generate ${num} words
        type: ${type}
        locale: ${locale}
        delimiter: ","
        word:`;
    case "ja":
      return `${num}個の単語を生成してください
        種類: ${type}
        言語: ${locale}
        区切り文字: ","
        単語:`;
    default:
      return `Please generate ${num} words
        type: ${type}
        locale: ${locale}
        delimiter: ","
        word:`;
  }
};

export { prompt };
