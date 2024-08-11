document.getElementById('hours').addEventListener('input', calculateTime);
document.getElementById('minutes').addEventListener('input', calculateTime);
document.getElementById('seconds').addEventListener('input', calculateTime);

function calculateTime() {
    // Получаем значения из полей ввода
    var hours = parseInt(document.getElementById('hours').value) || 0;
    var minutes = parseInt(document.getElementById('minutes').value) || 0;
    var seconds = parseInt(document.getElementById('seconds').value) || 0;

    // Переводим все в секунды и умножаем на 10
    var totalSeconds = ((hours * 3600) + (minutes * 60) + seconds) * 10;

    // Переводим секунды обратно в дни, часы, минуты и секунды
    var days = Math.floor(totalSeconds / (24 * 3600));
    totalSeconds %= (24 * 3600);
    var outputHours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    var outputMinutes = Math.floor(totalSeconds / 60);
    var outputSeconds = totalSeconds % 60;

    // Обновляем значения на странице
    document.getElementById('output-days').textContent = days;
    document.getElementById('output-hours').textContent = outputHours;
    document.getElementById('output-minutes').textContent = outputMinutes;
    document.getElementById('output-seconds').textContent = outputSeconds;
}
