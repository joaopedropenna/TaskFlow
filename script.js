const tarefas = [
{id: 1, titulo: "Adicionar tarefas pelo formulário", status: "todo"}, 
{id: 2, titulo: "Estilizar o formulário", status: "doing"},
{id: 3, titulo: "Adicionar tarefas na tela", status: "done"}
];
const lista = document.querySelector('[data-status="todo"] ul');
const item = document.createElement('li');
item.textContent = tarefas[0].titulo;
lista.appendChild(item);
console.log(lista);