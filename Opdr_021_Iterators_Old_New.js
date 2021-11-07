//Old method

let colorsArray = ["yellow", "blue", "red", "orange"];

// let i = 0;
// while (i >= 4) {
//     console.log (colorsArray[i]);
//     i++;
// };

// for (let i = 0; i < colorsArray.length; i++) {
//     console.log (colorsArray[i]);
// }


//Array method

colorsArray.forEach((color) => console.log(color));

const colors = {
  colorWall: "blue",
  colorFruit: "orange",
  colorCar: "red",
  colorHair: "white",
  colorGras: "green",
};

for (x in colors) {
  console.log(colors[x]);
};


//Answers
// 1. 4, 6
// 2. 8
// 3. More structured
// 4. ??
