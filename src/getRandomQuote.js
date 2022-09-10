export async function getRandomQuote() {
  await fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((quote) => {
      return {
        text: quote.content,
        author: quote.author,
      };
    });
}
