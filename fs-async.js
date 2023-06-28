const { writeFile, readFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, results) => {
  if (err) {
    console.log("err", err);
    return;
  }
  const first = results;
  readFile("./content/second.txt", "utf-8", (err, results) => {
    if (err) {
      console.log("err", err);
      return;
    }
    const second = results;
    writeFile(
      "./content/results-asynchrouns.txt",
      `asynchrouns ${first} and ${second}`,
      (err, results) => {
        if (err) {
          console.log("writefile", err);
          return;
        }
        console.log("writefile", results);
      }
    );
  });
});
