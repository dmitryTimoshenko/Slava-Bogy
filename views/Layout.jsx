const React = require('react');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang='ru'>
      <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='/stylesheets/reset.css' />
        <link rel='stylesheet' href='/stylesheets/style.css' />
        <title>{title}</title>
      </head>
      <body>
        <header className='header'>
          <div className='container'>
            <div className='wrapper_header'>
              <div className='logo'>
                <a href='/'>Щипитильные вопросики</a>
              </div>
              <nav>
                <ul className='nav_list'>
                  <li className='nav_item'>
                    <a href='/reg' className='reg'>
                      Регинизация
                    </a>
                  </li>
                  <li className='nav_item'>
                    <a href='/log' className='log'>
                      Логинизация
                    </a>
                  </li>
                  {user && (
                    <>
                      <li className='nav_item'>Привет! {user}</li>
                      <li className='nav_item'>
                        <a href='/logout'>Выход</a>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className='footer'>
          <div className='conteiner'>
            <div className='footer_text'>НаШ КоМаНдА СлАвА БоГу</div>
          </div>
        </footer>
      </body>
    </html>
  );
};
