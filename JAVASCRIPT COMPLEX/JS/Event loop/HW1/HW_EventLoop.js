// 'TO DO HW'
// Зробити свій розпорядок дня. //
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів
// та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка.
// При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с //
// Піти в душ - 0.5с // Дочекатись автобус - 3с //
// Пообідати - 1с // // І так далі


//Method Callback//
// let mood = 10;
// let money = 0;
//
// function toWakeUp(isDone, callback) {
//     setTimeout(() => {
//         if (isDone) {
//             console.log(mood, 'It`s fanny day for me. Go to brash teeth')
//             mood += 20;
//             callback(null, mood)
//         } else {
//             callback('Ops I overslept', null)
//         }
//     }, 300)
// }
//
// function brashTeeth(myMood, callback) {
//     setTimeout(() => {
//         if (myMood > 10) {
//             console.log(mood, 'Norm=). Very well. Clean. To cook breakfast)')
//             mood += 15
//             callback(null, mood)
//         } else {
//             callback('Try again', null)
//         }
//     }, 500)
// }
//
// function goToShower(fresh, callback) {
//     setTimeout(() => {
//         if (fresh >= 45) {
//             console.log(mood, 'Hmmm, goodness. Go to shower.');
//             mood += 20;
//             callback(null, mood)
//         } else {
//             callback('Ops. I lost my breakfast', null)
//         }
//     }, 400)
// }
//
// function toGetDressed(showClothes, callback) {
//     setTimeout(() => {
//         if (showClothes >= 52) {
//             console.log(mood, 'It`s time to pick up clothes')
//             mood += 10
//             callback(null, 'You look grate. Run to work!')
//         } else {
//             console.log('Ops', null)
//         }
//     }, 200)
// }
//
// function busStop(waitListenMusic, callback) {
//         setTimeout(()=>{
//             if (waitListenMusic>=60){
//                 console.log(mood, 'Time go to bus stop')
//                 mood += 5;
//                 callback(null, 'Oh my bus');
//             } else {
//                 callback('Dou', null)
//             }
//         },450)
// }
//
// function workTime(work, jobDone, callback) {
//         setTimeout(()=>{
//             if (work>=70){
//                 mood +=30
//                 console.log(mood,'I like listen to music. And now I ready to progressing for work')
//                 money += 500;
//                 console.log(mood,'Cool working today. How much did I earn today?')
//                 console.log(money,'$ Wow,it`s good! Go to meet friend')
//                 callback(null, 'goMeet')
//             } else {
//                 callback('Dou', null)
//             }
//         },1000)
// }
//
// function meetFriends(toPay, field, callback) {
//         setTimeout(()=>{
//             if (toPay >= 10){
//                 money -=10
//                 mood +=20
//                 console.log(mood, 'Go to the ice rink. It`s amazing!');
//                 console.log(money, '$ Ok')
//                 callback(null, 'Fine meet')
//             } else {
//                 console.log('Dou', null)
//             }
//         },600)
// }
//
// function relax(relax, callback) {
//         setTimeout(()=>{
//             if (relax >=110){
//                 mood += 15;
//                 console.log(mood, 'Time for reed a book')
//                 callback(null, 'Grate time')
//             } else {
//                 console.log('Dou', null);
//             }
//         },559)
// }
//
// function dream(dream, callback) {
//         setTimeout(()=>{
//             if (dream){
//                 mood += 40;
//                 console.log(mood, 'Forward to the future! Zzzzz...')
//                 callback(null, 'Zzzz')
//             } else {
//                 console.log('Dou')
//             }
//         },1000)
// }
//
//
// toWakeUp(mood, () => {
//     brashTeeth(mood, () => {
//         goToShower(mood, () => {
//             toGetDressed(mood, () => {
//                 busStop(mood, () => {
//                     workTime(mood, money, () => {
//                         meetFriends(money, mood, () => {
//                             relax(mood, () => {
//                                 dream(mood, () => {
//
//                                 });
//
//                             });
//
//                         });
//
//                     });
//
//                 });
//
//             });
//
//         });
//
//     });
// });


let mood = 10;
let money = 0;

function toWakeUp(isDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDone) {
                console.log(mood, 'It`s fanny day for me.')
                mood += 20;
                resolve(mood)
            } else {
                reject('Ops I overslept')
            }
        }, 300)
    });
}

function brashTeeth(myMood) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (myMood > 10) {
                mood += 15
                console.log(mood, 'I`m clean.')
                resolve(mood)
            } else {
                reject('Try again')
            }
        }, 500)
    });
}


function goToShower(fresh) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fresh >= 45) {
                mood += 20;
                resolve(mood)
            } else {
                reject('Ops. I lost my breakfast');
            }
        }, 400)
    });
}

function toBreakfast(cook) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cook >= 60) {
                mood += 5;
                resolve(mood);
            } else {
                reject('Dou')
            }
        }, 450)
    });
}

function toGetDressed(showClothes) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (showClothes >= 52) {
                mood += 10
                resolve(mood)
            } else {
                reject('Ops')
            }
        }, 200)
    });
}

function wayToWork(waitListenMusic) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (waitListenMusic >= 60) {
                mood += 5;
                resolve(mood);
            } else {
                reject('Dou')
            }
        }, 450)
    });
}

function workTime(work, jobDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (work >= 70) {
                mood += 30
                money += 500;
                resolve(mood)
            } else {
                reject('Dou');
            }
        }, 1000)
    });
}

function meetFriends(toPay, field) {
    setTimeout(()=>{
        if (toPay >= 10){
            money -=10
            mood +=20
            console.log(mood, 'Go to the ice rink. It`s amazing!');
            console.log(money, '$ Ok')
            callback(null, 'Fine meet')
        } else {
            console.log('Dou', null)
        }
    },600)
}

function relax(relax) {
    setTimeout(()=>{
        if (relax >=110){
            mood += 15;
            console.log(mood, 'Time for reed a book')
            callback(null, 'Grate time')
        } else {
            console.log('Dou', null);
        }
    },559)
}

function dream(dream) {
    setTimeout(()=>{
        if (dream){
            mood += 40;
            console.log(mood, 'Forward to the future! Zzzzz...')
            callback(null, 'Zzzz')
        } else {
            console.log('Dou')
        }
    },1000)
}

async function weekDay() {
    const getUp = await toWakeUp(true);
        console.log(getUp, 'Go to brash teeth.');
    const brashT = await brashTeeth(getUp);
        console.log(brashT, 'Go to shower.');
    const shower = await goToShower(brashT);
        console.log(shower, 'Fine. Time for breakfast');
    const breakfast = await toBreakfast(shower);
        console.log(breakfast, 'Mmmm, ty-ty-dy...')
    const clothing = await toGetDressed(breakfast);
        console.log(clothing, 'It`s time to pick up clothes. You look grate. Run to work!')
    const wayInRoad = await wayToWork(clothing);
        console.log(wayInRoad,'I like listen to music. And now I ready to progressing for work' )
    const workingMood = await workTime(wayInRoad)
        console.log(workingMood,  'Cool working today. How much did I earn today?')
    const salary = await workTime(workingMood)
        console.log(money, '$ Wow,it`s good! Go to meet friend')
}

weekDay()
