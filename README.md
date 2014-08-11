Плагин, превращающий div в текстовое поле с возможностью вставки смайлов
```javascript
  //Пример инициализации с параметрами:
  $('div#myEmoji').KEmoji({
      emojiDir: '../img/emoji',
      width: 300,
      height: 58,
      smileContainerWidth: 280,
      smileContainerHeight: 150
  });
```
<h4>Работаем со значением</h4>
```javascript
  $('#myEmoji').KEmoji('val'); //Получаем значение
  $('#myEmoji').KEmoji('val', 'Hello $#D83DDE10#$'); //задаем значение

  $('#myEmoji').KEmoji('valAsHtml'); // Получаем html значение
  $('#myEmoji').KEmoji('valAsHtml', 'Hello <img src="">'); //Задаем
```
<h4>Api</h4>
```javascript
var emoji = $('#myEmoji').KEmoji('api');
```

```javascript
emoji.setWidth(300); //ширина блока
emoji.setHeight(58); //высота
```
```javascript
emoji.setSmileContainerWidth(100); // ширина блока со смайлами
emoji.setSmileContainerHeight(100) // высота
emoji.setSmileContainerOffset(20); // отступ блока со смайлами от поля ввода
```

```javascript
// показываем и скрываем блок со смайлами
emoji.showSmiles();
emoji.hideSmiles();
emoji.toggleSmiles();
```

```javascript
emoji.focus(); // переводим фокус на элемент
```

```javascript
emoji.getValue(); // значение как текст
emoji.getValue(KEmoji.HTML_VALUE); // как html

emoji.setValue('Hello $#D83DDE10#$') // задаем значение ввиде текста
emoji.setValue('Hello <img src="smile.png">', KEmoji.HTML_VALUE); // задаем html (не рекомендуется)
```
