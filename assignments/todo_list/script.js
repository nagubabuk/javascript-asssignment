var input=document.querySelector('input');
var button=document.querySelector('button');
var todosDiv=document.querySelector('div.todos');
var count=0;
function adding(){
var newTag=document.createElement('p')
var text=document.createTextNode(input.value)
newTag.setAttribute('key',count++);
newTag.appendChild(text);
todosDiv.appendChild(newTag);
newTag.addEventListener('click',function(){
    todosDiv.removeChild(newTag)
})
}

button.addEventListener('click', adding);



