/* eslint-disable react/no-danger */
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PreviewBody from './PreviewBody';
import archivoPdf from '@/app/assets/archivo-pdf.svg';
// import ArticleAside from './ArticleAside';

import facebookIcon from '@/app/assets/facebook.png';
import whatsappIcon from '@/app/assets/whatsapp.png';
import telegramIcon from '@/app/assets/telegram.png';
import xIcon from '@/app/assets/x.png';

export default function ArticleContent({
  imgSrc,
  title,
  seccion,
  preview,
  link,
  titleBody,
  body,
  pdfSrc,
  videoUrl,
  autorName,
  autorImg,
  autorPosition,
  autorFacebook,
  path,
}) {
  const SOCIAL = [
    {
      icon: facebookIcon,
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=https://miguelsalinasjuridico.com/publicaciones/${seccion.toLowerCase()}/${path}/&src=sdkpreparse`,
    },
    {
      icon: whatsappIcon,
      name: 'Whatsapp',
      url: `https://wa.me/?text=https://miguelsalinasjuridico.com/publicaciones/${seccion.toLowerCase()}/${path}/`,
    },
    {
      icon: telegramIcon,
      name: 'Telegram',
      url: `https://t.me/share/url?url=https://miguelsalinasjuridico.com/publicaciones/${seccion.toLowerCase()}/${path}/`,
    },
    {
      icon: xIcon,
      name: 'X',
      url: `https://twitter.com/intent/tweet?text=https://miguelsalinasjuridico.com/publicaciones/${seccion.toLowerCase()}/${path}/`,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <PreviewBody
        imgSrc={imgSrc}
        title={title}
        seccion={seccion}
        preview={preview}
      />
      {
        (link && link.startsWith('https://www.youtube.com')) && (
          <aside className="w-11/12 md:w-7/12 grid grid-cols-4 gap-8 py-20 items-start">
            <iframe
              className="w-[300px] sm:w-[400px] md:w-[600px] xl:w-[1000px] aspect-video"
              src={link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </aside>
        )
      }
      {
        videoUrl && (
          <video width="640" height="640" controls className="w-full max-w-7xl mx-10 my-10 h-auto border-2 border-zinc-300 shadow-lg">
            <source src={videoUrl} type="video/mp4" />
            <track kind="captions" src="captions.vtt" label="Espanish" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        )
      }
      <div className="w-full max-w-7xl grid lg:grid-cols-3 gap-10 px-6 my-20">
        <article className="lg:col-span-2 rounded-md text-lg flex-1 w-full">
          <h2 className="text-2xl font-semibold">
            {titleBody}
          </h2>
          <div className="joditBox articleJoditBox" dangerouslySetInnerHTML={{ __html: body }} />
          <footer className="flex flex-col gap-2 font-bold ">
            <div>
              <span className="flex gap-3 items-center">
                <span className="">
                  Autor:
                </span>
                <Link href={autorFacebook} className="font-normal flex gap-2 items-center hover:underline">
                  <img src={autorImg} alt={autorName} className="w-10 aspect-square" />
                  {`${autorPosition} ${autorName}`}
                </Link>
              </span>
            </div>

            <span>
              Para revisar la casación completa:
            </span>
            {pdfSrc && (
            <div className="w-full flex justify-start items-center text-lg">
              <Link href={pdfSrc} target="_blank">
                <Button className="flex gap-3" variant="destructive">
                  <Image
                    src={archivoPdf}
                    alt="pdf"
                    width={25}
                    height={25}
                    className="invert"
                  />
                  PDF
                </Button>
              </Link>
            </div>
            )}
            <span>
              Comparte este articulo en:
            </span>
            <div className="flex gap-2 py-1 flex-wrap">
              {
              SOCIAL.map((social) => (
                <Link target="_blank" href={social.url} className="px-4 py-2 flex flex-col items-center gap-2 hover:bg-slate-200" key={crypto.randomUUID()}>
                  <Image src={social.icon} width={40} height={40} alt={social.name} />
                  <span className="text-sm text-muted-foreground">
                    {social.name}
                  </span>
                </Link>
              ))
            }
            </div>
          </footer>
        </article>
        {/* <ArticleAside /> */}

      </div>
    </div>
  );
}
