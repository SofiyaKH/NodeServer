const fs = require("fs");

const getWrite = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1/");

  if (res.ok) {
    const data = await res.json();

    fs.writeFile("1.txt", JSON.stringify(data), (err) => {
      if (err) {
        console.log("Ошибка записи в файл");

        return;
      }
    });
  }
};
getWrite();
