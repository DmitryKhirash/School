// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let name = document.forms.form1.name;
// let age = document.forms.form1.age;
// let btn = document.getElementById('btn');
// let key = 'key';
//
// let save = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     }
//     localStorage.setItem(key, JSON.stringify(user));
// }
// btn.onclick = () => {
//     save(name.value, age.value)
// }
//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let model = document.forms.thisCar.model;
// let type = document.forms.thisCar.type;
// let volume = document.forms.thisCar.volume;
// let btnCar = document.getElementById('btnCar');
// let item = 'keyCar';
//
// let saveCar = (modelCar, typeCar, volumeCar) => {
//     let newArr = JSON.parse(localStorage.getItem(item)) || [];
//
//     newArr.push({modelCar, typeCar, volumeCar})
//     localStorage.setItem(item, JSON.stringify(newArr))
// };
// btnCar.onclick = () => {
//     saveCar(model.value, type.value, volume.value)
// };




// document.forms.thisCar.onsubmit = function (e) {
//     e.preventDefault();
// };
//
// const btn2 = document.getElementById('btnCar');
// btnCar.onclick = function () {
//     const model = document.forms.thisCar.model.value;
//     const type = document.forms.thisCar.type.value;
//     const volume = document.forms.thisCar.volume.value;
//     localStorage.setItem('inputsThisCar', JSON.stringify([model, type, volume]));
//
// }