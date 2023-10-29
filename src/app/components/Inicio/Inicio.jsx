export default function Inicio() {
  return (
    <div className="w-full flex relative overflow-hidden justify-center h-[50vh]">
      <img
        src="https://img.freepik.com/vector-premium/fondo-oscuro-textura-tela_448617-61.jpg"
        alt="a"
        className="absolute w-full top-50 object-cover h-full"
      />
      <div className="z-10 flex flex-col gap-4 items-center justify-center w-full mt-28 lg:w-4/6 text-white p-10 lg:m-10 lg:mt-40">
        <h1 className="text-4xl md:text-5xl font-bold">
          Especialistas en
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold text-red-500">
          Derecho Penal
        </h1>
      </div>
    </div>
  );
}
