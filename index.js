let x = 7777;
let attempts = 0;
do {
    let user = +prompt('Введите пароль');
    if(user === x) {
        alert('Доступ разрешен');
        break;
    } else {
        attempts++;
        if(attempts === 4) {
            alert('последняя попытка')
        }
        if(attempts === 5) {
            alert('вы заблокированы');
        } else {
            alert('Неверный пароль');
        }
    }
} while (attempts < 5);