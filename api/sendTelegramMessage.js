const fetch = require('node-fetch'); // Для отправки запросов в Telegram API

async function sendTelegramMessage(message) {
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN; // Токен из .env
  const CHAT_ID = process.env.CHAT_ID; // ID чата из .env

  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  const body = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: 'HTML'
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorDetails = await response.text();
    throw new Error(`Ошибка отправки сообщения в Telegram: ${errorDetails}`);
  }
}

module.exports = sendTelegramMessage;
