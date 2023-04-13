const { Users, Static } = require('../../db/models');

async function addingAName(login, password) {
  const user = await Users.findOne({ where: { login: login } }); // обращаемся к базе данных
  const passw = await Users.findOne({ where: { password: password } });
  if (user && passw) {
    // console.log(' Юзер существует ', user.id); // если юзер есть то то просто пропускаем
    return user.id; // Вернули id конкретного юзера
  }
  const userNoNew = await Users.create({
    login: login,
    password: password,
  }); // Добавление в базу имя если его небыло

  // console.log('Создали юзера', userNoNew.id);
  return userNoNew.id; // Вернули id конкретного юзера
}

async function statisticsOutput(login, scor) {
  const user = await Users.findOne({ where: { login: login } }); // находим имя
  if (user) {
    // если юзер есть то к этому имени добовляем его статистику
    const rez = await Static.create({
      user_id: user.id,
      scores: scor,
    });
    console.log(user.login, rez.scores);
  }
}

addingAName('Vanya', 1234);
statisticsOutput('Vanya', 73459);
