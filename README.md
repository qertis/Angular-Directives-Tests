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
```javascript
    var app = angular.module('myapp', []).run(function ($rootScope) {
        $rootScope.variable = "Hello";
    });
    
    app.controller('Ctrl', function($scope){});
```
```html
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
--
zzz
