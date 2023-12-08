function task(){
    const input = +prompt('Enter a number from 1 to 4');
    switch (input){
        case 1:
            alert('Today is a good day to start something');
            break;
        case 2:
            alert('See your friend today');
            break;
        case 3:
            alert('Buy yourself something tasty today');
            break;
        case 4:
            alert('Do your HW today');
            break;
        default:
            alert('Invalid number');
    }
}
