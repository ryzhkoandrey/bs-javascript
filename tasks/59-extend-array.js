/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
   sum() {
      return this.reduce((sum, num) => (typeof num === 'number') ? (sum + num) : sum, 0);
   }

   onlyNumbers() {
      return this.filter(item => typeof item === 'number');
   }
}

const myArray = new ExtendedArray(1, 2, true, false, 3, 'a', undefined, null, 4, 5, 'b');

console.log('myArray', myArray);
console.log('myArray.sum()', myArray.sum());
console.log('myArray.onlyNumbers()', myArray.onlyNumbers());
console.log('myArray.length()', myArray.length);