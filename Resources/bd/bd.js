function BaseDeDatos() {
	var db = Titanium.Database.open("bdUL");
	db.execute("CREATE TABLE IF NOT EXISTS usuario( Correo TEXT NOT NULL, Contrasena TEXT NOT NULL)");
	db.close();
	
	this.usuario = function(){
		var db = Ti.Database.open('bdUL');
		var resultadoUsuario= db.execute('select *  from usuario');
		var numUsuario = resultadoUsuario.rowCount;
		resultadoUsuario.close();
		return numUsuario;
	}	
	
	this.GuardarUsuario = function(response) {
		var db = Ti.Database.open('bdUL');
		db.execute('INSERT INTO usuario(Correo, Contrasena ) VALUES(?,?)',response.Correo, response.Contrasena);
		db.close();
	}
	
	this.EliminarUser = function() {
		var db = Ti.Database.open('bdUL');
		db.execute('DELETE FROM usuario');
		db.close();
	}
	
}