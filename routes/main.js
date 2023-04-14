const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Home = require('../views/Main');
const Reg = require('../views/RegForm');
const Bg = require('../views/Background');

const router = express.Router();

const { User } = require('../db/models/');

/* GET home page. */
router.get('/', (req, res) => {
  // если пользователь авторизован то в app.locals есть ключ user
  const { user } = res.app.locals;
  const home = React.createElement(Home, { user });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/reg', (req, res) => {
  // если пользователь авторизован то в app.locals есть ключ user
  const regName = {
    name: 'Зарегинезироваться',
    reg: '/regComplit',
    class: 'formReg',
  };
  const reg = React.createElement(Reg, { regName });
  const html = ReactDOMServer.renderToStaticMarkup(reg);
  res.json({ html });
});

router.get('/regBg', (req, res) => {
  const bg = React.createElement(Bg);
  const bgHtml = ReactDOMServer.renderToStaticMarkup(bg);
  res.json({ bgHtml });
});

router.get('/log', (req, res) => {
  const regName = {
    name: 'Залогинизироваться',
    reg: '/logComplit',
    class: 'formLog',
  };
  const reg = React.createElement(Reg, { regName });
  const html = ReactDOMServer.renderToStaticMarkup(reg);
  res.json({ html });
});

router.post('/regComplit', async (req, res) => {
  // создаём запись в базе данных
  try {
    const user = await User.create({
      name: req.body.login,
      password: req.body.password,
    });
    res.app.locals.user = req.body.login;
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

router.post('/logComplit', async (req, res) => {
  res.app.locals.user = req.body.login;
  const users = await User.findAll();
  users.forEach((el) => {
    if (el.name === req.body.login && el.password === req.body.password) {
      res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
  });
});

router.get('/logout', async (req, res) => {
  delete res.app.locals.user;
  res.redirect('/');
});

module.exports = router;
