// Добавляем обработчики событий для всех полей ввода
document.getElementById('hours').addEventListener('input', calculateTime);
document.getElementById('minutes').addEventListener('input', calculateTime);
document.getElementById('seconds').addEventListener('input', calculateTime);

function calculateTime() {
    // Получаем значения из полей ввода
    var hours = parseInt(document.getElementById('hours').value) || 0;
    var minutes = parseInt(document.getElementById('minutes').value) || 0;
    var seconds = parseInt(document.getElementById('seconds').value) || 0;

    // Переводим все в секунды и умножаем на 10
    var perevod = ((hours * 3600) + (minutes * 60) + seconds) * 10;

    // Переводим секунды обратно в дни, часы, минуты и секунды
    var days = Math.floor(perevod / (24 * 3600));
    perevod %= (24 * 3600);
    var outputHours = Math.floor(perevod / 3600);
    perevod %= 3600;
    var outputMinutes = Math.floor(perevod / 60);
    var outputSeconds = perevod % 60;

    // Обновляем значения на странице
    document.getElementById('output-hours').textContent = outputHours;
    document.getElementById('output-minutes').textContent = outputMinutes;
    document.getElementById('output-seconds').textContent = outputSeconds;
}
