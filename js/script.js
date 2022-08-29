// Adiciona tarefa
const btnAddTarefa = document.querySelector('#btnAddTarefa');
const inputTarefas = document.querySelector('#inputTarefas');
const jsLista = document.querySelector('.jsLista');

// Otimização de código
function tornaFilho(pai, filho) {
  const elemento = document.createElement(filho);
  return pai.appendChild(elemento);
};

// Adiciona tarefas
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
    const li = tornaFilho(jsLista, 'li');
    
    const p  = tornaFilho(li, 'p');
    p.innerHTML = inputTarefas.value;
    
    const btnContainer = tornaFilho(li, 'div');
    btnContainer.classList.add('btnsLista');
    const btnDescricao = tornaFilho(btnContainer,'button').classList.add('btnDesc');
    const btnExcluir = tornaFilho(btnContainer,'button').classList.add('btnExcluir');

    // Marcador aos adicionados
    li.addEventListener('click', () => {
      li.classList.toggle('mark');
    });
    editaTarefa();

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
  const removeTarefa = jsLista.querySelectorAll('.btnExcluir');
  const itemTarefa = jsLista.querySelectorAll('li');
  
  removeTarefa.forEach((btn, index) => {
    btn.addEventListener('click', (btn) => {
      btn.stopPropagation();
      itemTarefa[index].classList.add('anima');
      setTimeout(() => {
        itemTarefa[index].remove();
      }, 300);
    });
  });
};
removeTarefa();

// Edita Tarefa
function editaTarefa() {
  const btnEdita = document.querySelectorAll('.btnDesc');
  const p = jsLista.querySelectorAll('p');
  const modalContainer = document.querySelector('.modalContainer')
  const modalInput = document.querySelector('.modal input')

  modalContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    modalContainer.classList.remove('ativo');
  });
  modalContainer.firstElementChild.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  btnEdita.forEach((e , index) => {
    e.addEventListener('click', (btn) => {
      btn.stopPropagation();

      // pega o valor da tarefa digitada e adiciona ao input para edição
      modalInput.value = p[index].innerText;

      modalContainer.classList.add('ativo');
    });
  });
  
  
  // btnEdita.forEach((e, index) => {
    //   e.addEventListener('click', (btn) => {
    // p[index].innerText = '';
    //     btn.stopPropagation();
  //   });
  // });
};
editaTarefa();


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