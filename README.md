Превращаем div в текстовое поле с возможностью вставки смайлов
<br>
<a href="http://kwolfy.github.io/KEmoji/">Демо</a>
```javascript
  //Пример инициализации с параметрами:
  KEmoji.init('myEmoji', {
      emojiDir: '../img/emoji',
      width: 300,
      height: 200,
      smileContainerWidth: 280,
      smileContainerHeight: 150
  });
```
<h4>Api</h4>
```javascript
var emoji = KEmoji.get('myEmoji');
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
