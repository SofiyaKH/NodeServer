let loadMath = true;

if (loadMath) {
  const math = require("./math");

  console.log(math.add(5, 5));

  console.log(math.subtract(10, 3));
} else {
  console.log("Модуль не был загружен");
}


