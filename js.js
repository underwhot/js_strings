"use strict";
/*
ЗАДАЧИ:
Создайте программу которая будет преобразовывать переменные слова в которых разделены нижним тире, в переменные которые будут записанны в camelCase нотации.
/////////
Подсказки:
1) Решение должно работать с переменными из 2-х слов. Не больше
2)Чтобы получить строку введенных данных из textarea, можно получить значение свойства value, DOM элемента textarea
3) Практика сложная, поэтому если на чем то застряли, посмотрите решение проблемы и пробуйте дальше самостоятельно.
4)Записать результат вы можете в div с классом output, через innerText
5)  По итогу переменные должны выглядеть так: 
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture
*/

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const text = document.querySelector(".text").value,
    output = document.querySelector(".output");

  const rows = text.split("\n");
  let out = [];

  for (const row of rows) {
    let [first, second] = row.trim().toLowerCase().split("_");
    out.push(`${first}${second.replace(second[0], second[0].toUpperCase())}`);
  }
  output.innerText = out.join("\n");
});
