const reg = document.querySelector('.reg');
const body = document.querySelector('body');

reg.addEventListener('click', async (event) => {
  //  отменяй дефолтное поведение
  event.preventDefault();

  if (event.target.classList.value === 'reg') {
    // отправляем запрос на сервер для удаления из БД
    const registrachia = await fetch('/reg', {
      method: 'GET',
    });
    const registrachiaBg = await fetch('/regBg', {
      method: 'GET',
    });

    const result = await registrachia.json();
    const resultBg = await registrachiaBg.json();
    console.log(resultBg);
    console.log(result);
    body.insertAdjacentHTML('beforeend', result.html);
    body.insertAdjacentHTML('afterbegin', resultBg.bgHtml);
  }
});
// form.addEventListener('submit', async (event) => {
//   //  отменяй дефолтное поведение
//   event.preventDefault();

//   //  ОТМЕНИЛИ:
//   // создает новую запись и перезагружает

//   // ХОТИМ:
//   // 1. отправить запрос, создать новую запись
//   // 2. обновить страницу без перезагрузки(точечная работа с дом-деревом)

//   // форма, которую засабмитили — то есть, на которой и случился event
//   const formSubmitted = event.target;

//   const { method } = formSubmitted;
//   const { action } = formSubmitted;
//   console.log(action);
//   // инпуты формы
//   const sides = formSubmitted.sides.value;
//   // console.log(sides);
//   // отправка запроса на сервер
//   const response = await fetch(action, {
//     method,
//     body: JSON.stringify({
//       sides,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   /*
//   //если сервер возвращает json — читай как json
//   const json = await response.json();
//   console.log(json); */

//   // если текст (вёрстка) - читай как текст
//   const html = await response.text();

//   // console.log(html);

//   // найти родителя
//   const die = document.querySelector('#die-container');
//   console.log(die);
//   // die.textContent = html;
//   die.innerHTML = html;
// });
