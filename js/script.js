// Adiciona tarefa
const btnAddTarefa = document.querySelector('#btnAddTarefa');
const inputTarefas = document.querySelector('#inputTarefas');
const jsLista = document.querySelector('.jsLista');


function addTarefas() {
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
    // Marcador aos adicionados
    tarefaItem.addEventListener('click', () => {
      tarefaItem.classList.toggle('mark');
    });
    jsLista.appendChild(tarefaItem);
  
    let tarefaNome = document.createElement('p');
    tarefaItem.appendChild(tarefaNome);
    tarefaNome.innerHTML = inputTarefas.value;
  
    let button = document.createElement('button');
    tarefaItem.appendChild(button);
    
    inputTarefas.value = '';
  };
};
addTarefas();


// Adiciona marcador aos exemplos
function addMark() {
  const marcador = jsLista.querySelectorAll('li');

  marcador.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('mark');
    });
  });
};
addMark();


// Remove Tarefa
function removeTarefa() {
  const removeTarefa = jsLista.querySelectorAll('li button');
  const itemTarefa = jsLista.querySelectorAll('li');
  
  removeTarefa.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      itemTarefa[index].classList.add('anima');
      setTimeout(() => {
        itemTarefa[index].remove();
      }, 300);
    });
  });
};
removeTarefa();


// Modo Escuro e Claro
function changeMode() {
  const btnChangeTema = document.querySelector('#mode');
  
  btnChangeTema.addEventListener('click',() => {
    btnChangeTema.classList.toggle('liga');
    document.documentElement.classList.toggle('changeMode');
  });
};
changeMode();













window.onload = () => {
  inputTarefas.focus();
};