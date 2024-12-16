const express = require('express');
const cors = require('cors');
const sendTelegramMessage = require('./sendTelegramMessage'); // Файл с функцией для отправки сообщений

const app = express();
app.use(cors()); // Разрешить все домены
app.use(express.json()); // Для обработки JSON

// Обработка POST-запроса с данными о заказе
app.post('/api/server', async (req, res) => {
  const { customerName, customerPhone, customerAddress, items } = req.body;

  // Проверка на наличие всех данных
  if (!customerName || !customerPhone || !customerAddress || !items || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Все поля обязательны.' });
  }

  // Формирование сообщения для Telegram
  let orderMessage = `<b>Новый заказ:</b>\n`;
  orderMessage += `<b>Имя:</b> ${customerName}\n`;
  orderMessage += `<b>Телефон:</b> ${customerPhone}\n`;
  orderMessage += `<b>Адрес:</b> ${customerAddress}\n\n`;
  orderMessage += `<b>Товары:</b>\n`;

  let totalAmount = 0;
  items.forEach(item => {
    orderMessage += `${item.dishName} - ${item.dishPrice} руб. x${item.quantity}\n`;
    totalAmount += item.dishPrice * item.quantity;
  });

  orderMessage += `\n<b>Итого:</b> ${totalAmount} руб.`;

  try {
    // Отправка сообщения в Telegram
    await sendTelegramMessage(orderMessage);
    res.json({ success: true, message: 'Заказ отправлен!' });
  } catch (error) {
    console.error('Ошибка при отправке в Telegram:', error);
    res.status(500).json({ success: false, message: 'Ошибка отправки заказа в Telegram.' });
  }
});

// Экспортируем серверное приложение
module.exports = app;
