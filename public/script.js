document.querySelector('#orderForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const orderDetails = document.querySelector('#orderDetails').value.trim();

  if (!name || !phone || !orderDetails) {
    alert('Заполните все поля');
    return;
  }

  try {
    const response = await fetch('/api/send-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, orderDetails }),
    });

    const result = await response.text();
    alert(result);
  } catch (error) {
    console.error('Ошибка при отправке заказа:', error);
    alert('Ошибка при отправке заказа.');
  }
});
