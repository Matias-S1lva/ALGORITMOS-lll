const $$Pila = function () {
  let contenido = new Array();
  this.Push = (Data) => {
    contenido.push(Data);
  };
  this.Pop = () => {
    return contenido.pop();
  };
  this.Top = () => {
    return contenido[contenido.length - 1];
  };
  this.IsEmpty = () => {
    return contenido.length === 0;
  };
  this.Count = () => {
    return contenido.length;
  };
};

const $$ExtendStack = function () {
  let aux = undefined;
  this.List = (pila) => {
    let sal = "";
    aux = new $$Pila();

    while (!pila.IsEmpty()) 
    {
      sal += pila.Top() + " ";
      aux.Push(pila.Pop());
    }

    while (!aux.IsEmpty())
    {
      pila.Push(aux.Pop());
    }

    $dc.p(sal);
    return pila;
  };
  this.ReadPila = (pila, N) => {
    if (N < 0 || N >= pila.Count()) {
      $dc.p(`${N} no corresponde a una posición de la pila`);
      return;
    }

    aux = new $$Pila();
    for (let i = 0; i < N; i++) {
      aux.Push(pila.Pop()); //Extrae el elemento superior de la pila principal y lo agrega a la pila auxiliar
    }
    $dc.p(`El valor de la posición ${N} es ${pila.Top()}`);
    while (!aux.IsEmpty()){
      pila.Push(aux.Pop()); //Extrae el elemento superior de la pila auxiliar  y lo agrega a la pila original
    } 

    return pila;
  };
  this.Erase = (pila, N) => {
    if (N < 0 || N >= pila.Count()) {
      $dc.p(N + " no corresponde a una posición dela pila");
      return;
    }

    aux = new $$Pila();
    for (let i = 1; i < N; i++) {
      aux.push(pila.Pop()); //Extrae el elemento superior de la pila principal y lo agrega a la pila auxiliar
    }
    $dc.p(`se ha eliminado el valor de la posición ${N} que es: ${pila.Pop()}`);

    while (!aux.IsEmpty()) {
      pila.Push(aux.Pop()); //Extrae el elemento superior de la pila auxiliar  y lo agrega a la pila original
    }
    return pila;
  };
  this.Find = (pila, data) => {
    let aux = new $$Pila();
    let i = 0;
    while (!pila.IsEmpty() && pila.Top() !== data)//mientras la pila principal no esté vacía y el elemento superior de la pila
    {                                             // no sea igual al dato buscado
      aux.Push(pila.Pop()); 
      i++;
    }

     (pila.IsEmpty()) 
     ?  
        $dc.p(`el resultado es -1 por lo que no se ha encontrado ${data}`)
     :  
        $dc.p(`la posición del dato ${data} es ${i}`);

    while (!aux.IsEmpty()){
      pila.Push(aux.Pop()); //restauramos el orden original de la pila principal.
    } 
    return pila;
  };
  this.PushUnique = (pila, data) => {
    aux = new $$Pila();

    while (!pila.IsEmpty() && pila.Top() !== data) {
      aux.Push(pila.Pop());
    }

    if (pila.IsEmpty()) {
      while (!aux.IsEmpty()) {
        pila.Push(aux.Pop());
      }
      pila.Push(data);
      $dc.p(`se ha agregado el dato ${data}`);
    } else {
      $dc.p(`${data} no se puede agregar porque está repetido`);
      while (!aux.IsEmpty()) {
        pila.Push(aux.Pop());
      }
    }
    return pila;
  };
  this.EraseAll = (pila, data) => {
    aux = new $$Pila();
    while (!pila.IsEmpty() && pila.Top() !== data) 
    {
      aux.Push(pila.Pop());
    }
    aux.Push(data);

    while (!pila.IsEmpty()) 
    {
      (pila.Top() === data)
      ? pila.Pop()
      : aux.Push(pila.Pop());
    }
    //recupero pila
    while (!aux.IsEmpty()) 
    {
      pila.Push(aux.Pop());
    }
    $dc.p(`se han eliminado datos repetidos a ${data}`);
    return pila;
  };
  this.StackToArray = (pila) => {
    aux = new $$Pila();
    while (!pila.IsEmpty()) 
    {
      aux.Push(pila.Pop());
    } 

    let array = new Array();
    while (!aux.IsEmpty()) 
    {
      array.push(aux.Top());
      pila.Push(aux.Pop());
    }
    return array;
  };
  this.StackToRandom = (N, Max) => {
    aux = new $$Pila();
    for (let i = 0; i < N; i++) 
    {
      let elem = Math.random();
      elem = elem * Max;
      elem = Math.round(elem);
      aux.Push(elem);
    }
    return aux;
  };
  this.Sort = (pila) => {
    let max;
    let sal = new $$Pila();

    const FindMax = () => {
      aux = new $$Pila();
      max = pila.Top();

      while (!pila.IsEmpty()) 
      {
        aux.Push(pila.Pop());
        if (pila.Top() > max) {
          max = pila.Top();
        }
      }
      sal.Push(max);

      while (!aux.IsEmpty() && aux.Top() !== max) {
        pila.Push(aux.Pop());
      }
      aux.Pop();

      while (!aux.IsEmpty()) {
        pila.Push(aux.Pop());
      } 
    };
    while (!pila.IsEmpty()) {
      FindMax();
    } 
    pila = sal;

    return pila;
  };
  this.Merge = (pila1, pila2, Max) => {
    aux = new $$Pila();
    Pila = new $$Pila();
    let Min1, Min2, Min;

    while (!pila1.IsEmpty() && !pila2.IsEmpty()) 
    {
      Min = Max;
      if (pila1.IsEmpty()) Min1 = Max;
      if (pila2.IsEmpty()) Min2 = Max;
      if (!pila1.IsEmpty()) Min1 = pila1.Top();
      if (!pila2.IsEmpty()) Min2 = pila2.Top();
      if (Min1 < Min) Min = Min1;
      if (Min2 < Min) Min = Min2;
      if (Min === pila1.Top()) aux.Push(pila1.Pop());
      if (Min === pila2.Top()) aux.Push(pila2.Pop());
    }
    while (!pila1.IsEmpty()) 
    {
      aux.Push(pila1.Pop());
    }
    while (!pila2.IsEmpty()) 
    {
      aux.Push(pila2.Pop());
    }
    while (!aux.IsEmpty()) 
    {
      Pila.Push(aux.Pop());
    }
    return Pila;
  };
  this.mergeSortedStacks = (stack1, stack2) => {
    let mergedStack = [];

    while (stack1.length > 0 && stack2.length > 0) 
    {
      (stack1[stack1.length - 1] > stack2[stack2.length - 1]) 
      ? mergedStack.push(stack1.pop())
      : mergedStack.push(stack2.pop());
    }
    while (stack1.length > 0) {
      mergedStack.push(stack1.pop());
    }
    while (stack2.length > 0) {
      mergedStack.push(stack2.pop());
    }
    return mergedStack.reverse();
  };

};
const $es = new $$ExtendStack();
