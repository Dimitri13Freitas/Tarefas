// Adiciona tarefa
const btnAddTarefa = document.querySelector('#btnAddTarefa');
const inputTarefas = document.querySelector('#inputTarefas');
const jsLista = document.querySelector('.jsLista');

inputTarefas.addEventListener('keypress', (event) => {
  if(event.keyCode === 13) {
    addTarefa();
  };
});

btnAddTarefa.addEventListener('click', () => {
  addTarefa();
});



function addTarefa() {
  let tarefaNome = document.createElement('p');
  let tarefaItem = document.createElement('li');
  let button = document.createElement('button');

  
  tarefaNome.innerHTML = inputTarefas.value;
  tarefaItem.appendChild(tarefaNome);
  jsLista.appendChild(tarefaItem);
  tarefaItem.appendChild(button);


  inputTarefas.value = '';
}

// Remove Tarefa


window.onload = () => {
  inputTarefas.focus();
}