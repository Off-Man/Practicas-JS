    /* **********     Curso JavaScript: 58. call, apply, bind - #jonmircha     ********** */
    /* console.log(this);
    this.lugar = "Contexto Global";

    function saludar(saludo, aQuien) {
        console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
    }

    saludar("Hola", "kEnAi");

    const obj = {
        lugar: "Contexto Objeto"
    }

    saludar.call(obj, "Hola", "Jon");
    saludar.call(null, "Hola", "Jon");
    saludar.call(this, "Hola", "Jon");
    saludar.apply(obj, ["Adios", "MirCha"]);
    saludar.apply(null, ["Adios", "MirCha"]);
    saludar.apply(this, ["Adios", "MirCha"]);

    this.nombre = "Window";

    const persona = {
        nombre: "Jon",
        saludar: function () {
        console.log(`Hola ${this.nombre}`)
        }
    }

    persona.saludar();

    const otraPersona = {
        saludar: persona.saludar.bind(this)
    }

    otraPersona.saludar(); */