const timeDelay = 15; //время до удаления пользователя

const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
const data = new Map();

app.post('/user', (req, res) => {
  let qount = 0;
  const { ip, time } = req.body;
  //проверяем когда был пользователь
  for (let item of data) {
    if (item[1].time <= time - timeDelay) {
      data.delete(item[0]);
    }
  }
  // считаем посещения
  if (!data.has(ip)) {
    data.set(ip, { time, qount: 0 });
  } else {
    data.set(ip, { time, qount: data.get(ip).qount + 1 });
  }  
  //берем общее количество посещений
  for (let item of data) {
    qount += item[1].qount
  }
  res.json(qount+1);
});

app.listen(port, () => {
  console.log(`Port has started on :${port}`);
});
