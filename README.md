##UNMAINTAINED

Текстовое поле с возможностью вставки смайлов
<br>
<a href="http://kwolfy.github.io/KEmoji/">Демо</a>
```javascript
  //Пример инициализации с параметрами:
  KEmoji.init('myEmoji', {
      width: 300,
      height: 200
  });
  
  var emojiList = KEmoji.initByClass('className', {width: 400, height: 200});
  var kemoji = emojiList[0];
    
    
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


<h4>Генерирование смайлов</h4>
<p>В файле <i>generator/index.php</i> прописываем нужные параметры и запускаем</p>

<table class="table">
<thead>
<tr>
<th style="width:20%;">Параметр</th>
<th style="width:50%">Описание</th>
<th style="width:30%;">По умолчанию</th>
</tr>
</thead>
<tbody>
<tr>
<td>ROOT_DIR</td>
<td>Корневая директория, относительно которой работают пути</td>
<td>текущая папка</td>
</tr>
<tr>
<td>INPUT_DIR</td>
<td>Директория со смайлами, названия которых должны строиться по шаблону <i>кодсмайла.(png|gif|jpg)</i></td>
<td>generator/demo/emoji</td>
</tr>
<tr>
<td>OUTPUT_DIR</td>
<td>Директория для сохранения сгенерированного результата</td>
<td>generator/demo/result</td>
</tr>
<tr>
<td>SMILE_WIDTH</td>
<td>Ширина смайла</td>
<td>16</td>
</tr>
<tr>
<td>SMILE_HEIGHT</td>
<td>Высота смайла</td>
<td>16</td>
</tr>
<tr>
<td>MAX_COLS</td>
<td>Максимальное количество смайлов в одной строке картинки.</td>
<td>20</td>
</tr>
</tbody>
</table>




