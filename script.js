let addItem = document.getElementById("addSomething");
let list = document.getElementById("items");
let data = document.getElementById("userData");
let clearList = document.getElementById("clear");

addItem.addEventListener("click", function () {

    let toDoItem = document.createElement("li");

    toDoItem.innerText = data.value;

    list.appendChild(toDoItem);

    data.value = " ";

    toDoItem.addEventListener("click", function () {
        list.removeChild(toDoItem);
    })

})

