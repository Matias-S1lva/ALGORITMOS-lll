const $$Nav = function () {
  this.init = function () {
    $dn.clear();
    $dn.makeDropdownButton(
      "pilas",
      [
        "analizar palindromo",
        "crear pila",
        "buscar la posición N",
        "eliminar la posición N",
        "encontrar la posición del dato de la pila",
        "ingresar un elemento único de la pila",
        "eliminar datos repetidos de un dato dado",
        "devolver el arreglo de los datos de la pila",
        "generar una pila de datos aleatorios",
        "ordenar una pila de datos aleatorios",
        "dada dos pilas ordenadas obtener una pila ordenada que contenga todos los datos",
      ],
      [
        $f.palindrome,
        $f.addStack,
        $f.findPos,
        $f.removePos,
        $f.findData,
        $f.addUnique,
        $f.removeRepeated,
        $f.makeVector,
        $f.makeRandoms,
        $f.sortRandoms,
        $f.mergeStacks,
      ]
    );
    $dn.makeButton("abm personas", $f.ABMPersonas);
  };
};
const $n = new $$Nav();
