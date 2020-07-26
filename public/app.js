var list = document.getElementById("list");

function inputItems(){
    // LI TAGS
    var input = document.getElementById("todo-items");
    var li = document.createElement("li");
    li.setAttribute("class" , "list-group-item");
    var liText = document.createTextNode(input.value);
    list.appendChild(li);
    li.appendChild(liText);
    input.value = ""

    // DELETE BUTTON
    var delbtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delbtn.setAttribute("class" , "btn btn-danger ");
    delbtn.setAttribute("onclick" , "deleteItem(this)");
    li.appendChild(delbtn);
    delbtn.appendChild(delText);

    // EDIT BUTTON
    var editbtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editbtn.setAttribute("class" , "btn btn-dark ");
    editbtn.setAttribute("onclick" , "editItem(this)");
    li.appendChild(editbtn);
    editbtn.appendChild(editText);
        
}

function deleteItem(e){
    e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = "";
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editVal = prompt("Enter Edited Item" , val);
    e.parentNode.firstChild.nodeValue = editVal;

}