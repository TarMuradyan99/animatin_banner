let paragraph = document.getElementById('paragraph');
let array = [
  '<p class="mytext">Новая сеть нативной рекламы</p>',
  '<p class="mytext">Высокая эффективность</p>',
  '<p class="mytext">Креативные форматы</p>',
  '<div class="mytext"><p class="lastText">nativenetwork.uz</p><button class="button">Узнать больше</button></div>'
];

for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      // Set the opacity to 0 before changing the text
      paragraph.style.opacity = 0;
      setTimeout(() => {
        paragraph.innerHTML = array[i];
        // Set the opacity to 1 after changing the text
        paragraph.style.opacity = 1;

      }, 500);
    }, i * 2000);
    
  if(paragraph.innerHTML === array.length-1){
    paragraph.innerHTML = array.length-1
}
paragraph.innerHTML = '';

  }




