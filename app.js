var list= document.getElementById('list');




function addTodo(){
 var todo_item = document.getElementById('todo-item')

 //create li tag with text Node
   var li= document.createElement('li');
   var liText = document.createTextNode(todo_item.value)
   li.setAttribute("class","list-group-item")
   li.appendChild(liText)


//create delete button
   var delBtn = document.createElement("button")
   var delText = document.createTextNode("DELETE")
   delBtn.setAttribute("class", "btn4")
   delBtn.setAttribute("onclick","deleteItem(this)")
   delBtn.appendChild(delText)

   //create edit button
   var editBtn=document.createElement("button");
   var editText= document.createTextNode("EDIT")
   editBtn.setAttribute("class","btn3")
   editBtn.appendChild(editText)
   editBtn.setAttribute("onclick","editItem(this)")


   li.appendChild(delBtn)
   li.appendChild(editBtn)
   

   list.appendChild(li)

   todo_item.value = ""
 
}

function deleteItem(e){
    e.parentNode.remove()
    console.log(e.parentNode)

}

function editItem(e){
    
    
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;

}

function deleteAll(){
    list.innerHTML = ""
}