let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener("click", function () {
    let item = document.createElement('li');
    item.innerText = inp.value;

    let dltBtn = document.createElement('button');
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("Delete");

    item.append(dltBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;   
        listItem.remove();
    }
});