/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'Subaru',
        price: 2500,
        isAbailableForSale: true,
    },
    {
        carBrand: 'BMW',
        price: 3000,
        isAbailableForSale: false,
    },
    {
        carBrand: 'Audi',
        price: 3500,
        isAbailableForSale: true,
    },
];

const newCar = {
    carBrand: 'Porche',
    price: 4000,
    isAbailableForSale: false,
}

cars.push(newCar);
console.log(cars);