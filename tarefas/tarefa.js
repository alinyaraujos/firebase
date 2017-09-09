

 var config = {
    apiKey: "AIzaSyDhwtJ_nZ6CuUw640uUtJE-it37fGY7g6U",
    authDomain: "minicurso-14d77.firebaseapp.com",
    databaseURL: "https://minicurso-14d77.firebaseio.com",
    projectId: "minicurso-14d77",
    storageBucket: "minicurso-14d77.appspot.com",
    messagingSenderId: "750716637767"
  };
  var app = firebase.initializeApp(config);

   

  function addTarefa(){
    var nomeTarefa = document.getElementById("nomeDaTarefa").value;
    var prioridade = document.getElementById("prioridade").value;

    app.database().ref("tarefas").push({
      "nome_tarefa": nomeTarefa,
      "prioridade": prioridade
    });
  }

  tarefas=(()=>{
    app.database().ref('/tarefas').on("value",(result)=>
    {
      this.elementroTarefas.innerHTML="";
      console.log(result.val());
      var tarefa=result.val();

      var elemento='';
        for(key in tarefa){
        elemento = elemento + "Nome: " + tarefa[key]["nome_tarefa"] + "<br> Prioridade:" + tarefa[key]["prioridade"] + "<button class='excluir' id='buttonExcluir' value='"+key+"'> Excluir </button><br>" +"<hr>";
      }
      this.elementroTarefas.innerHTML=this.elementroTarefas.innerHTML+elemento;

      var elementos=document.getElementsByClassName("excluir");

      for(elemento of elementos){
        elemento.addEventListener("click",()=>{
          app.database().ref('/tarefas').child(elemento.value).remove();
        });
      }
    });
  });

  onload=(()=>{
    console.log("teste");
    this.elementroTarefas= document.getElementById("tarefas");
    tarefas();
  });

   

