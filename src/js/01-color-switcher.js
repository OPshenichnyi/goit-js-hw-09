const refs = {  // Створюємо обєкт де ключи назва а значення це посилання на тег 
    start: document.querySelector('[data-start]'), // Отримуємо доступ до тегу button з дата атрибутом start
    stop: document.querySelector('[data-stop]'), // Отримуємо доступ до тегу button з дата атрибутом stop
    bodyColorChange: document.querySelector('body'), // Отримуємо доступ до тегу body
}
refs.stop.setAttribute('disabled', '');// Задаємо атрибут disabled кнопці stop за замовчуванням 

refs.start.addEventListener('click', ()=>{changeColorBody.start()}); // Додаємо прослуховувач на кнопку start
refs.stop.addEventListener('click', ()=>{changeColorBody.stop()}); // Додаємо прослуховувач на кнопку stop

const changeColorBody = { // Створюємо обєкт з методами start та stop
    
    start() { // Методам start запускає метод setInterval
        if (this.isActive) { // Виконуємо перевірку чи була активна 
            return
        }
        refs.start.setAttribute('disabled', true); // Передаємо атрибут disabled кнопці button з дата атрибутом start
        this.isActive = true; // При запуску присвоюємо значення isActive true для блокування повторного натискання кнопки старт 
        refs.stop.removeAttribute('disabled'); // Видаляємо атрибут disabled з з кнопки stop
        
            this.idInterval = setInterval(() => { // Метод setInterval значення id записуємо в змінну idInterval
                let colorHex = getRandomHexColor(); // Викликаємо функцію що рандомно генерує код кольору в форматі Hex та записуємо в змінну colorHex
                refs.bodyColorChange.style.backgroundColor = `${colorHex}`; // Передаємо значення кольору в стиль тегу  body
    }, 1000) // Встановлюємо інтервал в 1 сек 
    },

    stop() { // Методам stop зупиняє метод setInterval
        clearInterval(this.idInterval); // зупиняє метод setInterval
        refs.stop.setAttribute('disabled', '');// Задаємо атрибут disabled кнопці stop при коли буде зупиненна функція start 
        refs.start.removeAttribute('disabled'); //Видаляє атрибут disabled кнопки button з дата атрибутом start
        this.isActive = false;  // Присвоюємо значення isActive false
    },
}

 function getRandomHexColor() { // Функція генерує код кольору в форматі Hex 
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 }



