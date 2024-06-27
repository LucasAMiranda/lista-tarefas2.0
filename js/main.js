const filterTask = (event) => {
    event.preventDefault(); // Previne o recarregamento da página

    let taskNameInput = document.getElementById("taskName");
    let taskList = document.getElementById("taskList");

    if (taskNameInput.value.trim() === "") {
        alert("Por favor insira a tarefa desejada!");
        return;
    }
    
    // Cria um elemento li dentro da ul que está no código html
    let list_items = document.createElement("li");
    list_items.textContent = taskNameInput.value;
    taskList.appendChild(list_items);

    taskNameInput.value = ""; // Limpa novamente o campo, permitindo inserir uma nova tarefa
}

// Removendo a chamada imediata da função filterTask
// filterTask();
