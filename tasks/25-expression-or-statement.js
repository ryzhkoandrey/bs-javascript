/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */


// выражение-инструкция
15

// инструкция
const myObject = { // выражение
  x: 10,
  y: true,
}

// выражение-инструкция
myObject.z = 'abc' // выражение

// выражение-инструкция
delete myObject.x

// инструкция
let newVariable

// выражение-инструкция
newVariable = 30 + 5 // выражение

// выражение-инструкция
console.log(newVariable) // (newVariable) - выражение

// инструкция
if (newVariable > 10) { // (newVariable > 10) - выражение
  // выражение-инструкция
  console.log(`${newVariable} больше 10`) // (`${newVariable} больше 10`) - выражение
}                                         // (newVariable) - выражение