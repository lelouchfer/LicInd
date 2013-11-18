function validar(){
	var nombre=document.getElementById('name');
	var asunto=document.getElementById('subject');
	var email=document.getElementById('email');
	var mensaje=document.getElementById('comments');
	var c1 = 0;
	var c2 = 0;
	var c3 = 0;
	var c4 = 0;
	var obj= new Object();
	obj.pnombre=nombre.value
	obj.pasunto=asunto.value
	obj.pemail=email.value
	obj.mensaje=mensaje.value
	tests(obj)
	}
function tests(o)
{
	var patern='^[a-zA-Z0-9]+$'
	if (!o.pnombre.match(patern)){
		alert('Llene los campos con letras y numeros')
		}
		else{c1 = 1;}
	patern='^[a-zA-Z0-9]+$'
	if (!o.pasunto.match(patern)){
		alert('Llene el asunto con letras y numeros')
		}
		else{c2 = 1;}
		patern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
	if (!o.pemail.match(patern)){
		alert('Llene el email con este formato:email@hotmail.com')
		}
		else{c3 = 1;}
		patern='^[a-zA-Z0-9]+$'
	if (!o.mensaje.match(patern)){
		alert('Llene los campos con letras y numeros')
		}
		else{c4 = 1;}
		if( c1 > 0 && c2 > 0 && c3 > 0 && c4 > 0){
			alert("Mensaje enviado exitosamente");
			}
}