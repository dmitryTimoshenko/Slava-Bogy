const React = require('react');
const Layout = require('./Layout');

module.exports = function Bishop({ title, user, question }) {
  return (
    <Layout title={title} user={user}>
      <div className='main'>
        <div className='container'>
          <div className='theremBishop'>
            <div className='therem_name'>Вопросы о Священно служителях</div>
            <div className='question'>{question}</div>
            <input type='text' name='answer' />
            <button className='submit'>Отправить ответ</button>
          </div>
        </div>
      </div>
      <script src='./js/logaRega.js' defer></script>
    </Layout>
  );
};
