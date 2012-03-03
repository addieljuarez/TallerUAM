var principal = Titanium.UI.currentWindow;

principal.backgroundColor = '#000';


var imagen = Titanium.UI.createImageView({
	image:'../logoUACM.jpg',
	width:'150dp',
	height:'150dp',
	top:'20dp'
});

imagen.addEventListener('click', function(e){
	var mapa = Titanium.UI.createWindow({
		url:'ui/mapa.js'
	});
	mapa.open({modal:true});
})

principal.add(imagen);

var web = Titanium.UI.createWebView({
	url:'http://www.google.com',
	top:'200dp'
});

principal.add(web);
