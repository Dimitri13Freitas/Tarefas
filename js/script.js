// Adiciona tarefa
const btnAddTarefa = document.querySelector('#btnAddTarefa');
const inputTarefas = document.querySelector('#inputTarefas');
const jsLista = document.querySelector('.jsLista');



inputTarefas.addEventListener('keypress', (event) => {
  if(event.keyCode === 13) {
    addTarefa();
    removeTarefa();
  };
});

btnAddTarefa.addEventListener('click', () => {
  addTarefa();
  removeTarefa();
});

function addTarefa() {
  let tarefaItem = document.createElement('li');
  jsLista.appendChild(tarefaItem);

  let tarefaNome = document.createElement('p');
  tarefaItem.appendChild(tarefaNome);
  tarefaNome.innerHTML = inputTarefas.value;

  let button = document.createElement('button');
  tarefaItem.appendChild(button);
  
  inputTarefas.value = '';
};


// Remove Tarefa
function removeTarefa() {
  const removeTarefa = jsLista.querySelectorAll('li button');
  const itemTarefa = jsLista.querySelectorAll('li');
  
  removeTarefa.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      itemTarefa[index].classList.add('ativo');
      setTimeout(() => {
        itemTarefa[index].remove();
      }, 300);
    });
  });
};
removeTarefa();















window.onload = () => {
  inputTarefas.focus();
};