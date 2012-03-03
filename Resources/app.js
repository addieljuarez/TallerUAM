Ti.UI.setBackgroundColor('#fff');

var inicio = Ti.UI.createWindow({
	backgroundColor:'#fff'
});

var titulo = Ti.UI.createLabel({
	text:'UAM',
	width:'300dp',
	height:'50dp',
	left:'10dp',
	top:'100dp',
	font:{fontSize:30,
		fontFamily:'Helvetica Neue'},
	textAlign:'center',
});
inicio.add(titulo);

var data = [{title:'Ingresar'},{title:'Registrarse'}];

var opciones = Ti.UI.createTableView({
	width:'300dp',
	height:'100dp',
	top:'180dp',
	left:'10dp',
	data:data,
	color:'#000'
});
inicio.add(opciones);

opciones.addEventListener('click', function(e){
	if(e.index==0){
		var vIng = Ti.UI.createWindow({
			url:'/ui/ingresar'
		});
		vIng.open({modal:true});
	}
	else{
		alert('Registrar' +e.index);
		Ti.API.info('Estoy en la opcion registrarse'+ e.index);
	}
});

inicio.open();


