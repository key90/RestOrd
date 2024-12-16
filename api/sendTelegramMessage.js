// Функция для отправки сообщения в Telegram
async function sendTelegramMessage(message) {
   const telegramBotToken = process.env.TELEGRAM_TOKEN;  // Замените на ваш токен
   const chatId = process.env.CHAT_ID;  // Замените на ваш chat_id

   const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

   try {
       const response = await fetch(url);
       const json = await response.json();

       if (response.ok) {
           console.log('Message sent:', json);
       } else {
           console.error('Error in response:', json);
       }
   } catch (error) {
       console.error('Error sending message:', error);
   }
}

// Пример использования
sendTelegramMessage('Новый заказ с сайта ресторана: Пицца, 2 шт.');
