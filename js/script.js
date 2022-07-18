// Adiciona tarefa
const btnAddTarefa = document.querySelector('#btnAddTarefa');
const inputTarefas = document.querySelector('#inputTarefas');
const jsLista = document.querySelector('.jsLista');

btnAddTarefa.addEventListener('click',() => {
  
  let tarefaNome = document.createElement('p');
  let tarefaItem = document.createElement('li');
  let button = document.createElement('button');
  let svg = document.createElement('svg');
  let path = document.createElement('path');



  // svg.setAttribute('viewBox', '0 0 17 16');
  // svg.setAttribute('fill', 'none');
  
  
  tarefaNome.innerHTML = inputTarefas.value;
  tarefaItem.appendChild(tarefaNome);
  jsLista.appendChild(tarefaItem);
  svg.appendChild(path);
  path.setAttribute('d', 'M0.5 1.5L7 8L0.5 14.5L2 16L8.5 9.5L15 16L16.5 14.5L10 8L16.5 1.5L15 0L8.5 6.5L2 0L0.5 1.5Z');
  path.setAttribute('fill', '#141414');
  button.appendChild(svg);
  svg.setAttribute('width', '17');
  svg.setAttribute('height', '16');
  tarefaItem.appendChild(button);
  
  console.log(tarefaItem);
  console.log(tarefaNome);

  inputTarefas.value = '';
});

// Remove Tarefa





window.onload = () => {
  inputTarefas.focus();
}