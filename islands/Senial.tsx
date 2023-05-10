import { Button } from "../components/Button.tsx";

import { Signal, signal } from "@preact/signals";
//Respecto a la diferencia entre `Signal` y `signal`, `Signal` es una interfaz que define la estructura de una señal, mientras que `signal` es una función que crea una nueva señal.

interface Todo {
  text: string;
}

const todos: Signal<Todo[]> = signal([
  { text: "Comprar limones" },
  { text: "Hacer limonada" },
]);
//En TypeScript, los símbolos de mayor que y menor que se utilizan para definir tipos genéricos. En el código que te mostré, los tipos `Signal<Todo[]>` y `Signal<string>` son tipos genéricos que especifican el tipo de valor que puede contener cada señal.
//En el caso de `Signal<Todo[]>`, estamos definiendo una señal que contendrá un array de objetos de tipo `Todo`, que es una interfaz que define la estructura de un objeto de to-do. En `Signal<string>`, estamos definiendo una señal que contendrá una cadena de texto.

const text: Signal<string> = signal("");

function addTodo() {
  todos.value = [...todos.value, { text: text.value }];
  text.value = ""; // Reset input value on add
}

export default function Senial() {
  return (
    <div>
      <span class="m-5"></span>
      <h1 class="text-xl">Recordatorios</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          class="px-2 py-1 border(gray-100 2)"
          type="text"
          value={text.value}
          onInput={(e) => (text.value = e.currentTarget.value)}
        />
        <Button class="float-right" onClick={addTodo}>Añadir</Button>
      </form>
      <ul>
        {todos.value.map((todo, i) => (
          <li class="p-2 text-green-800" key={i}>🍋 {todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
