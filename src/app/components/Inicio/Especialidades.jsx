import Image from 'next/image';
import Link from 'next/link';
import especialidad1 from '@/app/assets/especialidad1.png';
import especialidad2 from '@/app/assets/especialidad2.png';
import especialidad3 from '@/app/assets/especialidad3.png';
import especialidad4 from '@/app/assets/especialidad4.png';
import especialidad5 from '@/app/assets/especialidad5.png';
import especialidad6 from '@/app/assets/especialidad6.png';

export default function Especialidades() {
  return (
    <div className="bg-gray-300 w-full flex flex-col justify-center items-center py-20 gap-10">
      <h2 className="font-bold text-4xl md:text-5xl">
        Especialidades
      </h2>
      <p className=" md:text-xl w-9/12 text-center">
        Nuestro estudio cuenta con una basta experiencia en las siguientes
        especialidades de servicios legales:
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 w-11/12 md:w-9/12 lg:w-6/12 justify-around">
        <li>

          <Link
            href="https://spij.minjus.gob.pe/spij-ext-web/#/detallenorma/H682692"
            target="_blank"
            className="flex flex-col gap-4 justify-center items-center font-semibold
          text-lg py-8 px-2 rounded-md hover:bg-gray-400"
          >
            <div className="rounded-full bg-gray-200 border-solid border-white border-4 flex
             justify-center items-center w-32 h-32"
            >
              <Image
                src={especialidad1}
                width={80}
                height={80}
                alt="Img"
                className="m-4"
              />
            </div>
            <span className="text-center">Codigo Penal</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://spij.minjus.gob.pe/spij-ext-web/#/detallenorma/H682694"
            target="_blank"
            className="flex flex-col gap-4 justify-center items-center font-semibold
          text-lg py-8 px-2 rounded-md hover:bg-gray-400"
          >
            <div className="rounded-full bg-gray-200 border-solid border-white border-4 flex
             justify-center items-center w-32 h-32"
            >
              <Image
                src={especialidad2}
                width={80}
                height={80}
                alt="Img"
                className="m-4"
              />

            </div>
            <span className="text-center">Codigo Procesal Penal</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://spij.minjus.gob.pe/spij-ext-web/#/detallenorma/H682684"
            target="_blank"
            className="flex flex-col gap-4 justify-center items-center font-semibold
          text-lg py-8 px-2 rounded-md hover:bg-gray-400"
          >
            <div className="rounded-full bg-gray-200 border-solid border-white border-4 flex
             justify-center items-center w-32 h-32"
            >
              <Image
                src={especialidad3}
                width={80}
                height={80}
                alt="Img"
                className="m-4"
              />

            </div>
            <span className="text-center">Codigo Civil</span>
          </Link>
        </li>
        <li>

          <Link
            href="https://spij.minjus.gob.pe/spij-ext-web/#/detallenorma/H682700"
            target="_blank"
            className="flex flex-col gap-4 justify-center items-center font-semibold
          text-lg py-8 px-2 rounded-md hover:bg-gray-400"
          >
            <div className="rounded-full bg-gray-200 border-solid border-white border-4 flex
             justify-center items-center w-32 h-32"
            >
              <Image
                src={especialidad4}
                width={80}
                height={80}
                alt="Img"
                className="m-4"
              />

            </div>
            <span className="text-center">Codigo Penal Militar</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://spij.minjus.gob.pe/spij-ext-web/#/detallenorma/H1288461"
            target="_blank"
            className="flex flex-col gap-4 justify-center items-center font-semibold
          text-lg py-8 px-2 rounded-md hover:bg-gray-400"
          >
            <div className="rounded-full bg-gray-200 border-solid border-white border-4 flex
             justify-center items-center w-32 h-32"
            >
              <Image
                src={especialidad5}
                width={80}
                height={80}
                alt="Img"
                className="m-4"
              />

            </div>
            <span className="text-center">Codigo Empresarial Constitucional</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://spij.minjus.gob.pe/spij-ext-web/#/detallenorma/H682678"
            target="_blank"
            className="flex flex-col gap-4 justify-center items-center font-semibold
          text-lg py-8 px-2 rounded-md hover:bg-gray-400"
          >
            <div className="rounded-full bg-gray-200 border-solid border-white border-4 flex
             justify-center items-center w-32 h-32"
            >
              <Image
                src={especialidad6}
                width={80}
                height={80}
                alt="Img"
                className="m-4"
              />

            </div>
            <span className="text-center">Constitucion Politica del Perú</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
