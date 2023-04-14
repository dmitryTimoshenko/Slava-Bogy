const reg = document.querySelector('.reg');
const log = document.querySelector('.log');
const body = document.querySelector('body');
const wrapperHeader = document.querySelector('.wrapper_header');

reg.addEventListener('click', async (event) => {
  //  отменяй дефолтное поведение
  event.preventDefault();

  if (event.target.classList.value === 'reg') {
    const registrachia = await fetch('/reg', {
      method: 'GET',
    });
    const registrachiaBg = await fetch('/regBg', {
      method: 'GET',
    });

    const result = await registrachia.json();
    const resultBg = await registrachiaBg.json();
    body.insertAdjacentHTML('beforeend', result.html);
    body.insertAdjacentHTML('afterbegin', resultBg.bgHtml);

    const formReg = document.querySelector('.formReg');
    formReg.addEventListener('submit', async (eventik) => {
      //  отменяй дефолтное поведение
      eventik.preventDefault();
      const form = eventik.target;

      const login = form.login.value;
      const password = form.password.value;

      const registrachiaFull = await fetch('/regComplit', {
        method: 'POST',
        body: JSON.stringify({
          login,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await registrachiaFull.json();

      const html = result.success;
      const userName = result.html;
      if (html) {
        form.reset();
        wrapperHeader.insertAdjacentHTML('beforeend', userName);
        location.reload();
        return alert('Вы успешно зарегистрированны');
      } else {
        form.reset();
        return alert('Ну не шмагла ты не шмагла');
      }
    });
  }
});

log.addEventListener('click', async (event) => {
  //  отменяй дефолтное поведение
  event.preventDefault();

  if (event.target.classList.value === 'log') {
    const registrachia = await fetch('/log', {
      method: 'GET',
    });
    const registrachiaBg = await fetch('/regBg', {
      method: 'GET',
    });

    const result = await registrachia.json();
    const resultBg = await registrachiaBg.json();
    body.insertAdjacentHTML('beforeend', result.html);
    body.insertAdjacentHTML('afterbegin', resultBg.bgHtml);
  }
});

body.addEventListener('click', async (event) => {
  const regForm = await document.querySelector('.formReg');
  const wrapperPodlojka = await document.querySelector('.wrapper-podlojka');

  if (event.target.classList.value === 'wrapper-podlojka' && regForm !== null) {
    regForm.remove();
    wrapperPodlojka.remove();
  }

  if (event.target.classList.value === 'cross' && regForm !== null) {
    regForm.remove();
    wrapperPodlojka.remove();
  }
});

body.addEventListener('click', async (event) => {
  const logForm = await document.querySelector('.formLog');
  const wrapperPodlojka = await document.querySelector('.wrapper-podlojka');

  if (event.target.classList.value === 'wrapper-podlojka' && logForm !== null) {
    logForm.remove();
    wrapperPodlojka.remove();
  }

  if (event.target.classList.value === 'cross' && logForm !== null) {
    logForm.remove();
    wrapperPodlojka.remove();
  }
});

// body.addEventListener('submit', async (event) => {
//   event.preventDefault();
// });
