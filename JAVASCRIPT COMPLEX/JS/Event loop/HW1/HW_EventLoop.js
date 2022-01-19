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

let money = 0;

function toWakeUp(isDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDone) {
                resolve('I`m grate')
            } else {
                reject('Ops I overslept')
            }
        }, 300)
    })

}

function brashTeeth(clean) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (clean) {
                resolve('Clean. To cook breakfast')
            } else {
                reject('Try again')
            }
        }, 500)
    });

}

function breakfast(satisfaid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (satisfaid) {
                resolve('I`m full. Go to shower')
            } else {
                reject('Ops')
            }
        }, 1000)
    });

}

function goToShower(fresh) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fresh) {
                resolve('I`m clean and ready to get dresses.')
            } else {
                reject('Ops')
            }
        }, 400)
    });

}

function toGetDressed(showClothes) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (showClothes) {
                resolve('You look grate. Run to work!')
            } else {
                reject('Ops')
            }
        }, 200)
    });

}

function busStop(wait) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (wait){
                resolve('Oh my bus');
            } else {
                reject('Dou')
            }
        },450)
    });
}

function workTime(jobDone) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (jobDone){
                console.log('How much did I earn today');
                money += 500;
                resolve(money)
            } else {
                reject('Dou')
            }
        },1000)
    });
}

function meetFriends(iceSkating) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (iceSkating > 10){
                resolve('Go to the ice rink')
            } else {
                reject('Dou')
            }
        },600)
    });
}

function relax(relax) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (relax){
                resolve('Grate time')
            } else {
                reject('Dou')
            }
        },559)
    });
}

function dream(dream) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (dream){
                resolve('Zzzzzz')
            } else {
                reject('Dou')
            }
        },1000)
    });
}
toWakeUp(true)
    .then(result => {
        console.log(result)
        return brashTeeth(result)
    })
    .then(result => {
        console.log(result)
        return breakfast(result)
    })
    .then(result => {
        console.log(result)
        return goToShower(result)
    })
    .then(result => {
        console.log(result)
        return toGetDressed(result)
    })
    .then(result => {
        console.log(result)
        return busStop(result)
    })
    .then(salary => {
        console.log(salary)
        return workTime(salary)
    })
    .then(result =>{
        console.log(result, '$')
        return meetFriends(result);
    })
    .then(result =>{
        console.log(result)
        return relax(result)
    })
    .then(result =>{
        console.log(result);
        return dream(result);
    })
    .then(result =>{
        console.log(result);
    })

