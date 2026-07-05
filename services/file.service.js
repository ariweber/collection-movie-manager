const fs = require("fs");

function writeJson(connect) {
  return new Promise((res, rej) => {
    fs.writeFile(
      "../data/movies.json",
      JSON.stringify(connect, null, 2),
      "utf-8",
      (e) => {
        if (e) return rej(e);
        return res();
      },
    );
  });
}

function readJson(callback) {
  return new Promise((res, rej) => {});
  fs.readFile("../data/movies.json", "utf-8", (err, data) => {
    if (err) {
      callback([]);
      return rej(err)
    }

    const movies = JSON.parse(data || "[]");
    callback(movies);
    return res()
  });
}

module.exports = {
  readJson,
  writeJson,
};
