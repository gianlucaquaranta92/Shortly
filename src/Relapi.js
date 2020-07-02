export function createShortUrl(url) {
  return fetch("https://rel.ink/api/links/", {
    method: "POST",
    body: JSON.stringify({ url }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.log(error);
    });
}
