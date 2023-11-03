import { h, FunctionalComponent } from "preact";

interface GlassmorphicDivProps {
  text: string;
}

const GlassmorphicDiv: FunctionalComponent<GlassmorphicDivProps> = (props) => {
  return (
    <div class="w-full h-screen flex items-center justify-center bg-blur">
      <div class="p-8 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
        <h1 class="text-3xl text-center text-gray-800">{props.text}</h1>
      </div>
    </div>
  );
};

export default GlassmorphicDiv;