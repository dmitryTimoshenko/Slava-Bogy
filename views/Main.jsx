const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div className='main'>
        <div className='container'>
          <div className='therem'>
            <div className='therem_name'>Священики</div>
          </div>
          <div className='therem'>
            <div className='therem_name'>Афроамериканцы</div>
          </div>
          <div className='therem'>
            <div className='therem_name'>Южный парк</div>
          </div>
        </div>
      </div>
      <script src='./js/logaRega.js' defer></script>
    </Layout>
  );
};
