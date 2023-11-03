export default function Cabecera() {
  return (
    <>
      <header class="bg-yellow-300 py-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl p-3 whitespace-nowrap bg-gradient-to-r from-black via-green-800 to-black bg-clip-text font-bold uppercase text-transparent">
            Hola :D
          </h1>

          <nav>
            <ul class="flex">
              <li>
                <a href="/" class="px-3 py-2 hover:text-green-900">Inicio</a>
              </li>
              <li>
                <a href="/uno" class="px-3 py-2 hover:text-green-900">1</a>
              </li>
              <li>
                <a href="/dos" class="px-3 py-2 hover:text-green-900">2</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

/*

import { html } from "https://deno.land/x/fresh/mod.ts";
import { tw } from "twind";

function Cabecera() {
  return html`
    <header class="${tw`bg-gray-800 text-white py-4`}">
      <div class="${tw`container mx-auto flex justify-between items-center`}">
        <h1 class="${tw`text-xl font-bold`}">Mi sitio web</h1>
        <nav>
          <ul class="${tw`flex`}">
            <li><a href="/" class="${tw`px-3 py-2 hover:bg-gray-700`}">Inicio</a></li>
            <li><a href="/acerca" class="${tw`px-3 py-2 hover:bg-gray-700`}">Acerca de</a></li>
            <li><a href="/contacto" class="${tw`px-3 py-2 hover:bg-gray-700`}">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

export default Cabecera;

*/
