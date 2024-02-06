/* let cars = [
    {
      name: 'BMW',
      color: 'white',
      model: 'M4',
      price: 80000,
      year: 2020
    },
    {
      name: 'Gentra',
      color: 'black',
      model: '2',
      price: 15000,
      year: 2022
    },
    {
      name: 'Kia',
      color: 'white',
      model: 'K5',
      price: 42000,
      year: 2023
    },
    {
      name: 'Matiz',
      color: 'red',
      model: 'best',
      price: '6000',
      year: 2011
    },
    {
      name: 'Malibu',
      color: 'gray',
      model: "2",
      price: 37000
    },
    {
      name: 'Nexia',
      color: 'blue',
      model: "3",
      price: 12000
    }
]

let cost = 35000

let cheap = cars.filter((item) => item.price <= cost)
// console.log(cheap);

let userPrice = prompt('Какую приблизительную цену вы хотите?')

if (isNaN(userPrice)) {
    console.log('Ввод в числовом виде');
} else if (!isNaN(userPrice)) {
    cars.map((value, index) => {
        if (userPrice == '') {}
        if (userPrice != true) {}
        else if (value.price <= userPrice) {
            let intCar = Number(value.price)
            console.log(`Цена машины: ${intCar}`);
        }
        else if (typeof(value.price) == 'string') {
            let intCar = Number(value.price)
            console.log(`Цена машины: ${intCar}`);
        }
    })
} */













/* let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']

let userIndex = +prompt('Введите индекс')

if (isNaN(userIndex)) {
    console.log('Ввод в числовом виде');
} else if (userIndex > arr.length) {
    console.log('Нет значения в этои индексе');
} else if (!isNaN(userIndex) && userIndex != false) {
    let newArr = arr.splice(userIndex, 1)
    console.log(`удалено: ${newArr}`);
    console.log(arr);

    let AskNewElement = confirm('Хотите что-то добавить?')

    if (AskNewElement == true) {
        let AddElement = prompt('Что хотите добавить?')
        if (AddElement == '') {
            // ниче не срабатывает    
        } else {
            arr.push(AddElement)
            console.log(arr);
        }
    } else {
        console.log('Ладно, удачи!');
    }
} */














// МИНИ-ИГРА

// let a = Math.random()
// let randomNumber = Math.round(a)

// let userNumber = +prompt('Введите цифру 1 или 0')

// if (isNaN(userNumber)) {
//     console.log('Ввод в числовом виде');
// } if (!isNaN(userNumber) && userNumber >= 0 && userNumber <= 1) {
//     if (userNumber == randomNumber) {
//         console.log('ничья');
//     } else if (userNumber > randomNumber) {
//         console.log('вы выиграли');
//     } else if (randomNumber > userNumber) {
//         console.log('бот выиграл');
//     }
// } else {
//     console.log('нет');
// }