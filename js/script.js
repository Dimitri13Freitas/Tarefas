// Adiciona tarefa
const btnAddTarefa = document.querySelector('#btnAddTarefa');
const inputTarefas = document.querySelector('#inputTarefas');
const jsLista = document.querySelector('.jsLista');

function addTarefa() {

  let tarefaItem = document.createElement('li');
  jsLista.appendChild(tarefaItem);

  let tarefaNome = document.createElement('p');
  tarefaItem.appendChild(tarefaNome);

  let button = document.createElement('button');
  tarefaItem.appendChild(button);
  
  
  tarefaNome.innerHTML = inputTarefas.value;

  inputTarefas.value = '';
}

inputTarefas.addEventListener('keypress', (event) => {
  if(event.keyCode === 13) {
    addTarefa();
  };
});

btnAddTarefa.addEventListener('click', () => {
  addTarefa();
  teste();
});



// Remove Tarefa

  const removeTarefa = jsLista.querySelectorAll('li button');
  const itemTarefa = jsLista.querySelectorAll('li');
  
  removeTarefa.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log('sidh')
    });
  });



window.onload = () => {
  inputTarefas.focus();
};