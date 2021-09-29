/* const chalk = require("chalk");
console.log(chalk.blue("Hello, npm!")); */
const get = require("./information");

let cowsay = require("cowsay");

console.log(
  cowsay.think({
    text: `i am ${get.name} and im from ${get.school}`,
    e: "--",
    T: "U",
  })
);
