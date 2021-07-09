/*
 ** Ensure that JavaScript files under src/.../dist are copied to build/.../dist
 */
const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const src = path.resolve(
    __dirname,
    "./src/main/resources/META-INF/resources/dist/"
);
const dest = path.join(
    __dirname,
    "./build/resources/main/META-INF/resources/dist"
);

fs.mkdirSync(dest, { recursive: true });
fse.emptyDirSync(dest);

fse.copy(src, dest, /\.js$/, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
