const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const sendTelegramMessage = require('./sendTelegramMessage');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Обработчик маршрута
app.post('/api/send-order', async (req, res) => {
  const { name, phone, orderDetails } = req.body;

  if (!name || !phone || !orderDetails) {
    return res.status(400).send('Все поля должны быть заполнены.');
  }

  const message = `
    <b>Новый заказ!</b>
    <b>Имя:</b> ${name}
    <b>Телефон:</b> ${phone}
    <b>Детали заказа:</b> ${orderDetails}
  `;

  try {
    await sendTelegramMessage(message);
    res.status(200).send('Заказ отправлен.');
  } catch (error) {
    console.error('Ошибка при отправке:', error.message);
    res.status(500).send('Ошибка при отправке заказа.');
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер работает на порту ${PORT}`);
});
