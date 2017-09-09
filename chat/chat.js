

 var config = {
    apiKey: "AIzaSyDhwtJ_nZ6CuUw640uUtJE-it37fGY7g6U",
    authDomain: "minicurso-14d77.firebaseapp.com",
    databaseURL: "https://minicurso-14d77.firebaseio.com",
    projectId: "minicurso-14d77",
    storageBucket: "minicurso-14d77.appspot.com",
    messagingSenderId: "750716637767"
  };
  var app = firebase.initializeApp(config);

   

  function enviar(){
    var nome=document.getElementById("nome").value;
    var mensagem=document.getElementById("mensagem").value;
    app.database().ref("conversas").push({
      "nome" : nome,
      "mensagem": mensagem
    });
    // app.database().ref("conversas").remove();
  }

  conversas=(()=>{
    var dbRef=app.database().ref('/conversas').on("value",(result)=>
    {
      this.elementroConversas.innerHTML="";
      console.log(result.val());
      var conversa=result.val();

      var elemento='';

      for(key in conversa){
        elemento = elemento + "<br> Nome: " + conversa[key]["nome"] + "<br> mensagem:" + conversa[key]["mensagem"]+"<br>"+"<hr>";
      }
      this.elementroConversas.innerHTML=elemento;
    });

  });

  onload=(()=>{
    console.log("teste");
    this.elementroConversas= document.getElementById("conversas");
    conversas();
  });

   

