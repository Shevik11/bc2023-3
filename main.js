const fs = require('fs'); // підключаємо модуль fs

// Читання файлу
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка при читанні файлу:', err);
    return;
  }

  try {
    // Парсимо JSON дані
    const exchangeRates = JSON.parse(data);

    // Знаходимо максимальний курс
    let maxRate = exchangeRates[0].rate; // Встановимо maxRate на перший курс з масиву
    let maxCurrency = exchangeRates[0].cc; // Встановимо maxCurrency на валюту першого курсу

    for (const currency of exchangeRates) {
      if (currency.rate > maxRate) {
        maxRate = currency.rate;
        maxCurrency = currency.cc;
      }
    }

        // let maxRatet = Math.max(exchangeRates[currency]);
    // maxRate = exchangeRates[currency];
    // maxCurrency = currency;

    const outputText = `Максимальний курс: ${maxCurrency} ${maxRate}`;

    // Запис у файл output.txt
    fs.writeFile('output.txt', outputText, 'utf8', (err) => {
      if (err) {
        console.error('Помилка при запису у файл:', err);
        return;
      }
      console.log('Максимальний курс успішно збережено у файлі output.txt');
      
      // Виведемо максимальний курс в консоль
      console.log(outputText);
    });
  } catch (error) {
    console.error('Помилка при парсингу JSON:', error);
  }
});
