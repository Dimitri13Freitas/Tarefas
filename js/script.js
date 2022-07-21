// Adiciona tarefa
const btnAddTarefa = document.querySelector('#btnAddTarefa');
const inputTarefas = document.querySelector('#inputTarefas');
const jsLista = document.querySelector('.jsLista');

function addTarefa() {
  inputTarefas.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
      addTarefa();
      removeTarefa();
      addMark();
    };
  });
  
  btnAddTarefa.addEventListener('click', () => {
    addTarefa();
    removeTarefa();
    addMark();
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
};
addTarefa();


// Adiciona marcador
function addMark() {
  const marcador = jsLista.querySelectorAll('li');
  
  marcador.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('mark');
    });
  });
};


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
  const btnChangetema = document.querySelector('#mode');
  
  btnChangetema.addEventListener('click',() => {
    btnChangetema.classList.toggle('liga');
    document.documentElement.classList.toggle('changeMode');
  });
};
changeMode();













window.onload = () => {
  inputTarefas.focus();
};