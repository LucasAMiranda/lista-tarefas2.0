const filterTask = (event) => {
    event.preventDefault(); // Previne o recarregamento da página

    let taskNameInput = document.getElementById("taskName");
    let taskList = document.getElementById("taskList");

    if (taskNameInput.value.trim() === "") {
        alert("Por favor insira a tarefa desejada!");
        return;
    }
    
    // Cria um elemento li dentro da ul que está no código html
    let listItem = document.createElement("li");
    listItem.classList.add("task");

    // Cria um checkbox para marcar a tarefa como completa ou incompleta
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.addEventListener("change", updateTaskState);

    // Adiciona o checkbox e o nome da tarefa ao elemento li
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(taskNameInput.value));
    taskList.appendChild(listItem);

    taskNameInput.value = ""; // Limpa novamente o campo, permitindo inserir uma nova tarefa
}

const updateTaskState = () => {
    filterTasks();
}

const filterTasks = () => {
    const filterValue = document.querySelector('input[name="filter"]:checked').value;
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(task => {
        const isCompleted = task.querySelector(".task-checkbox").checked;
        if (filterValue === "all") {
            task.style.display = "block";
        } else if (filterValue === "completed" && isCompleted) {
            task.style.display = "block";
        } else if (filterValue === "incompleted" && !isCompleted) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

document.querySelector("form").addEventListener("submit", filterTask);
document.querySelectorAll('input[name="filter"]').forEach(radio => {
    radio.addEventListener("change", filterTasks);
});

filterTasks(); // Inicializa a filtragem para exibir todas as tarefas por padrão
