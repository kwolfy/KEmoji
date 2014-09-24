Текстовое поле с возможностью вставки смайлов
<br>
<a href="http://kwolfy.github.io/KEmoji/">Демо</a>
```javascript
  //Пример инициализации с параметрами:
  KEmoji.init('myEmoji', {
      emojiDir: '../img/emoji',
      width: 300,
      height: 200
  });
```
<h4>Api</h4>
```javascript
var emoji = KEmoji.get('myEmoji');
```
<h4>Визуальные параметры</h4>
```javascript
emoji.setWidth(300); //ширина тектового поля
emoji.setHeight(58); //высота

emoji.setSmileContainerWidth(100); // ширина всплывающего окна со смайлами
emoji.setSmileContainerHeight(100) // высота

emoji.focus(); // переводим фокус на текстовое поле
```

<h4>Управление всплывающим окном со смайлами</h4>
```javascript
// показываем и скрываем блок со смайлами
emoji.showSmiles();
emoji.hideSmiles();
emoji.toggleSmiles();
```

```javascript
emoji.getValue(); // значение как текст
emoji.getValue(KEmoji.HTML_VALUE); // как html

emoji.setValue('Hello $#D83DDE10#$') // задаем значение ввиде текста
emoji.setValue('Hello <img src="smile.png">', KEmoji.HTML_VALUE); // задаем html (не рекомендуется)
```
