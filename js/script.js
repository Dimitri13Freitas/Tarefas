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

    // Marcador aos adicionadosw
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

  btnEdita.forEach((e , index) => {
    e.addEventListener('click', (btn) => {
      btn.stopPropagation();
      modal();

      const modalContainer = document.querySelectorAll('.modalContainer');
      if(modalContainer.length >= 2) {
        modalContainer[modalContainer.length - 1].remove();
      };

      const p = jsLista.querySelectorAll('p');
      const modalInput = document.querySelector('.modal input');
      modalInput.value = p[index].innerText;
      modalInput.focus();

      const modalButton = document.querySelector('.modal button');
      modalButton.addEventListener('click', (e) => {
        e.stopPropagation();
        p[index].innerText = modalInput.value;
      });

      
      // Adiciona Tarefa pressionando a tecla enter
      modalInput.addEventListener('keypress', (e) => {
        if(e.keyCode === 13) {
          p[index].innerText = modalInput.value;
        }
      });

    });
  });
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

function modal() {
  const foraContainer = document.querySelector('body');
  const modalContainer = tornaFilho(foraContainer, 'div');
  modalContainer.classList.add('modalContainer');
  const modal = tornaFilho(modalContainer, 'div');
  modal.classList.add('modal');
  const p = tornaFilho(modal, 'p');
  p.innerText = 'Edite sua tarefa';
  const div = tornaFilho(modal, 'div');
  const input = tornaFilho(div, 'input');
  const button = tornaFilho(div, 'button');
  button.classList.add('btn');
  button.innerText = 'Salvar';

  // Ao clicar fora do Modal Fecha e cancela a edição
  modalContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    modalContainer.remove();
  });

  modalContainer.firstElementChild.addEventListener('click', (e) => {
      e.stopPropagation();
    });

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    modalContainer.remove();
  });

  input.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
      modalContainer.remove();
    }
  });
};