
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let Car = function (model, producer, graduationYear, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.gradationYear = graduationYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function (msg) {
//         console.log(`We go at speed ${this.maxSpeed} kilometers per hour`);
//     };
//     this.info = function () {
//         console.log(`${msg} Model - ${model}, Producer - ${producer}, Gradation year - ${graduationYear}, Engine Capacity - ${engineCapacity}`);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.gradationYear = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let addCar = new Car('Tesla Model S Plaid', 'E. Musk', 2021, 320, 'lol');
// console.log(addCar)

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class CarClass {
//     constructor(model, producer, gradationYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.gradationYear = gradationYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         drive(msg)
//         {
//             console.log(`We go at speed ${this.maxSpeed} kilometers per hour`)
//         }
//         info()
//         {
//             console.log(`${msg} Model - ${model}, Producer - ${producer}, Gradation year - ${graduationYear}, Engine Capacity - ${engineCapacity}`);
//         }
//         increaseMaxSpeed(newSpeed)
//         {
//             this.maxSpeed += newSpeed;
//         }
//         changeYear(newValue)
//         {
//             this.gradationYear = newValue;
//         }
//         addDriver(driver)
//         {
//             this.driver = driver;
//         }
//     }
// }

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(nameCinderella, age, footSize) {
//         this.nameCinderella = nameCinderella;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderellas = [
//     new Cinderella('Cinerella1', 22, 35),
//     new Cinderella('Cinerella2', 23, 39),
//     new Cinderella('Cinerella3', 23, 35),
//     new Cinderella('Cinerella4', 26, 36),
//     new Cinderella('Cinerella5', 24, 38),
//     new Cinderella('Cinerella6', 22, 34),
//     new Cinderella('Cinerella7', 27, 33),
//     new Cinderella('Cinerella8', 25, 36),
//     new Cinderella('Cinerella9', 20, 35),
//     new Cinderella('Cinerella10', 21, 38)
// ];
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// let prince = new Prince('prince',26,36)
// console.log(cinderella = cinderellas.find(value => value.footSize === prince.shoe));