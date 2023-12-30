'use client';
import { CardTestimony } from '@/app/ui';
import './Testimonies.css';
import Slider from 'react-slick';

const opinions = [
  {
    id: 1,
    name: 'Ana Rodriguez',
    location: 'España',
    point: '4.2',
    opinion: `Personal Cloud ha transformado la manera en que gestiono mis archivos. Ahora puedo acceder a mis documentos desde cualquier lugar, lo que ha hecho mi vida mucho más fácil.`,
  },
  {
    id: 2,
    name: 'Raj Patel',
    location: 'India',
    point: '3.6',
    opinion: `Como usuario activo de Personal Cloud, he experimentado una mejora significativa en la seguridad y la accesibilidad de mis datos. ¡Altamente recomendado!`,
  },
  {
    id: 3,
    name: 'Elena Santos',
    location: 'México',
    point: '5.0',
    opinion: `Utilizar Personal Cloud ha sido una experiencia revolucionaria para mí. Puedo compartir archivos de manera rápida y segura con mis colegas, lo cual ha mejorado nuestra colaboración.`,
  },
  {
    id: 4,
    name: 'Amit Kapoor',
    location: 'India',
    point: '3.9',
    opinion: `La flexibilidad de Personal Cloud ha sido clave en mi vida laboral. La capacidad de acceder a mis archivos desde diferentes dispositivos ha mejorado mi productividad de manera significativa.`,
  },
  {
    id: 5,
    name: 'Maria Silva',
    location: 'Brasil',
    point: '4.8',
    opinion: `¡Personal Cloud ha cambiado mi forma de trabajar! Ahora puedo almacenar y organizar mis archivos de manera eficiente, lo que me ahorra tiempo y me ayuda a mantenerme organizada.`,
  },
  {
    id: 6,
    name: 'John Smith',
    location: 'Estados Unidos',
    point: '4.4',
    opinion: `Personal Cloud es una herramienta esencial para la gestión de datos personales. Me brinda la tranquilidad de saber que mis archivos están seguros y accesibles en todo momento.`,
  },
];

export const Testimonies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="Testimonies" id="testimonials">
      <div className="Testimonies__header">
        <h2 className="Testimonies__Title">
          Confiable para miles de clientes satisfechos.
        </h2>
        <p className="Testimonies__Description">
          Estas son las historias de nuestros clientes que se han unido con gran
          placer al usar esta característica increíble.
        </p>
      </div>
      <Slider {...settings} className="Slider">
        {opinions.map((opinion) => (
          <CardTestimony key={opinion.id} {...opinion} />
        ))}
      </Slider>
    </div>
  );
};
