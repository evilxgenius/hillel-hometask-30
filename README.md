У HTML створюємо квадрат, наприклад div.block.
```html
<div class="block"></div>
<style>
 .block{
     width: 100px;
     height: 100px;
     background: black;
     position: relative;
     left: 0;
     top: 0;
     transition: 0.5s;
 }
</style>
```
1. За допомогою функції setInterval кожні пів секунди змінюємо колір фону квадрату на будь-який рандомний колір.
2. За допомогою функції setInterval, кожну секунду переміщуємо квадрат на будь-яке місце в межах body. Для цього квадрату задаємо рандомні значення властивостей left та top. Квадрат не повинен виходити за межі body.
3. Ширину будь-якого елементу можна знайти за допомогою властивості clientWidth.
4. Висоту будь-якого елементу можна знайти за допомогою властивості clientHeight.