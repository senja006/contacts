>Чтобы установить приложение:

1. npm install
2. bower install

>Чтобы собрать проект для production

gulp prod

>Чтобы собрать проект для передачи программисту

gulp prog

>Код для проверки верстки

var a,w=document.createTreeWalker(document,NodeFilter.SHOW_TEXT);while(a=w.nextNode()){if(a.textContent.trim().length)a.textContent='Одиннадцатиклассница пошла посмотреть на достопримечательность, она шла долго, несколько строчек, пока не пришла'}