/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const myArray = [1, 2, 3];
console.log(myArray, ` length = ${myArray.length}`);

myArray.push(4, 5);
console.log(myArray, ` length = ${myArray.length}`);