let tarefas =  [];

function ids(){
    return id;
}
function CriarTarefa(textoTarefa){
    let tarefa = {
        id: ids(),
        data:{
            description: textoTarefa
        
        }
    }
    tarefas.push(tarefa);
    escreverTela();
}
function Delete(id){
    tarefas = tarefas.filter(tarefa => tarefa.id != id);
    escreverTela();
}