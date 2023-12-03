// У HTML створюємо квадрат, наприклад div.block.
// <div class="block"></div>
// <style>
//  .block{
//      width: 100px;
//      height: 100px;
//      background: black;
//      position: relative;
//      left: 0;
//      top: 0;
//      transition: 0.5s;
//  }
// </style>
// 1. За допомогою функції setInterval кожні пів секунди змінюємо колір фону квадрату на будь-який рандомний колір.
// 2. За допомогою функції setInterval, кожну секунду переміщуємо квадрат на будь-яке місце в межах body.
//    Для цього квадрату задаємо рандомні значення властивостей left та top. Квадрат не повинен виходити за межі body.
// 3. Ширину будь-якого елементу можна знайти за допомогою властивості clientWidth.
// 4. Висоту будь-якого елементу можна знайти за допомогою властивості clientHeight.

const bodyField = document.body;
const block = bodyField.querySelector('.block');

function randomHexColor() {
    const storage = '0123456789abcdef';
    let hex = '#'

    for (let i = 1; i <= 6; i++)
        hex += storage[Math.floor(Math.random() * storage.length)]

    return hex;
}

function setBlockRandomColor() {
    block.style.backgroundColor = randomHexColor();
}

function moveBlockRandom() {
    const fieldHeight = bodyField.clientHeight;
    const fieldWidth = bodyField.clientWidth;
    const blockHalfHeight = block.clientHeight;
    const blockHalfWidth = block.clientWidth;

    const randomTop = Math.ceil(Math.random() * (fieldHeight - block.clientHeight))
    const randomLeft = Math.ceil(Math.random() * (fieldWidth - block.clientWidth))

    block.style.top = randomTop + 'px';
    block.style.left = randomLeft + 'px';
}

setInterval(setBlockRandomColor, 500);
setInterval(moveBlockRandom, 1000);
