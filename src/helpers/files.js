var fs = require("fs");
const files = {
  // function to encode file data to base64 encoded string
  base64_encode: (file) => {
    return "data:image/gif;base64," + fs.readFileSync(file, "base64");
  },
};
module.exports = files;
