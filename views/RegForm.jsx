const React = require('react');
const Bg = require('./Background');

module.exports = function RegForm({ component }) {
  return (
    <form action='/regComplit' className='formReg' method='POST'>
      <div className='wrapper_login'>
        <p className='text_log'>Логин</p>
        <input type='text' name='login' placeholder='Как вас зовут сын мой?' />
      </div>
      <div className='wrapper_password'>
        <p className='text_password'>Пароль</p>
        <input type='password' name='password' placeholder='Введите пароль' />
      </div>
      <button className='submit'>Зарегенизироваться</button>
    </form>
  );
};
