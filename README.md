Git-репозиторий для тестового задания

1) Первое на что я обратил внимание - link на стили подключается перед тегом <style>.
   Есть единогласное правило верстки - срабатывает первое свойство из одинаковых для селектора, но здесь используется Директива important.
   Important может переопределять себя, поэтому, т.к. последнее свойство с important в совокупности стилей задает color: pink, то
   Ответ: pink.
  
2) Для работы кода необходимо указать свойство width для узла.

3) Насколько я знаю, Тег <DOCTYPE> служит для определения версии используемого языка валидатором. Больше ничего не могу сказать.

4) Все обернуто в тег <p>, поэтому не вижу никаких проблем. Не уверен, что начертание влияет на SEO. Насколько мне известно, на SEO влияют <h*> и <p>.
  
5) Думаю что выгоднее использование jpg, т.к. данный формат весит меньше png. По моему мнению, зависит от конкретной ситуации.
 
6) Честно говоря, задача меня запутала. Не могу дать ответа.
  
7) Сработает замыкание т.к. setTimeout внутри цикла и выведет 10 раз по 10
  
8) let имеет зону видимости ограниченную фигурными скобками. Вызов console.log() увидит глобальную переменную count = 5.
