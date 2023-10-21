import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import os from "os";
import cluster from "cluster";
import http from "http";

// const app = express();
// app.use(express.json());

dotenv.config();
const server = http.createServer((req, res) => {
  res.end("it worked");
});

/* ------------ Open Session --------------- */

// app.use(express.static("public"));
// app.use(
//   session({
//     secret: "dfs",
//     cookie: { maxAge: 6000 },
//   })
// );

// app.get("/", (req, res) => {
//   if (req.session.view === undefined) {
//     req.session.view = 1;
//   } else {
//     req.session.view++;
//   }
//   res.send(`Number of views ${req.session.view}`);
// });

/*  ------------- Read file  ------------------------  */
// const start = Date.now();

// fs.readFile(path.resolve("public", "text.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data, "data");
//   console.log(process.pid, "firstId");
//   console.log(Date.now() - start, "time");
// });

// for (let i = 0; i < 1000; i++) {
//   fs.appendFile(
//     path.resolve("public", "text.txt"),
//     `${i} text ` + "\n",
//     (err) => {
//       if (err) {
//         console.log(err);
//       }
//     }
//   );
// }

/*  -------------  Read Stream  ------------- */
// const stream = fs.createReadStream(path.resolve("public", "text.txt"), "utf8");

// stream.on("data", (chunk) => {
//   console.log(chunk, "chunk");
// });
// stream.on("end", () => console.log("finished", Date.now()));
// stream.on("open", () => console.log("started", Date.now()));
// stream.on("error", (e) => console.log(e));

// console.log(45);
// app.get("/", (req, res) => {
//   res.send(45);
// });

/*  --------------- Write Stream  --------------- */

// const writableStream = fs.createWriteStream(
//   path.resolve("public", "text2.txt")
// );

// for (let i = 0; i < 20; i++) {
//   writableStream.write(i + " hello" + "\n");
// }
// writableStream.end();

/*  ---------------- Write and send ---------------- */
// app.get("/", (req, res) => {
//   const stream = fs.createReadStream(
//     path.resolve("public", "text2.txt"),
//     "utf8"
//   );
/* first way */
// stream.pipe(res);

/* second way */
// stream.on("data", (chunk) => {
//   res.send(chunk);
// });

// stream.on("end", () => {
//   res.end();
// });
// });

/*  -------------  asynq operations  -----------------*/
// console.log("Started");
// fs.promises
//   .mkdir(path.resolve("dir"))
//   .then((res) => {
//     console.log("Created");
//   })
//   .then((res) =>
//     fs.promises
//       .writeFile(path.resolve("dir", "file.txt"), "Hello")
//       .then((text) =>
//         fs.promises
//           .readFile(path.resolve("dir", "file.txt"), "utf-8")
//           .then((res) => console.log(res))
//       )
//   )
//   .then((res) =>
//     fs.promises
//       .rmdir(path.resolve("dir"), { recursive: true, force: true })
//       .then((res) => console.log("Deleted"))
//   );

// console.log("End");

// app.listen(process.env.MY_PORT);
server.listen(process.env.MY_PORT, () => console.log("server success"));
