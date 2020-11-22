//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

​
let button1 = document.getElementById('button1');
​
button1.onclick = (e) => {
  let colorIndex = Math.floor(Math.random() * colors.length);
  document.querySelector('body').style.backgroundColor = colors[colorIndex];
​
  addColorName(`Color name is ${colors[colorIndex]}`);
}

