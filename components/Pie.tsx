interface PieProps {
  texto: string;
  ano: number;
  retroceso: boolean;
}

export default function Pie(props: PieProps) {
  let atras = "";

  if (props.retroceso) {
    atras = `Volver Atás`;
  }

  return (
    <>
      <footer class="bg-green-700
             text-xl text-white 
             fixed
             inset-x-0
             bottom-0
             p-4">
        <span class="float-left">{props.texto} ©️ {props.ano}</span>
        <a href="/" class="hover:text-green-900 float-right">{atras}</a>
      </footer>
    </>
  );
}
