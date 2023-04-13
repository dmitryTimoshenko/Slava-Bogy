const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Home = require('../views/Main');
const Reg = require('../views/RegForm');
const Bg = require('../views/Background');

const router = express.Router();
// const Die = require('../db/models/die');
// const DieNum = require('../views/DieNum');

/* GET home page. */
router.get('/', (req, res) => {
  const home = React.createElement(Home, req.app.locals);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/reg', (req, res) => {
  const reg = React.createElement(Reg);
  const html = ReactDOMServer.renderToStaticMarkup(reg);
  res.json({ html });
});

router.get('/reg', (req, res) => {
  const reg = React.createElement(Reg);
  const html = ReactDOMServer.renderToStaticMarkup(reg);
  res.json({ html });
});

router.get('/regBg', (req, res) => {
  const bg = React.createElement(Bg);
  const bgHtml = ReactDOMServer.renderToStaticMarkup(bg);
  res.json({ bgHtml });
});

router.get('/regBg', (req, res) => {
  const bg = React.createElement(Bg);
  const bgHtml = ReactDOMServer.renderToStaticMarkup(bg);
  res.json({ bgHtml });
});

module.exports = router;
