const fs = require("fs");
const { EOL } = require("os");
function read() {
  const puzzle = fs.readFileSync("./puzzles.txt", "utf-8").trim().split(EOL);
  let arr = puzzle.map((el) => el.split(""));
  let sudoku = [];
  return arr;
}

console.log(read());

}
console.log();

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
