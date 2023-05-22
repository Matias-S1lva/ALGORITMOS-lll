using System;

namespace ArbolBinario
{
    class Nodo
    {
        public int Valor;
        public Nodo Izquierdo;
        public Nodo Derecho;
    }

    class ArbolBinario
    {
        private Nodo raiz;

        public void Agregar(int valor)
        {
            raiz = AgregarRecursivo(raiz, valor);
        }

        private Nodo AgregarRecursivo(Nodo nodoActual, int valor)
        {
            if (nodoActual == null)
            {
                nodoActual = new Nodo();
                nodoActual.Valor = valor;
                nodoActual.Izquierdo = null;
                nodoActual.Derecho = null;
            }
            else if (valor < nodoActual.Valor)
            {
                nodoActual.Izquierdo = AgregarRecursivo(nodoActual.Izquierdo, valor);
            }
            else if (valor > nodoActual.Valor)
            {
                nodoActual.Derecho = AgregarRecursivo(nodoActual.Derecho, valor);
            }

            return nodoActual;
        }

        public int Buscar(int valor)
        {
            return BuscarRecursivo(raiz, valor);
        }

        private int BuscarRecursivo(Nodo nodoActual, int valor)
        {
            if (nodoActual == null)
            {
                return 0;
            }
            else if (valor == nodoActual.Valor)
            {
                return valor;
            }
            else if (valor < nodoActual.Valor)
            {
                return BuscarRecursivo(nodoActual.Izquierdo, valor);
            }
            else
            {
                return BuscarRecursivo(nodoActual.Derecho, valor);
            }
        }

        public void Listar()
        {
            ListarRecursivo(raiz);
        }

        private void ListarRecursivo(Nodo nodoActual)
        {
            if (nodoActual != null)
            {
                ListarRecursivo(nodoActual.Izquierdo);
                Console.WriteLine(nodoActual.Valor);
                ListarRecursivo(nodoActual.Derecho);
            }
        }

        public void Eliminar(int valor)
        {
            raiz = EliminarRecursivo(raiz, valor);
        }

        private Nodo EliminarRecursivo(Nodo nodoActual, int valor)
        {
            if (nodoActual == null)
            {
                return nodoActual;
            }

            if (valor < nodoActual.Valor)
            {
                nodoActual.Izquierdo = EliminarRecursivo(nodoActual.Izquierdo, valor);
            }
            else if (valor > nodoActual.Valor)
            {
                nodoActual.Derecho = EliminarRecursivo(nodoActual.Derecho, valor);
            }
            else
            {
                if (nodoActual.Izquierdo == null)
                {
                    return nodoActual.Derecho;
                }
                else if (nodoActual.Derecho == null)
                {
                    return nodoActual.Izquierdo;
                }

                nodoActual.Valor = ObtenerMinimoValor(nodoActual.Derecho);
                nodoActual.Derecho = EliminarRecursivo(nodoActual.Derecho, nodoActual.Valor);
            }

            return nodoActual;
        }

        private int ObtenerMinimoValor(Nodo nodoActual)
        {
            int minValor = nodoActual.Valor;
            while (nodoActual.Izquierdo != null)
            {
                minValor = nodoActual.Izquierdo.Valor;
                nodoActual = nodoActual.Izquierdo;
            }
            return minValor;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            ArbolBinario arbol = new ArbolBinario();

            // Agregar 10 números aleatorios al árbol
            Random random = new Random();
            for (int i = 0; i < 10; i++)
            {
                int numeroAleatorio = random.Next(1, 100);
                arbol.Agregar(numeroAleatorio);
            }

            Console.WriteLine("Árbol binario creado con 10 números aleatorios.");

            // Mostrar menú
            int opcion = 0;
            while (opcion != 5)
            {
                Console.WriteLine("\nSeleccione una opción:");
                Console.WriteLine("1. Agregar número");
                Console.WriteLine("2. Buscar número");
                Console.WriteLine("3. Listar números");
                Console.WriteLine("4. Eliminar número");
                Console.WriteLine("5. Salir");
                Console.Write("Opción: ");

                try
                {
                    opcion = int.Parse(Console.ReadLine());
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }

                switch (opcion)
                {
                    case 1:
                        Console.Write("Ingrese el número a agregar: ");
                        int numeroAgregar = Convert.ToInt32(Console.ReadLine());
                        arbol.Agregar(numeroAgregar);
                        Console.WriteLine("Número agregado correctamente.");
                        Console.ReadKey();
                        Console.Clear();
                        break;
                    case 2:
                        Console.Write("Ingrese el número a buscar: ");
                        int numeroBuscar = Convert.ToInt32(Console.ReadLine());
                        int encontrado = arbol.Buscar(numeroBuscar);
                        if (encontrado != 0)
                        {
                            Console.WriteLine($"El número {encontrado} está en el árbol.");
                        }
                        else
                        {
                            Console.WriteLine("El número no está en el árbol.");
                        }
                        Console.ReadKey();
                        Console.Clear();
                        break;
                    case 3:
                        Console.WriteLine("Números en el árbol:");
                        arbol.Listar();
                        Console.ReadKey();
                        Console.Clear();
                        break;
                    case 4:
                        Console.Write("Ingrese el número a eliminar: ");
                        int numeroEliminar = Convert.ToInt32(Console.ReadLine());
                        arbol.Eliminar(numeroEliminar);
                        Console.WriteLine("Número eliminado correctamente.");
                        Console.Clear();
                        break;
                    case 5:
                        Console.WriteLine("Saliendo...");
                        break;
                    default:
                        Console.WriteLine("Opción inválida. Intente nuevamente.");
                        break;
                }
                Console.Clear();
            }
        }
    }
}
