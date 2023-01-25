function addToTable() {

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;    
    let category = document.getElementById('category').value;
    let states = document.getElementById('states').value;
    let table = document.getElementById('Table');

    let tableSize = table.rows.length;    
    let row = table.insertRow(tableSize); 
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    row.id = tableSize;

    //Criando o codigo do botão para remover a linha
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";

    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    cell5.innerHTML = category;
    cell6.innerHTML = states;
    cell7.innerHTML = btnCode;

    //Limpa os campos de input de dados
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('category').value = "";
    document.getElementById('states').value = "";

    //Retorna 'false' para impedir o reload da pagina
    return false;
}

//Remover uma linha usando o primeiro argumento id
function removeToTable(id){
    let row = id.parentNode.parentNode.id; //Pega o id do avô do botão
    row = document.getElementById(row);    //Recebe o elemento da linha pelo id
    row.parentNode.removeChild(row);       //Remove a linha  

    return false; //Retornando 'false' para impedir o reload da pagina
}

