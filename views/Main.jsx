const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='main'>
        <div className='container'>
          <div className='therem'>
            <a href='/bishop'>
              <div className='therem_name'>Священики</div>
            </a>
          </div>
          <div className='therem'>
            <a href='/afro'>
              <div className='therem_name'>Афроамериканцы</div>
            </a>
          </div>
          <div className='therem'>
            <a href='/sousPark'>
              <div className='therem_name'>Южный парк</div>
            </a>
          </div>
        </div>
      </div>
      <script src='./js/logaRega.js' defer></script>
    </Layout>
  );
};
