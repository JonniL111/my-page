Для хранения информации о посещениях создаем подобие сервера с использование Express. Данные храним в коллекции map.
Пользователей отслеживаем по ip и по времени посещения.
Считаем посещения текущего пользователя и  если со времени последнего посещения прошло больше 15 минут - удаляем всю инфу о нем.
В счетчик выводим общее количество посещений всех пользователей.

Запуск приложения npm start. 

Запуск сервера npm run server
