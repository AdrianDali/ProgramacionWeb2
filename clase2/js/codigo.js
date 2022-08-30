function factorial(n) {
  if (n % 1 == 0) {
    if (n > 0) {
      return n * factorial(n - 1);
    } else {
      return 1;
    }
  } else {
    return -1;
  }
}

//QUnit.test("Prueba función factorial", function (assert) {
//assert.equal(factorial(5), 120, "¡correcto!");
//assert.equal(factorial(6), 720, "¡correcto!");
//assert.equal(factorial(7), 5040, "¡correcto!");
// assert.equal(factorial(8), 40321, "¡correcto!");
//});

//-------------------------------------------------------------------
//var miarray = ["hola" , "estamos", "haciendo", "una", "prueba"];
//QUnit.test( "Prueba Array", function( assert ) {
//assert.equal(miarray[0],"hola", "Correcto" );
//assert.equal(miarray[1],"estamos", "Correcto" );
//assert.equal(miarray[2],"haciendo", "Correcto" );
//assert.equal(miarray[3],"una", "Correcto" );
//assert.equal(miarray[4],"prueba", "Correcto" );
//});

//------------quiz-----------------
//var miarray = ["hola" , "estamos", "haciendo", "una", "prueba"];
//miarray["indice"]="cadena de texto";
//QUnit.test( "Prueba Array", function( assert ) {
//assert.equal(miarray[0],"hola", "Correcto" );
//assert.equal(miarray[1],"estamos", "Correcto" );
//assert.equal(miarray[2],"haciendo", "Correcto" );
//assert.equal(miarray[3],"una", "Correcto" );
//assert.equal(miarray[4],"prueba", "Correcto" );
//assert.equal(miarray["indice"],"cadena de texto", "Correcto" );
//});

//------------quiz-----------------

//var usuario = {
//  nick: "jvix",
//  nombreCompleto: "Javier Pérez Álvarez",
//  email: "jvix@jvix.com",
//  password: "jvix543",
//};
//QUnit.test("Prueba Array", function (assert) {
//  assert.equal(usuario["nick"], "jvix", "Correcto");
//  assert.equal(usuario["nombreCompleto"], "Javier Pérez Álvarez", "Correcto");
//  assert.equal(usuario["email"], "jvix@jvix.com", "Correcto");
//  assert.equal(usuario["password"], "jvix543", "Correcto");
//  assert.equal(usuario.nick, "jvix", "Correcto");
//  assert.equal(usuario.nombreCompleto, "Javier Pérez Álvarez", "Correcto");
//  assert.equal(usuario.email, "jvix@jvix.com", "Correcto");
//  assert.equal(usuario.password, "jvix543", "Correcto");
//});

var biblioteca = [ {
  titulo : "JavaScript en el Lado del Cliente",
  editorial : "Editorial Programación en la Red",
  autor : {
  nombreCompleto : "Javier Pérez Álvarez",
  fechaNacimiento : "01/01/1970",
  nacionalidad : "Española"
  },
  fechaPrimeraEdicion : "04/07/1983",
  isbn : "123456789"
  } , {
  titulo : "JavaScript en el Lado del Servidor",
  editorial : "Editorial Programación en la Red",
  autor : {
  nombreCompleto : "Ismael López Quintero",
  fechaNacimiento : "04/07/1983",
  nacionalidad : "Española"
  },
  fechaPrimeraEdicion : "05/06/1998",
  isbn : "987654321"
  } , {  titulo : "Introducción a JavaScript",
  editorial : "Editorial Universitaria de Programación",
  autor : {
  nombreCompleto : "Agústín Méndez Castaño",
  fechaNacimiento : "03/05/1993",
  nacionalidad : "Española"
  },
  fechaPrimeraEdicion : "06/08/2005",
  isbn : "789123456"
  }
  ];

  QUnit.test( "Prueba Array", function( assert ) {
  assert.equal(biblioteca[1].autor.nombreCompleto,"Ismael López Quintero",
  "El autor del segundo libro es correcto!")
  });