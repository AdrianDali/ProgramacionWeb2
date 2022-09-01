//Nombre
//Ciudad
//Direccion
//Telefono
//Sitio Web
//Gerente
//Habitaciones

// Implementación de la clase Autor con getters y setters.
var Hotel = function () {
  var sThis = this;
  this.datosAutor = {
    nombre: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    sitioWeb: "",
    gerente: "",
    habitaciones: "",
  };
  var getNombre = function () {
      return sThis.datosAutor.nombre;
    },
    setNombre = function (nombre) {
      sThis.datosAutor.nombre = nombre;
    },
    getCiudad = function () {
      return sThis.datosAutor.ciudad;
    },
    setCiudad = function (ciudad) {
      sThis.datosAutor.ciudad = ciudad;
    },
    getDireccion = function () {
      return sThis.datosAutor.direccion;
    },
    setDireccion = function (direccion) {
      sThis.datosAutor.direccion = direccion;
    },
    getTelefono = function () {
      return sThis.datosAutor.direccion;
    },
    setTelefono = function (telefono) {
      sThis.datosAutor.telefono = telefono;
    },
    getSitioWeb = function () {
        return sThis.datosAutor.sitioWeb;
    },
    setSitioWeb = function (sitioWeb) {
        sThis.datosAutor.sitioWeb = sitioWeb;
    },
    getGerente = function () {
        return sThis.datosAutor.gerente;
    },
    setGerente = function (gerente) {
        sThis.datosAutor.gerente = gerente;
    },
    getHabitaciones = function () {
        return sThis.datosAutor.habitaciones;
    },
    setHabitaciones = function (habitaciones) {
        sThis.datosAutor.habitaciones = habitaciones;
    };


  return {
    getNombre: getNombre,
    setNombre: setNombre,
    getCiudad: getCiudad,
    setCiudad: setCiudad,
    getDireccion: getDireccion,
    setDireccion: setDireccion,
    getTelefono: getTelefono,
    setTelefono: setTelefono,
    getSitioWeb: getSitioWeb,
    setSitioWeb: setSitioWeb,
    getGerente: getGerente,
    setGerente: setGerente,
    getHabitaciones: getHabitaciones,
    setHabitaciones: setHabitaciones,
  };
  
};
