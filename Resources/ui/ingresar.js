Titanium.include('/bd/bd.js');

var ventana = Ti.UI.currentWindow;
ventana.backgroundColor='#fff';

var lIngresar= Titanium.UI.createLabel({
	text:'Ingresar',
	font:{fontSize:30,
		fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'300dp',
	height:'40dp',
	left:'10dp',
	top:'100dp'
	 });
ventana.add(lIngresar);

var tCorreo = Ti.UI.createTextField({
	hintText:'Correo',
	width:'200dp',
	height:'40dp',
	left:'60dp',
	top:'150dp'
});
ventana.add(tCorreo);

var tPass = Ti.UI.createTextField({
	hintText:'Contraseña',
	width:'200dp',
	height:'40dp',
	left:'60dp',
	top:'195dp',
	passwordMask:true
});
ventana.add(tPass);

var bIr = Ti.UI.createButton({
	title:'Ir',
	width:'150dp',
	height:'40dp',
	left:'85dp',
	top:'240dp'
});
ventana.add(bIr);

bIr.addEventListener('click', function(e){
if(tCorreo.value!=''&&tPass.value!=''){

if(tCorreo.value==tPass.value){
var response = {Correo:tCorreo.value,Contrasena:tPass.value};
new BaseDeDatos().GuardarUsuario(response);


	var principal = Titanium.UI.createWindow({
	url:'ui/principal'
});

principal.open({modal:true});
//ventana.close();
Ti.App.fireEvent('login');

}else{
alert("Correo o contraseña incorrecto");
}
}
else{
alert("Correo y contraseña son requeridos");
}
});
