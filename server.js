const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Импортируем маршруты
const itemsRoutes = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Маршруты
app.use('/api/items', itemsRoutes);

// Обработка корневого маршрута
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`My project has started`);
  console.log(`Здесь смотрим результаты: http://localhost:${PORT}/`);
  console.log(`Вы можете просто ввести URL в адресную строку браузера для GET-запросов:`);
  console.log(`http://localhost:${PORT}/api/items?page=0&size=20`);
  console.log(`http://localhost:${PORT}/api/items?page=0&size=20&search=Item%2010`);
  console.log(`После запуска сервера переходим сюда:`);
  console.log(`http://localhost:${PORT}/`);
});
