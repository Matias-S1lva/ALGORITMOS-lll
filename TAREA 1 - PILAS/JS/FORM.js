const $$Form = function () {
  //variables
  let Pila = undefined, HumanPila = undefined;
  //Explicacion de codigo Parte 1
  this.palindrome = () => {
    const Submit = () => {
      palindromo.value = ""; 
      Pila = new $$Pila(); 

      //Carga la pila con los caracteres del valor que se obtiene del formulario.
      //En cada iteración, se agrega el carácter a la pila. Esto coloca los caracteres en la pila en el mismo orden en que aparecen en data.value.
      for (let i = 0; i < data.value.length; i++) {
        Pila.Push(data.value[i]); 
      }

      //Invierte el orden de los elementos de la pila y se concatena a palindromo.value 
      while (!Pila.IsEmpty()) {
        palindromo.value += Pila.Pop();
      }

      (palindromo.value === data.value)
      ?
        $dc.p(`${data.value} = ${palindromo.value} por lo que es un palindromo`)
      :
        $dc.p(`${data.value} <> ${palindromo.value} por lo que no es un palindromo`);
      return false;
    };
    Home();
    let f = $dc.form("analizar palindromo", "analizar");
    f.className = "w60";
    const data = $dc.inputText("dato");
    const palindromo = $dc.inputTextDisabled("palindromo");
    f.onsubmit = Submit;
    $dc.h1("resultados");
  };
  this.addStack = () => {
    const Submit = () => {
      Pila.Push(dato.value); //agrega a la pila el valor que se obtiene del formulario.
      dato.value = "";
      $dc.p(Pila.Top()); // Muestra en la página el elemento superior de la pila
      return false;
    };
    Home();
    let f = $dc.form("crear pila", "agregar");
    f.className = "w60";
    f.onsubmit = Submit;
    Pila = new $$Pila();
    const dato = $dc.inputText("dato a agregar");
    $dc.h1("agregados a la pila");
  };
  this.findPos = () => {
    const Submit = () => {
      let n = parseInt(N.value); // Obtiene el valor numérico de el valor que se obtiene del formulario.
      N.value = "";
      $es.ReadPila(Pila, n);
      return false;
    };

    if (Pila === undefined) {
      alert("la pila está vacía");
      $f.addStack();
      return;
    }
    Home();
    const f = $dc.form("Hallar el dato de la pila en la posición n", "Hallar");
    const N = $dc.inputNumber("N");
    f.className = "w80";
    f.onsubmit = Submit;
    $dc.h1("Resultados");
  };
  this.removePos = () => {
    const Submit = () => {
      let n = parseInt(N.value);
      N.value = "";
      $es.Erase(Pila, n);
      return false;
    };
    if (Pila === undefined) {
      alert("la pila está vacía");
      $f.addStack();
      return;
    }
    Home();
    const f = $dc.form(
      "eliminar el dato de la pila en la posición n",
      "eliminar"
    );
    const N = $dc.inputNumber("N");
    f.className = "w80";
    f.onsubmit = Submit;
    $dc.h1("Resultados");
  };
  this.findData = () => {
    const Submit = () => {
      let data = dato.value;
      dato.value = "";
      $es.Find(Pila, data);
      return false;
    };

    if (Pila === undefined) {
      alert("la pila está vacía");
      $f.addStack();
      return;
    }
    Home();
    const f = $dc.form(
      "encontrar la posicion del dato en la pila ",
      "encontrar"
    );
    const dato = $dc.inputText("dato");
    f.className = "w80";
    f.onsubmit = Submit;
    $dc.h1("resultados");
  };

 //Explicacion de codigo Parte 2
  this.addUnique = () => {
    const Submit = () => {
      let data = dato.value;
      dato.value = "";
      $es.PushUnique(Pila, data);
      return false;
    };
    if (Pila === undefined) {
      alert("la pila está vacía");
      $f.addStack();
      return;
    }
    Home();
    const f = $dc.form("agregar un dato unico ", "agregar");
    const dato = $dc.inputText("dato");
    f.className = "w60";
    f.onsubmit = Submit;
    $dc.h1("resultados");
  };
  this.removeRepeated = () => {
    const Submit = () => {
      let data = dato.value;
      dato.value = "";
      $es.EraseAll(Pila, data);
      return false;
    };
    if (Pila === undefined) {
      alert("la pila está vacía");
      $f.addStack();
      return;
    }
    Home();
    const f = $dc.form("eliminar datos repetidos ", "eliminar");
    const dato = $dc.inputText("dato aeliminar repetido");
    f.className = "w60";
    f.onsubmit = Submit;
    $dc.h1("resultados");
  };
  this.makeVector = () => {
    const Submit = () => {
      $dc.h1("el vector es");
      $dc.p("[" + $es.StackToArray(Pila) + "]");
      return false;
    };
    if (Pila === undefined) {
      alert("la pila está vacía");
      $f.addStack();
      return;
    }
    Home();
    const f = $dc.form("Devolver el vector de la pila ", "devolver");
    f.className = "w60";
    f.onsubmit = Submit;
  };
  this.makeRandoms = () => {
    const Submit = () => {
      let max = parseInt(rango.value),
        num = parseInt(N.value);
      Pila = $es.StackToRandom(num, max);
      $es.List(Pila);
      return false;
    };

    Home();
    const f = $dc.form("construir una pila numérica aleatoria ", "construir");
    const rango = $dc.inputNumber("valor numérico maximo");
    const N = $dc.inputNumber("cantidad de valores");
    f.className = "w60";
    f.onsubmit = Submit;
    $dc.h1("la pila obtenida es");
  };

  //Explicacion de codigo Parte 3
  this.sortRandoms = () => {
    const Submit = () => {
      let max = parseInt(rango.value),
        num = parseInt(N.value);
      Pila = $es.StackToRandom(num, max);
      $es.List(Pila);
      Pila = $es.Sort(Pila);
      $dc.h1("la pila ordenada nos da");
      $es.List(Pila);
      return false;
    };

    Home();
    const f = $dc.form(
      "construir una pila numérica aleatoria ordenada",
      "construir"
    );
    const rango = $dc.inputNumber("valor numérico maximo");
    const N = $dc.inputNumber("cantidad de valores");
    f.className = "w60";
    f.onsubmit = Submit;
    $dc.h1("la pila obtenida es");
  };
  this.mergeStacks = () => {
    const Submit = () => {
      let max = parseInt(rango.value),
        num = parseInt(N.value);
      let Pila1 = $es.StackToRandom(num, max);
      Pila1 = $es.Sort(Pila1);
      $dc.h1("Pila 1 ordenada");
      $es.List(Pila1);
      let Pila2 = $es.StackToRandom(num, max);
      Pila2 = $es.Sort(Pila2);
      $dc.h1("Pila 2 ordenada");
      $es.List(Pila2);
      $dc.h1("combinación de las 2 pilas");
      Pila = $es.Merge(Pila1, Pila2, max);
      $es.List(Pila);
      return false;
    };
    Home();
    const f = $dc.form(
      "unir y mezclar  dos pilas numérica aleatorias ordenadas",
      "construir"
    );
    const rango = $dc.inputNumber("valor numérico maximo");
    const N = $dc.inputNumber("cantidad de valores");
    f.className = "w60";
    f.onsubmit = Submit;
  };
  
  //Tarea 2 
  this.ABMPersonas = () => {
    const Submit = () => {
      let Human = new Object();
      Human.Apellido = Apellido.value;
      Human.Nombre = Nombre.value;
      Human.Dni = parseInt(Dni.value);
      Human.Direccion = Direccion.value;
      Human.Mail = Mail.value;
      Human.Telefono = Telefono.value;
      HumanPila = $h.Add(HumanPila, Human);
      $h.List(HumanPila);
      f.reset();
      return false;
    };
    if (HumanPila === undefined) HumanPila = new $$Pila();
    Home();
    $dc.h1("crear una pila ordenada de personas");
    let f = $dc.form("ABM personas", "ingresar");
    f.className = "w60";
    f.onsubmit = Submit;
    const Apellido = $dc.inputText("apellido");
    const Nombre = $dc.inputText("Nombre");
    const Dni = $dc.inputNumber("Dni");
    const Direccion = $dc.inputText("dirección");
    const Mail = $dc.inputMail("mail");
    const Telefono = $dc.inputText("teléfono");
    if (HumanPila.Count() > 0) $h.List(HumanPila);
  };
  this.ModifyHuman = (Human) => {
    const Submit = () => {
      Human.Apellido = Apellido.value;
      Human.Nombre = Nombre.value;
      Human.Dni = parseInt(Dni.value);
      Human.Direccion = Direccion.value;
      Human.Mail = Mail.value;
      Human.Telefono = Telefono.value;
      try {
        $hs.Modify(HumanPila, Human);
        $f.ABMPersonas();
      } catch (e) {
        alert(e);
      }
      return false;
    };
    Home();
    const f = $dc.form("Modificar persona", "modificar");
    f.className = "w60";
    f.onsubmit = Submit;
    const Apellido = $dc.inputText("apellido");
    const Nombre = $dc.inputText("Nombre");
    const Dni = $dc.inputNumber("Dni");
    const Direccion = $dc.inputText("dirección");
    const Mail = $dc.inputMail("mail");
    const Telefono = $dc.inputText("teléfono");
    Apellido.value = Human.Apellido;
    Nombre.value = Human.Nombre;
    Dni.value = Human.Dni;
    Direccion.value = Human.Direccion;
    Mail.value = Human.Mail;
    Telefono.value = Human.Telefono;
  };
};
const $f = new $$Form();
