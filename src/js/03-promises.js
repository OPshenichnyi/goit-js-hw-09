import { Notify } from 'notiflix/build/notiflix-notify-aio'; // Імпортуємо бібліотеку notiflix

const form = document.querySelector('.form') // Отримуємо доступ до до тегу form через селектор класу form

const {delay, step, amount} = form.elements // Робимо деструктуризацію елементів форми 
form.addEventListener('submit', startCreatPromise) // Додаємо прослуховувач події submit на тег form

function startCreatPromise(event) { // Функція що запускає створення промісів 
  event.preventDefault(); // Скидаємо поведінку браузера за замовчуванням 
  let firstDelay = Number(delay.value); // Створюємо змінну що буде приймати значення часу створення першого промісу та на кожній ітерації буде збільшуватись на значення змінної stepTime
  let stepTime = Number(step.value); // Створюємо змінну що буде приймати значення часу проміжку для створення наступного промісу
  let count = Number(delay.value); // Створюєммо змінну лічильник що буде приймати та передавати час затримки 

  for (let i = 1; i <= Number(amount.value); i += 1) { // Перебераєммо за допомогою цикла for значення amount

    setTimeout(() => { // На кожній ітерації створюємо таймер відкладеної подіїї куди передаємо значення firstDelay

      let promise = createPromise(i, (count)); // Викликаєммо функцію createPromise через змінну promise яка викликає створення нового промісу на кожній ітерації(передаємо значення позиції та часу відкладенного створення) 
      promise
        .then((value) => { Notify.success(value) }) // Отримуємо позитивний результат виконання промісу зі створенного промісу та викликаємо бібліотеку Notify з відповідним результатом
        .catch((error) => { Notify.failure(error) }) // Отримуємо негативний результат виконання промісу зі створенного промісу та викликаємо бібліотеку Notify з відповідним результатом
      count += stepTime; // Додаєммо лічильнику значення step на кожній ітерації 

    }, firstDelay); // Змінна що задає значення відкладеної функції setTimeout в Мс
    firstDelay += stepTime; // Додаєммо firstDelay  значення step на кожній ітерації 
  };
};

function createPromise(position, delay) { // Функція створює нові проміси 
  const shouldResolve = Math.random() > 0.3; // Використовуємо генератор рандомних чисел 

  if (shouldResolve) { // Якщо в змінній значення числа більше 0,3 то створюємо проміс з позитивним результатом 
    return new Promise((resolve, reject) => { // Повертаємо проміс з позитивним результатом 
      resolve(`Fulfilled promise ${position} in ${delay}`) // Записуємо значення отриманні при виклику промісу position, delay в її значення 
})
  } else { // Якщо в змінній значення числа менше 0,3 то створюємо проміс з негативним результатом 
  return new Promise((resolve, reject) => { // Повертаємо проміс з негативним результатом 
      reject(`Rejected promise ${position} in ${delay}`) // Записуємо значення отриманні при виклику промісу position, delay в її значення 
})
  }
}
