// 1
function checkAge() {
    let age = prompt("Пожалуйста, укажите ваш возраст:");
// эту часть списал
    if (isNaN(age)) {
        alert("Дебил");
    } else {
        age = Number(age);
//
        if (age > 0 && age < 18) {
            alert("Выгоняем");
        } else if (age >= 18) {
            alert("Впускаем");
        } else {
            alert("Дебил");
        }
    }
}

checkAge();

//2
function maxName(name1, name2, name3) {
    if (name1.length >= name2.length && name1.length >= name3.length) {
        return name1;
    } else if (name2.length >= name1.length && name2.length >= name3.length) {
        return name2;
    } else {
        return name3;
    }
}

let longestName = maxName('Alex', 'George', 'Michael');
console.log(longestName);