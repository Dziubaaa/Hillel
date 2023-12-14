debugger
const numbers = [5, 8, -1, '-6', 11, 'ololo', '-2'];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const parsedValue = parseInt(numbers[i]);

    if(!isNaN(parsedValue)){
        sum += parsedValue;
    }
}

alert('Sum is ' + sum)


// Код "ламається" на 4тій ітерації, так як '+' в JS не додає різні типи даних (в нашому випадку string + number), а перетворює(конткатинація) число в рядок і виходить не очікуєме число 6, а "12-6",
// і далі вже все буде як рядок, в результаті ми отримуємо "12-611ololo-2".  
// Фікситься це додаванням перевірки/перетворенням рядка на число методом parseInt(для цілих чисел), або parseFloat(для чисел з залишком). Але це діє лише для чисел які записані як рядок в лапках '-6', '-2'.
// Додавання такого методу не вирішує всю проблему, а видає в результаті NaN на 6тій ітерації, так як parseInt, parseFloat перетворює рядок 'ololo' в NaN.
// Це фікситься за допомогою додавання перевірки на !isNaN.
// В результаті ми отримуємо очікуєму цифру 15. 5 + 8 + (-1) + (-6) + 11 + (-2) = 15.

// КОД:
// 1. Оголосити numbers;
// 2. Присвоїти numbers масив з 7 елементів(strin, number): 5, 8, -1, "-6", 11, "ololo", "-2": numbers = [5, 8, -1, '-6', 11, 'ololo', '-2'];
// 3. Оголосити sum;
// 4. Присвоїти sum 0: sum = 0;
// 5. Оголосити цикл for;
// 6. Оголосити i;
// 7. Присвоїти і 0, i = 0;
// 8. Перевірити, чи i меньше довжини масиву: i < numbers.lenght;
// 9. Оголосити додавання до i 1, після кожної ітерації;
// 10. Оголосити parsedValue, та задати parseInt для numbers, для переведення рядка в число.
// 11. Огодосити умову if для перевірки чи переведений в число рядок не NaN в parsedValue. !isNaN(parsedValue);
// 12. Оголосити, що до sum додається кожний наступний елемент (number) з масиву numbers який є числом;
// 12. Оголосити alert та вивести 'Sum is' + сума чисел з масиву;

// ПО КРОКУ КОДУ: 
// 1. Перевірити, чи i меньше довжини масиву: 0 < 7 - true;
// 2. Перевірити та присвоїти sum попереднє значення додане на 0-й елемент масиву: sum = 0 + 5 = 5;
// 3. Збільшити i на 1; i = 1;

// 4. Перевірити, чи i меньше довжини масиву: 1 < 7 - true;
// 5. Перевірити та присвоїти sum попереднє значення додане на 1-й елемент масиву: sum = 5 + 8 = 13;
// 6. Збільшити i на 1; i = 2;

// 7. Перевірити, чи i меньше довжини масиву: 2 < 7 - true;
// 8. Перевірити та присвоїти sum попереднє значення додане на 2-й елемент масиву: sum = 13 + (-1) = 12;
// 9. Збільшити i на 1; i = 3;

// 10. Перевірити, чи i меньше довжини масиву: 3 < 7 - true;
// 11. Перевірити (тут у нас рядок '-6', тому перетворюється на -6 за рахунок parseInt) та присвоїти sum попереднє значення додане на 3-й елемент масиву: sum = 12 + (-6) = 6;
// 12. Збільшити i на 1; i = 4;

// 13. Перевірити, чи i меньше довжини масиву: 4 < 7 - true;
// 14. Перевірити та присвоїти sum попереднє значення додане на 4-й елемент масиву: sum = 6 + 11 = 17;
// 15. Збільшити i на 1; i = 5;

// 16. Перевірити, чи i меньше довжини масиву: 5 < 7 - true;
// 17. Перевірити (тут у нас рядок 'ololo', тому він ігрується через перевірку умови !isNaN) та присвоїти sum попереднє значення додане на 5-й елемент масиву: sum = 17;
// 18. Збільшити i на 1; i = 6;

// 19. Перевірити, чи i меньше довжини масиву: 6 < 7 - true;
// 20. Перевірити (тут у нас рядок '-2', тому перетворюється на -2 за рахунок parseInt) та присвоїти sum попереднє значення додане на 6-й елемент масиву: sum = 17 + (-2) = 15;
// 21. Збільшити i на 1; i = 7;

// 22. Перевірити, чи i меньше довжини масиву: 7 < 7 - false;
// 23. Умова циклу не виконується.
// 24. Виводиться alert з числом 15.