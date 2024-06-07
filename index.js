import fsn from "fs";
import fs from "fs/promises";
import path from "path";
const basepath = `C:\\Users\\sm\\Desktop\\Webdev\\JS\\Projects\\Clear-Clutter`;

let files = await fs.readdir(basepath);


for (const file of files) {
  let ext = path.extname(file);
  if (ext != ".json" && ext != ".js") {
    if (fsn.existsSync(path.join(basepath, ext))) {
      fs.rename(path.join(basepath, file), path.join(basepath, ext , file));
    } else {
       fs.mkdir(path.join(basepath, ext));
       fs.rename(path.join(basepath, file), path.join(basepath, ext , file));
    }
  }
}
