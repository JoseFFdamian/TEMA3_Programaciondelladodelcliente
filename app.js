var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
}

function readFormData() {
    var formData = {};
    formData["Id_producto"] = document.getElementById("Id_producto").value; 
    formData["nombre_producto"] = document.getElementById("nombre_producto").value;
    formData["existencia"] = document.getElementById("existencia").value;
    formData["precio"] = document.getElementById("precio").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("jugue_list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Id_producto;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nombre_producto;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.existencia;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.precio;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML=  '<button onClick= onEdit(this)>Modificar</button> <button onClick= onDelete(this)>Eliminar</button>'
}


//Boton de modificar
function onEdit(td) {
selectedRow = td.parentElement.parentElement;
document.getElementById('Id_producto').value = selectedRow.cells[0].innerHTML;
document.getElementById('nombre_producto').value = selectedRow.cells[1].innerHTML;
document.getElementById('existencia').value = selectedRow.cells[2].innerHTML;
document.getElementById('precio').value = selectedRow.cells[3].innerHTML;   
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Id_producto;
    selectedRow.cells[1].innerHTML = formData.nombre_producto;
    selectedRow.cells[2].innerHTML = formData.existencia;
    selectedRow.cells[3].innerHTML = formData.precio;
}

//Boton de eliminar
function onDelete(td) {
if(confirm('¿Esta seguro de eliminar este registro?')){
    row = td.parentElement.parentElement;
    document.getElementById('jugue_list').deleteRow(row.rowIndex);
}
resetForm();
}

// Boton de Reiniciar
function resetForm() {
document.getElementById('Id_producto').value = '';
document.getElementById('nombre_producto').value = '';
document.getElementById('existencia').value = '';
document.getElementById('precio').value = '';
}

//Local Store 

