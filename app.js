// Поключаем babel для работы
require('@babel/register');

// Подключаем экспресс (сервер)
const express = require('express');

// Поключаем path для указания пути в директории
const path = require('path');

// Пакет для отслеживания статуса у клиента
const logger = require('morgan');

// Путь поключения роутов для обработки запросов и ответов сервера
const MainRouter = require('./routes/main');

// Запускаем сервер
const app = express();

// Задаем порт для сервера
const PORT = process.env.PORT ?? 3000;

// Прописываем title для сайта
app.locals.title = 'Святоши';

// Получаем статус dev
app.use(logger('dev'));

// Сервер использует метод json(), Который объясняет серверу как читать json файл от клиента
app.use(express.json());

// Объясняет серверу как парсить данные из формы
app.use(express.urlencoded({ extended: false }));

// Поключает статические файлы .css .js из папки public, которые лежат в папке public в коневой директории
app.use(express.static(path.join(__dirname, 'public')));

// Сервер использует роуты из папки routes\MainRouter.js
app.use('/', MainRouter);

//
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server started at port', PORT);
});
