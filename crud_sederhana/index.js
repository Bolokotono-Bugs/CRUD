let data = [
    {id: 1, name: "Dildo Man", phone: +628999564231},
    {id: 2, name: "Al Kufur", phone: +628999564241},
]

function readAll() {
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");

    var object = localStorage.getItem("object");
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record => (
        elements += `<tr>
        <td>${record.name}</td>
        <td>${record.phone}</td>
        <td>
            <button class="edit" onclick={edit(${record.id})}>Edit</button>
            <button class="delete" onclick={delete(${record.id})}>Delete</button>
        </td>
        
        
        
        </tr>`
    ))

    tabledata.innerHTML = elements;
}
function delet(id) {
    data =data.filter(rec => rec.id !== id);
    readAll();
}

function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}
function add() {
    var name = document.querySelector(".name").value;
    var phone = document.querySelector(".phone").value;

    var newObj = {id: 3, name: name, phone: phone};
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}
function edit(id) {
    document.querySelector(".update_form").style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector(".uname").value = obj.name;
    document.querySelector(".uphone").value = obj.phone;

    document.querySelector(".id").value = obj.id;
}
function update() {
    var id = parseInt(document.querySelector(".id").value);
    var name = document.querySelector(".uname").value;
    var phone = document.querySelector(".uphone").value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, name, phone};
    document.querySelector(".update_form").style.display = "none";
    readAll();
}