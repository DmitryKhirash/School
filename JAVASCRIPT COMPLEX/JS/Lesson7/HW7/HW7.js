// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// let User = function (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// };
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// const userArr = [
//     new User(1, 'Ivan', 'Lopata', 'IL@gmail.com', 30630000001),
//     new User(2, 'Ivan', 'Lopata', 'IL@gmail.com', 30630000002),
//     new User(3, 'Ivan', 'Lopata', 'IL@gmail.com', 30630000003),
//     new User(4, 'Ivan', 'Lopata', 'IL@gmail.com', 30630000004),
//     new User(5, 'Ivan', 'Lopata', 'IL@gmail.com', 30630000005),
//     new User(6, 'Ivan', 'Lopata', 'IL@gmail.com', 30630000006),
//     new User(7, 'Ivan', 'Lopata', 'IL@gmail.com', 30630000007),
//     new User(8, 'Ivan', 'Lopata', 'IL@gmail.com', 30630000008),
//     new User(9, 'Ivan', 'Lopata', 'IL@gmail.com', 30630000009),
//     new User(10, 'Ivan', 'Lopata', 'IL@gmail.com', 30630000010)
// ];
// console.log(userArr)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUser = userArr.filter((item) => {
//     if (item.id % 2 === 0) {
//         return item;
//     }
// });
// console.log(filterUser)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// const userSort = userArr.sort((a, b) => b.id - a.id);
// console.log(userSort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, phone, orderArr) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.phone = phone;
//         this.order = orderArr;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
// let emptyArray = [
//     new Client(4, 'Ivan', 'Boclan', 3068000001, ['calculator', 'manipulator', 'ice cream']),
//     new Client(1, 'Ania', 'Malinovska', 3068000005, ['gamepad', 'lep top']),
//     new Client(3, 'Lelia', 'Zarvanica', 3068000007, ['orange', 'potato', 'ice cream','chicken']),
//     new Client(8, 'Maria', 'Kosa', 3068000008, ['calculator', 'manipulator', 'arrow']),
//     new Client(6, 'Irina', 'Toyvovich', 3068000010, ['calculator', 'manipulator', 'ice cream']),
//     new Client(9, 'Stepan', 'Gak', 3068000002, ['calculator', 'manipulator', 'ice cream']),
//     new Client(10, 'Petro', 'Kalina', 3068000004, ['calculator', 'manipulator', 'ice cream']),
//     new Client(2, 'Andriy', 'Mozarella', 3068000008, ['calculator', 'manipulator', 'ice cream']),
//     new Client(5, 'Iren', 'Bograch', 3068000003, ['calculator', 'manipulator', 'ice cream']),
//     new Client(7, 'Ruslan', 'Cherpak', 3068000009, ['calculator'])
// ];
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// const userSort = emptyArray.sort((a, b) => a.order.length - b.order.length);
// console.log(userSort)
