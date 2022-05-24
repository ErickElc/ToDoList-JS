let botao = document.querySelector("#Botao");
let id = 0;
botao.addEventListener('click', (e) => {
    e.preventDefault();
    let textoTarefa= document.getElementById("input").value
    if(textoTarefa != ''){
        id++
        CriarTarefa(textoTarefa)

    }
    else{
        alert("Digite Algo!")

    }

})


function escreverTela(){
    let lista = "<ul class='ContainerList'>"
    tarefas.forEach(tarefa => {
        lista += `<li id-data="${tarefa.id}" class='Base'>
        ${tarefa.data.description}
        </li>`
        lista += `<i class="gg-trash" id="Lixo" >
        <button class='lixeira' onclick="excluirTarefa(this)" id-data="${tarefa.id}">
        </button></i>`;
    })
    lista += "</ul>";
    document.getElementById("Lista").innerHTML = lista;
    textoTarefa = document.getElementById("input").value = '';
 
}
function excluirTarefa(elemento){
    let id = elemento.getAttribute('id-data');
    console.log(id);
    Delete(id);
    escreverTela();
}