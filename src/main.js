import("./a.js").then((module) => {
  console.log(module.default)
})

import("./b.js").then((module) => {
  console.log(module.default)
})

