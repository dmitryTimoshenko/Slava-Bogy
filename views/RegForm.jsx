const React = require('react');
const Bg = require('./Background');

module.exports = function RegForm({ regName }) {
  return (
    <form action={regName.reg} className={regName.class} method='POST'>
      <img src='/assets/closecross.svg' alt='Кресты' className='cross' />
      <div className='wrapper_form'>
        <p className='text'>Логин</p>
        <input type='text' name='login' placeholder='Как вас зовут сын мой?' />

        <p className='text'>Пароль</p>
        <input type='password' name='password' placeholder='Введите пароль' />

        <button className='submit'>{regName.name}</button>
      </div>
    </form>
  );
};
