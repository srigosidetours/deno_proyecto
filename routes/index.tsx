import Cabecera from "../components/Cabecera.tsx";
import Pie from "../components/Pie.tsx";
import Counter from "../islands/Counter.tsx";

export default function HolaMundo() {
  const year: number = new Date().getFullYear();
  return (
    <>
      <Cabecera />
      <div class="p-3 min-h-screen bg-yellow-200">
        <Counter start={3} />
        <figure class="text-center">
          <img
            src="/logo.svg"
            class="w-32 h-32 mx-auto"
            alt="el logo de fresh"
          />
        </figure>
      </div>
      <Pie texto="Sergio" ano={year} retroceso={false} />
    </>
  );
}
