let text = document.querySelector('textarea');//               Teatarea
let add = document.getElementById('add');//                    Add Button
let mainsection = document.getElementById('mainsection2');//   Todo list

let DeleteButton = document.getElementsByClassName("delete");



//This function run when user add new task to their todo list
add.addEventListener('click', function () {


    let newDiv = document.createElement('div');
    let paragraph = document.createElement('p');
    let button = document.createElement('button');

    paragraph.innerText = text.value;
    button.innerText = "Delete";
    button.classList.add("delete");

    newDiv.appendChild(paragraph);
    newDiv.appendChild(button);
    mainsection.appendChild(newDiv);
    text.value = '';
    DeleteButton = document.getElementsByClassName("delete");
    console.log(DeleteButton)
});


//This function delete task from todo list
mainsection.addEventListener("click", function (event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }

})
