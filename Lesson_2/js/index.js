document.getElementById("test").innerHTML = "Hello JavaScript";

 //first task

function firstTask() {
    const userName = prompt('What is your name: ');

    if (userName === null) {
        alert("Name enter canceled.")
    } else if (userName === "") {
        alert("Name didn't enter!")
    }
    else {
        alert(`Hello, ${userName} ! How are you?`);
    }
}

//second task

function secondTask() {
    const num1 = parseFloat(prompt('Enter first number: ' ));
    if (isNaN(num1)) {
        alert('Enter a number!');
        return;
    } else if (num1 === String) {
        alert ("You have to enter a number");
        return;
    }

    const operation = (prompt('Choose operator +, -, * or /: '));

    const num2 = parseFloat(prompt('Enter second number: '));
    if (isNaN(num2)) {
        alert('Enter a number!');
        return;
    }
    switch (operation) {
        case '+':
            alert('Your answer is: ' + (num1 + num2));
            break;
        case '-':
            alert('Your answer is: ' + (num1 - num2));
            break;
        case '*':
            alert('Your answer is: ' + (num1 * num2));
            break;
        case '/':
            if (num2 !== 0) {
                alert('Your answer is: ' + (num1 / num2));
            } else {
                alert('Your cannot divide by 0!')
            }
            break;
        default:
            alert('Enter right operation.')
        }
}


//third task
function thirdTask(){

    const value1 = prompt('Enter the first value: ');
    if (!value1){
        alert('Your enter nothing, try again!')
        return;
    }

    const value2 = prompt('Enter the second value: ');
    if (!value2){
        alert('Your enter nothing, try again!')
        return;
    }

    const result = value1 === value2;

    alert(result);
}

//fourth task 
function fourthTask(){
    const inputNumber = prompt('Enter five digits number: ') // 12345
    if(!inputNumber) {
        alert('Nothing entered.') // NaN
        return;
    }else if(isNaN(inputNumber)) {
        alert('You must enter number!') // abcdf
        return;
    }else if(inputNumber.length < 5){
        alert("Too short!") //1234
        return;
    }
    else if(inputNumber.length > 5){
        alert("Too long!") //123456
        return;
    }
    const digit1 = inputNumber % 10; // 5
    const digit2 = Math.floor((inputNumber % 100) / 10); // 4
    const digit3 = Math.floor((inputNumber % 1000) / 100); // 3
    const digit4 = Math.floor((inputNumber % 10000) / 1000); // 2
    const digit5 = Math.floor((inputNumber % 100000) / 10000); // 1

    alert(`${digit5} ${digit4} ${digit3} ${digit2} ${digit1}`)
    console.log(12345 % 1000)
}   








