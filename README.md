Angular-Directives-Tests
========================

## Задания
Необходимо вывести в консоль с интервалом в секунду квадрат чисел от 2 до 5, исправьте код, какая основная его ошибка?:
```javascript
  for (var i = 0; i <= 5; i++) {
  setTimeout(function() {
    console.log(i * i);
  }, 1);
}
```
Здесь несколько ошибок. Первая - не используется замыкание, поэтому функция setTimeout отрабатывает неверно. Вторая ошибка - время выполнения написано неправильно, в данном случае, правильный код будет выглядеть так: 
```javascript
for(var i = 0; i <= 5; ++i) {
	(function(i) { 
		setTimeout(function() {
		   console.log(i*i)
		}, 1000)
	}(i))
}
```
Чем плох этот код?
```javascript
var container = $('#container);
$('<span/>')
.append(new Array(1000).join(‘lorem ipsum’))
.click(function() { })
.appendTo(container)
container[0].innerHTML = '';
```
Здесь используется jQuery. Рассмотрим код построчно:
```javascript
/* Не используется правильный <a href="http://blog.baskovsky.ru/2013/09/javascript-jquery-style-guide.html"> стиль написания jQuery </a>. Переменные обернутые jQuery, по-хорошему должны именоваться, например так: 
$container = $('#container')
*/
var container = $('#container); 
/* Здесь можно обойтись без закрывающего тега */
$('<span/>') 
/* В данном случае можно обойтись без ключевого слова 'new' */
.append(new Array(1000).join(‘lorem ipsum’))  
/* создания большго числа обработчиков замедляет браузер. Лучше повесить один и делать перехват по target */
.click(function() {})
.appendTo(container)
/* Используя jQuery лучше делать container.html('') */
container[0].innerHTML = '';
```
--
Почему не обновляется надпись?
```html
<script>
    var app = angular.module('myapp', []).run(function ($rootScope) {
        $rootScope.variable = "Hello";
    });
    
    app.controller('Ctrl', function($scope){});
</script>
<body ng-app="myapp">
    <p>
        <strong>Variable:</strong> {{variable}}
    </p>
    
    <div ng-controller="Ctrl">
        <p>
            <strong>Variable:</strong> <input type="text" ng-model="variable"/>
        </p>
    </div>    
</body>
```
Потому-что переменная variable находится вне текущего контроллера ng-controller="Ctrl". Чтобы пример работал верно, надо перенести ng-controller="Ctrl" в body
--
Напишите конфигурируемую директиву (AngularJS):
Необходима директива которая в зависимости от конфигурации будет
добавлять/убирать: иконку аудио, текст, поле ввода текста. Должна быть возможность
настроить количество колонок, текст должен поддерживать и передаваемый html.
6.  Расширьте написанную ранее директиву, либо создайте на её основе новую, с возможностью перечислить под ней варианты ответов и добавить поля для “drag and drop”; введите возможность перетаскивать в эти поля варианты ответов.

DEMO: http://goo.gl/TyW9Bs
--
Представьте что Вам необходимо вывести не одну, а несколько разных директив с разными конфигурациями; количество директив и их конфигурации зависят от ответа сервера. Ваше решение?
Сперва потребуется загружать необходимые файлы и шаблоны с сервера, например, помощью provider. После их загрузки потребуется сделать config и сделать компиляцию шаблонов.
--
# License
MIT

## Install: 
bower install
