export function post(nextCart, cart) {
  fetch("https://foobar-eksamen.herokuapp.com/", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5f96a7f34b77c1637d147dd0",
      "cache-control": "no-cache",
    },
    body: JSON.stringify(nextCart),
  })
    .then((e) => e.json())
    .then((data) => {
      callback(cart.concat(data));
    });
}
