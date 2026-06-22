
//La funcion empieza desde que se entra al documento.
$(document).ready(function() {

	//busca el input y llama lo que se escribe.
	$( "#talk" ).keypress(function(e){
 		if ((e.keyCode == 13) && ($( "#talk" ).val().trim() != '')){
 			//agregar el texto al chat
 			divItem();
			//hacer que el chat empuje los mensajes hacia arriba mediante aparecen
 			$('.chatSpace').animate({scrollTop: $('.chatSpace').prop("scrollHeight")}, "slow");

 			};

  });

	function divItem(){
		/*
		$('#chatText').append() Llama el espacio en que se van a colocar cosas.
		Todo lo demás dentro de las '' (comillas simples) es lo que se va escribir en html. Se divide el texto de acuerdo a espacios que
		se deseen colocar segun lo escribiriamos normalmente.

		$("#talk").val() Llama el input en que se escribe, aqui adentro lo que hace es tomar lo que se escribio dentro del codigo.
		*/

		$('#chatText').append('<div class="row align-items-center">' + '<div class="col-auto said">'+ $("#talk").val() + '</div>'
		+ '<div class="col-auto profileItems">'+ '<p id="userName">'+ ' Username' + ' </p>'+
		'<img class="userImg" src=" imgs/babasmol.png " alt="profilePic">' + '</div> </div>');	
		
		/* Cuando se envie la informacion, el input se va a resetear para recibir mas texto. */
		$("#talk").val('');
		
	};

	/*al darle click al boton de "send", correra la siguiente funcion: si se escribe en la barra o se
	tiene algo escrito, entonces correra la funcion de arriba y apareceran los mensajes.*/

	$('#send').click(function(e){
		if (($("#talk").val().trim() != '')) {
			divItem();
		}
	});

});



function toggleFilter()
{
    document
    .getElementById("filterMenu")
    .classList.toggle("show");
}

function selectFilter(name)
{
    document
    .getElementById("currentFilter")
    .textContent = name;

    document
    .getElementById("filterMenu")
    .classList.remove("show");

    console.log(
        "Filtro:",
        name
    );
}

// cerrar al tocar fuera

document.addEventListener(
    "click",
    function(e)
    {
        const dropdown =
        document.querySelector(
            ".filter-dropdown"
        );

        if(
            !dropdown.contains(
                e.target
            )
        )
        {
            document
            .getElementById(
                "filterMenu"
            )
            .classList.remove(
                "show"
            );
        }
    }
);




$("#talk").focus(function()
{
    setTimeout(function()
    {
        const chatSpace =
        $('.chatSpace');

        chatSpace.animate(
        {
            scrollTop:
            chatSpace[0].scrollHeight
        },
        300
        );

    },300);
});


window.onload = function()
{
    document
    .getElementById("talk")
    .focus();
}