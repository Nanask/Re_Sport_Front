const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  style: {
    postOptions: {
      plugins: [tailwindcss("./tailwind.js"), autoprefixer],
    },
  },
};
