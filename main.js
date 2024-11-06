function cadastrar() {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    
    if (name === "" || age === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    
    if (parseInt(age) < 18) {
        alert("Usuário deve ser maior de 18 anos para se cadastrar.");
        return;
    }

    const cadastroLista = document.getElementById("cadastro-lista");

    const cadastroItem = document.createElement("div");
    cadastroItem.className = "cadastro-item";
    
    const nameAge = document.createElement("span");
    nameAge.innerHTML = `${name.toUpperCase()} (${age})`;
    cadastroItem.appendChild(nameAge);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Apagar";
    deleteButton.onclick = function() {
        cadastroLista.removeChild(cadastroItem);
    };

    cadastroItem.appendChild(deleteButton);
    cadastroLista.appendChild(cadastroItem);

    
    nameInput.value = "";
    ageInput.value = "";
}


