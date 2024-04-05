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
      name: 'Blog', 
      description: "Revisa nuestro blog", 
      href: '/blog', 
      onClick: scrollToblog,
      icon: NewspaperIcon 
    },
    
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

<section style={{ textAlign: 'center', marginBottom: '20px' }}>
    <div className="mx-auto" style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>Política de Privacidad</div>
</section>

<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong>Fecha de vigencia:</strong> 15 de marzo del 2025</p>
    <p><strong>Última actualización:</strong> 07 de octubre del 2023</p>
</section>


<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong>Seguridad y Cumplimiento Normativo:</strong></p>
    <p>        Establecer procedimientos rigurosos para garantizar la seguridad de los empleados y el cumplimiento de las regulaciones locales e internacionales en materia de aviación.
</p>
</section>

<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong> Capacitación del Personal:</strong></p>
    <p>        Implementar programas de capacitación continua para el personal, asegurando que estén debidamente capacitados en el uso de equipos, protocolos de seguridad y procedimientos de limpieza.
</p>
</section>



<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong> Sostenibilidad Ambiental:</strong></p>
    <p>        Adoptar prácticas respetuosas con el medio ambiente en la gestión de residuos, el uso de productos químicos y la conservación del agua, en línea con las preocupaciones ambientales en la industria.
</p>
</section>




<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong> Programación Eficiente:</strong></p>
    <p>      
    Desarrollar políticas para la programación eficiente de los servicios, minimizando el impacto en las operaciones normales del aeropuerto.
      
</p>
</section>




<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong> Comunicación Efectiva:</strong></p>
    <p>      
    Garantizar una comunicación clara y efectiva con las autoridades del aeropuerto, las aerolíneas y otros stakeholders para coordinar actividades y resolver problemas de manera eficiente.
      
</p>
</section>



<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong> Seguro y Responsabilidad:</strong></p>
    <p>      
    Contar con pólizas de seguro adecuadas para cubrir posibles riesgos y responsabilidades asociadas con las operaciones de mantenimiento y limpieza.
      
</p>
</section>










<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong>Información recopilada:</strong></p>
    <p>Recopilamos información personal limitada y relevante necesaria para proporcionar nuestros servicios de limpieza y mantenimiento de pistas de aterrizaje. Esto puede incluir, entre otros, nombres, información de contacto y detalles operativos.</p>
</section>

<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong>Uso de la información:</strong></p>
    <p>La información recopilada se utiliza exclusivamente para la prestación de servicios contratados y la mejora continua de nuestras operaciones. No compartiremos ni venderemos su información a terceros sin su consentimiento expreso, a menos que sea requerido por la ley.</p>
</section>

<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong>Seguridad:</strong></p>
    <p>Nos comprometemos a proteger la información personal de nuestros clientes. Implementamos medidas de seguridad adecuadas para prevenir el acceso no autorizado, la divulgación, alteración o destrucción de la información.</p>
</section>

<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong>Acceso y Control:</strong></p>
    <p>Usted tiene derecho a acceder, corregir, actualizar o eliminar su información personal. Puede realizar solicitudes de este tipo a través de nuestros canales de contacto especificados en la sección 8.</p>
</section>

<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong>Cookies y Tecnologías Similares:</strong></p>
    <p>Nuestra página web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario. Puede gestionar las preferencias de cookies a través de la configuración de su navegador.</p>
</section>

<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong>Enlaces a Terceros:</strong></p>
    <p>Nuestra página web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios y le recomendamos revisar sus políticas de privacidad.</p>
</section>

<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong>Cambios en la Política de Privacidad:</strong></p>
    <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio significativo se comunicará a través de nuestra página web o por otros medios apropiados.</p>
</section>

<section style={{ color: 'black', marginBottom: '20px' }}>
    <p><strong>Contacto:</strong></p>
    <p>Para preguntas o inquietudes sobre nuestra política de privacidad, puede ponerse en contacto con nosotros a través de hidroserviciosindustriales@hinsa.mx o 015558234064/5510474256.</p>
</section>

<section style={{ color: 'black', marginBottom: '20px' }}>
    <p>Al utilizar nuestros servicios, usted acepta los términos y condiciones de esta política de privacidad.</p>
</section>

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
