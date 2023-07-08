import flatpickr from "flatpickr"; // Імпортуємо бібліотеку flatpickr
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selectors = {
    seconds: document.querySelector('[data-seconds]'), // Отримуємо доступ до span через атрибут data-seconds
    minutes: document.querySelector('[data-minutes]'), // Отримуємо доступ до span через атрибут data-minutes
    hours: document.querySelector('[data-hours]'), // Отримуємо доступ до span через атрибут data-hours
    days: document.querySelector('[data-days]'), // Отримуємо доступ до span через атрибут data-days
    startBtn: document.querySelector('[data-start]') // Отримуємо доступ до кнопки Start через атрибут data-start
}

selectors.startBtn.setAttribute('disabled', '') // Задаємо атрибут disabled кнопці старт 
selectors.startBtn.addEventListener('click', intervalTimer); // Встановлюємо прослуховувач на кнопку старт для запуску таймера

const options = { // Обєкт з налаштуваннями:
  enableTime: true, // Вмикає вибір часу
  time_24hr: true, // Фориат дати 24 години
  defaultDate: new Date(), // Поточна дата за замовчуванням 
  minuteIncrement: 1, // Інтервал вибору хвилин 1
  onClose(selectedDates) { // Викликаємо функцію onClose
      if ((selectedDates[0] < new Date)) { // 0 Робимо перевірку чи вибрана дата в майбутньому 
          Notify.failure('Please choose a date in the future'); //0 Виводимо повідомлення в алерт якщо дата вибрана в минулому
          return //0 Пропускаємо подію 
      }
      selectors.startBtn.removeAttribute('disabled'); //* Якщо дата вибрана коретктно знімаємо атрибут disabled з кнопки старт
  },
};

const time = flatpickr("#datetime-picker", options); // Запускаємо бібліотек flatpickr


function intervalTimer() { // Викликається кнопкою Start

    selectors.startBtn.setAttribute('disabled', ''); // Присвоюємо кнопці Start атрибут disabled з метою уникнення повторного натискання 

    const intervalId = setInterval(() => { // Викликаємо метод setInterval та створюємо змінну intervalId для запису Id
        let delta = time.selectedDates[0] - new Date; // Одни раз за заданий інтервал будемо віднімати від вибраного часу поточний час
        convertMs(delta) // Викликаємо вункцію що буде конвертувати ms
        if (delta <= 900) { // Якщо різниця між вибраною датою та поточною буде дорівнювати або менше 900 ms
            stop(); // Викликаєммо функцію stop
        };
    }, 1000) // Заданий інтервал часу  1000 ms
        
    function stop() { 
        clearInterval(intervalId); // Метод зупиняє setInterval
    };
};

function convertMs(ms) { 
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    selectors.days.textContent = days;
    selectors.hours.textContent = hours.toString().padStart(2, '0');
    selectors.minutes.textContent = minutes.toString().padStart(2, '0');
    selectors.seconds.textContent = seconds.toString().padStart(2, '0') ;

};



