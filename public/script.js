console.log("hi");

fetch("/hello", {
  method: "post",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({ name: "Gago" }),
});
