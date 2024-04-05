'use client'
import Image from "next/image";
import { useRef, useState, Fragment  } from "react";
import Carousel from "@/components/carousel";
import emailjs from '@emailjs/browser';
import ChatWidget from '@/components/ChatWidget'
import { FaXTwitter, FaInstagram, FaLinkedin   } from "react-icons/fa6";
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon} from '@heroicons/react/20/solid'
import {
Bars3Icon,
  HomeModernIcon,
  NewspaperIcon,
  CheckBadgeIcon,
  ChatBubbleBottomCenterTextIcon,
  ScaleIcon
} from '@heroicons/react/24/outline'


export default function Home() {
  
    const [isOpen, setIsOpen] = useState(false);
    const form = useRef();
    const contactoRef = useRef(null);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const scrollToContacto = () => {
      contactoRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    const aboutusRef = useRef(null);
  
    const scrollToAboutus = () => {
      aboutusRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    
    const portafolioRef = useRef(null);
  
    const scrollToPortafolio = () => {
      portafolioRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  
    const scrollToPolitic = () => {
      console.log('for politic')
    };
  
  
    const scrollToblog = () => {
      console.log('for politic')
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_zntp8xm', 'template_34e5qhe', form.current, {
          publicKey: 'XD5yABx5Ec7h_6uq7',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
  
  
        form.current.reset();
    };
  
  
    let slides = [
      "/c4.jpg",
      "/c5.jpg",
      "/c6.jpg",
      
      "/c1.jpg",
      
      "/c2.jpg",
      
      "/c3.jpg"
      
      
    ];
  
  
  
  
  
  
  
    const solutions = [
      { 
        name: 'Inicio', 
        description: 'Encuentra más información acerca de nosotros', 
         // Aquí asigna la función directamente, sin comillas
        onClick: scrollToAboutus, // Aquí asigna la función directamente, sin comillas
  
        href: '/', 
        icon: HomeModernIcon 
      },
      { 
        name: 'Políticas', 
        description: 'Políticas de la empresa', 
        onClick: scrollToPolitic,
        href: '/politicas', 
        icon: ScaleIcon 
      }
     
    ];
  

  return (
<>

<header>
<nav>
      <div className="mt-3 flex flex-row items-center justify-between">
        <div className="relative w-24 h-24 mx-3 rounded-xl overflow-hidden">
          <Image src="/hjnsa.png" alt="Descripción de la imagen" fill={true} />
        </div>
        <div className="block">
          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              <Bars3Icon className="h-10 w-10" aria-hidden="true" />
            </Popover.Button>
            
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-1 top-full right-0 w-screen max-w-md">
                <div className="flex flex-col overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {solutions.map((item) => (
                      <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div>
                          <a onClick={item.onClick}  href={item.href} className="font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </nav>   </header>

    

<div style={{ background: 'white', padding: '20px', borderRadius: '10px', margin:'auto' }}>
<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">Novedades en Hidroservicios Industriales, S.A. de C.V.</p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">Abril 5, 2024</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Hidroservicios Industriales, S.A. de C.V.</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Ingeniería industrial
            </a>
          </h3>
          <p className="mt-5  text-sm leading-6 text-gray-600">
          En un mundo industrial cada vez más competitivo, la limpieza no es solo una tarea básica, es un componente crítico para el éxito operativo. En este blog, exploraremos cómo Hidroservicios Industriales S.A. de C.V. proporciona servicios de limpieza industrial de alto valor que no solo garantizan la seguridad y la eficiencia, sino que también ayudan a sus clientes a alcanzar sus objetivos comerciales.

El objetivo principal de este blog es destacar la importancia de los servicios de limpieza industrial y cómo Hidroservicios Industriales S.A. de C.V. se posiciona como un líder en este campo. Queremos demostrar cómo la limpieza preoperacional y el mantenimiento continuo son fundamentales para la seguridad, la eficiencia y la integridad de las operaciones industriales. También, nuestro otro objetivo es convertirnos en el proveedor líder de servicios de limpieza industrial en nuestra región. Nos comprometemos a alcanzar una cuota de mercado del 30% en los próximos tres años, expandir nuestra gama de servicios para satisfacer las necesidades cambiantes de nuestros clientes y mantener un índice de satisfacción del cliente por encima del 95% en todo momento.

            
            </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
       
        </div>
      </article>

      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">Abril 5, 2024</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Hidroservicios Industriales, S.A. de C.V.</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Ingeniería industrial
            </a>
          </h3>
          <p className="mt-5  text-sm leading-6 text-gray-600">
          Una parte importante para nosotros como empresa es en poder elegir bien y establecer estrategias que nos ayuden a garantizar un camino perfecto y concreto, por ello una de nuestras estrategias se centra en proporcionar información detallada sobre los servicios ofrecidos por Hidroservicios Industriales S.A. de C.V., destacando su experiencia, compromiso con la calidad y capacidad para adaptarse a las necesidades específicas de cada cliente. Nuestra segunda estrategia se basa en la calidad superior, la innovación continua y la sostenibilidad ambiental. Nos esforzamos por implementar rigurosos controles de calidad en cada etapa de nuestro proceso de limpieza, buscamos constantemente nuevas tecnologías y métodos de limpieza para mejorar la eficiencia y la efectividad de nuestros servicios, y somos guardianes del medio ambiente, utilizando productos y técnicas de limpieza ecológicos para reducir nuestro impacto ambiental y promover prácticas sostenibles.


            </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
        
        </div>
      </article>

      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">Abril 5, 2024</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Hidroservicios Industriales, S.A. de C.V.</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Ingeniería industrial
            </a>
          </h3>
          <p className="mt-5  text-sm leading-6 text-gray-600">
En HINSA, nos distinguimos por nuestra dedicación a la excelencia en la limpieza industrial. Garantizamos un entorno limpio y seguro para nuestros clientes y sus empleados, cumpliendo con los más altos estándares de calidad y seguridad en todo momento. Nos preocupamos por el futuro de nuestro planeta, por lo que nos comprometemos a utilizar productos y técnicas de limpieza ecológicos que minimicen nuestro impacto ambiental y promuevan prácticas sostenibles. Cada cliente es único, por lo que adaptamos nuestros servicios a las necesidades específicas de cada uno, brindando soluciones personalizadas y un servicio al cliente excepcional en todo momento.
          
          Realizaremos un análisis exhaustivo del mercado para identificar oportunidades de crecimiento y nichos de mercado poco explotados. Invertiremos en la capacitación y el desarrollo de nuestro equipo para garantizar que estén equipados con las habilidades y el conocimiento necesarios para ofrecer servicios de alta calidad en todo momento. Desarrollamos una estrategia de marketing integral que incluya campañas publicitarias, presencia en redes sociales y participación en eventos de la industria para aumentar nuestra visibilidad y atraer nuevos clientes. Implementaremos un sistema de gestión de la calidad que nos permita monitorear y mejorar constantemente nuestros procesos y resultados, asegurando la satisfacción del cliente en todo momento.            
           
            </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
        
        </div>
      </article>

    </div>
  </div>
</div>


</div>







<footer  style={{ height: '40em', backgroundColor: 'black', padding: '4%' }}>
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '50%' }}>
    <div style={{ flex: '1' }}> 
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3758.4291758635177!2d-99.32114218954446!3d19.608941281632163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses-419!2smx!4v1707144920768!5m2!1ses-419!2smx" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div style={{ flex: '1', color: 'white' }}>
      <h2 style={{ fontSize: '2em', marginBottom: '1em' }}>Información de Contacto</h2>
      <p>¡Gracias por visitarnos! Aquí encontrarás información de contacto para nuestro servicio.</p>
      <p> Para mayor información y cotizaciones comunicarse al: </p>
      <p>Dirección: <strong>CDA DE LAS ROSAS 1 A2, VICENTE GUERRERO 1A. SECCION, 54425 Ciudad Nicolas Romero, México</strong></p>
      <p>Teléfono: <strong>015558234064, 5510474256 Sucursal Mérida: 9992069855</strong></p>
      <p>Correo Electrónico: <strong>hidroserviciosindustriales@hinsa.mx</strong></p>
      <p>Correo Electrónico 2: <strong>hidroserviciosindustriales@hotmail.com</strong></p>
      <p>Correo Electrónico 3: <strong>osollo@hotmail.com</strong></p>
      {/* Puedes agregar más detalles según tus necesidades */}
    </div>
  </div>
</footer>




<a href="https://wa.me/5215646766202" target="_blank" rel="noopener noreferrer">
    <img src="/wa.png" alt="WhatsApp" class="whatsapp-logo w-20 h-20"/>
  </a>

</>    






  );
}
