let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("botaoAdicionar");
let main = document.getElementById("areaLista");
let contador = 0

function addTarefa() {
  //pegar o valor do input
  let valorInput = input.value;
  //se vazio, nulo ou indefinido...
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    //add um valor ao contador para ser id do item adicionado
    ++contador;

    let novoItem = 
    `<div id ="${contador}" class="item">
    <div class="item-icone" onclick="marcarTarefa(${contador})">
      <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
    </div>
    <div class="item-nome" onclick="marcarTarefa(${contador})">${valorInput}</div>
    <div class="item-botao">
      <button class="delete" onclick="deletar(${contador})"><i class="mdi mdi-delete"></i>Delete</button>
    </div>
  </div>`;

    // add novo item no main
    main.innerHTML += novoItem;

    //zerar input
    input.value = "";
    input.focus();
  }
}

input.addEventListener("keyup", function (event) {
  //se teclou enter (13)
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});

function deletar(id) {
    //deletar tarefa
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    //marcar se feito, com os efeitos programados
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if(classe === "item"){
        //branco -> marcado
        item.classList.add('clicado');

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-circle-slice-8');

        item.parentNode.appendChild(item);
    } else{
        //marcado -> branco
        item.classList.remove('clicado');

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove('mdi-circle-slice-8');
        icone.classList.add('mdi-circle-outline');
    }
}