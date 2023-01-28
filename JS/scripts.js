let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
  listElement.addEventListener('click', ()=> {
      
    listElement.classList.toggle('arrow');
    //creo una variable height con valor 0 para despues seleccionar al hermano adyacente de menú
    let height=0;
    
    let menu = listElement.nextElementSibling;
    //si el alto  de menu actualmente es "0", entonces camie al alto minimo para existir
    if(menu.clientHeight == "0"){
      height=menu.scrollHeight;
    }

    menu.style.height= height+"px";
    //en caso contrario, si es distinto de "0", entonces el alto queda como 0
   })
})

function submitForm() {
  var formname = document.getElementById("formname").value;
  var formemail = document.getElementById("formemail").value;
  var formmessage = document.getElementById("formmessage").value;
  if (formname == "" || formemail == "" || formmessage == "") {
    alert("Por favor complete todos los campos");
    return false;
  }else{
  alert("Formulario enviado exitosamente!");
  return true;
  }
}

var form = document.getElementById("form_contacto");
var menuItem = document.getElementById("bot_contacto");

form.classList.add("form-transition");

form.style.display = "none";

menuItem.addEventListener("click", function() {


  if (form.style.display === "none") {
    form.style.display = "block";

  } else {
    
    form.style.display = "none";
  }
});
