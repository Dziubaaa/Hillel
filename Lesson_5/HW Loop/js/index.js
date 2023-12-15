
function firstTask () {
    const dollarInHryvnia = 40; // стала сума долара (40);

    let result = ''; //рядок для зберігання результатів, та виведення їх одним повідомленням в 12 рядку.

    for (let exchangeRate = 10; exchangeRate <= 100; exchangeRate += 10) { 
       const excangeValue = exchangeRate * dollarInHryvnia;
        result += `${exchangeRate}$ коштують ${excangeValue} гривень;
`;
    }  
    alert(result);
}
/*
//Цикл for в якому задаємо змінну exchangeRate = 10 
і від цього значення починаємо відрахунок з кроком 10 (+=), поки не досягнемо 100
як в умові задачі (<=). В тілі циклу задаємо змінну в якій перемножуємо на 10,
курс долара (40), і з кожною наступною ітерацією 10 збільється на 10 за рахунок 
кроку += 10. Оголошуємо змінну result, для збереження результатів циклу і виводимо їх
одним повідомленням через alert.
 */

//----------------------------------------------------------------------------//

function secondTask () {
  
    let inputValue = prompt("Введіть число на перевірку: ");

    inputValue = parseInt(inputValue);

    if (isNaN(inputValue)) {
        alert("Будь ласка, введіть число.");
        return;
    }

    if (inputValue < 2) {
        alert("Це не просте число");
    } else {
        let isPrime = true;

        for (let i = 2; i < inputValue; i++) {
            if (inputValue % i === 0) {
                isPrime = false;
                break; 
            }
        }

        if (isPrime) {
            alert(`${inputValue} просте число`);
        } else {
            alert(`${inputValue} не просте число`);
        }
    }
}
  

//----------------------------------------------------------------------------//

function thirdTask () {
    let inputNumber = prompt("Введіть ціле число: ");

    inputNumber = parseInt(inputNumber);
    
    if(isNaN(inputNumber)) {
        alert("Введіть будь ласка ціле число.");
        return;
    } else {
            let power = 0;
            let result = Math.pow(3, power);

        while (result <= inputNumber) {
            if (result === inputNumber) {
                alert(`${inputNumber} можемо отримати як зведення 3 до ступіню.`);
                break;
            }
            power++
            result = Math.pow(3, power);
        }

        if (result !== inputNumber) {
            alert(`${inputNumber} не можемо отримати як зведення 3 до ступіню.`);
        }
    }   
}
