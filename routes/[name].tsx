import { PageProps } from "$fresh/server.ts";
import Pie from "../components/Pie.tsx";
import H1 from "../components/H1.tsx";

export default function Greet(props: PageProps) {
  return (
    <>
      <div class="p-3 min-h-screen text-center bg-yellow-200 m-auto h-screen w-full grid place-items-center">
        <H1 text={`Pagina ${props.params.name}`}></H1>
      </div>
      <Pie texto="Sergio" ano={2023} retroceso={true} />
    </>
  );
}
