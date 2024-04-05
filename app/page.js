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




const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
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
    "https://images.unsplash.com/photo-1503412639354-4fc4ac293517?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/c4.jpg",
    "https://images.unsplash.com/photo-1516052016015-6c951fdad2d1?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/c5.jpg",

    "https://images.unsplash.com/photo-1503412345334-7d4ca6c34f61?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/c6.jpg",
    
    "/c1.jpg",
    
    "/c2.jpg",
    
    "/c3.jpg"
    
    
  ];







  const solutions = [
    { 
      name: 'Sobre nosotros', 
      description: 'Encuentra más información acerca de nosotros', 
       // Aquí asigna la función directamente, sin comillas
      onClick: scrollToAboutus, // Aquí asigna la función directamente, sin comillas

      href: '#', 
      icon: HomeModernIcon 
    },
    { 
      name: 'Políticas', 
      description: 'Políticas de la empresa', 
      onClick: scrollToPolitic,
      href: '/politicas', 
      icon: ScaleIcon 
    },
    { 
      name: 'Blog', 
      description: "Revisa nuestro blog", 
      href: '/blog', 
      onClick: scrollToblog,
      icon: NewspaperIcon 
    },
    { 
      name: 'Contacto', 
      description: '¡Contáctanos!', 
      href: '#', 
      onClick: scrollToContacto, // Aquí asigna la función directamente, sin comillas
      icon: ChatBubbleBottomCenterTextIcon 
    }
  ];

  return (
<>
<div className="main relative">
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

<div className="carousel relative mb-50"  >
<Image alt="carouseli" className="overflow-hidden" src="https://images.unsplash.com/photo-1638555063519-d009e6f3b28b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  fill={true} />

<div className="content">
<div className=" max-w-7xl px-6 lg:px-8">
    <div className=" max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl"><strong> Hidroservicios Industriales, S.A. de C.V. </strong></h2>
       <p className="mt-6 text-lg leading-8 text-white"><strong>Con más de 15 años de experiencia, se destaca en el mercado por ofrecer soluciones eficientes y sostenibles para el mantenimiento y la limpieza de pistas de aterrizaje, priorizando la seguridad y operatividad aeroportuaria.</strong></p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a onClick={scrollToAboutus}>Conoce nuestros servicios <span aria-hidden="true">&rarr;</span></a>
        <a onClick={scrollToPortafolio}>Portafolio <span aria-hidden="true">&rarr;</span></a>
    
      </div>

     
      
    </div>
  </div>

</div>

</div>

</div>



<div className="second"  ref={aboutusRef}>

<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
        <h4 className="mt-16 text-2xl font-bold tracking-tight text-red-600">HIDROSERVICIOS INDUSTRIALES, S.A DE C.V</h4>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Limpiezas quimicas e hidrodinamicas a todo tipo de equipo de proceso.</h2>
          <p className="mt-6 text-xl leading-8 text-gray-700">Somos una empresa dedicada a la prestación de Servicios de Limpieza Pre operacional y de Mantenimiento, a equipo de proceso por medio de chorro de agua a alta presión (Hidroblast) y recirculación química, con más de 15 años de experiencia en nuestro ramo lo cual está garantizado para ofrecerte el mejor servicio con la calidad, lo cual no respaldan nuestros clientes: </p>
          <ul role="list" className="mt-8 space-y-7 text-gray-600">
            <li className="flex gap-x-3">
             

              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
             <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
              </svg>


              <span><strong className="font-semibold text-gray-900">	Aeropuerto de Belice</strong></span>
            </li>

            <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">	Comex planta Tepexpan</strong></span>
           </li>


           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">	Flowserve Planta Ecatepec </strong></span>
           </li>
       


           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">Aeropuerto, Queretaro, Cancún, Puebla, Cozumel, Minatitlán, Villahermosa, Oaxaca, Mérida </strong></span>
           </li>





          </ul>
        </div>
      </div>
    </div>
    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img alt="heros" className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://plus.unsplash.com/premium_photo-1661963072327-555bfc988fea?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></img>
    </div>
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
      <div className="lg:max-w-lg">
       
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Los servicios que realizamos son: </h2>
         
          <ul role="list" className="mt-8 space-y-7 text-gray-600">
            <li className="flex gap-x-3">
             

              <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
             <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
              </svg>


              <span><strong className="font-semibold text-gray-900">Limpieza mecánica e hidrodinámica. </strong></span>
            </li>

            <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">	Renta de equipos de alta presión (Hidroblast) capacidades de 10,000, 20,000 y 40,000 psi. 
Limpieza vía química (para decapar, desoxidar, pasivar, desincrustar, sanitizar). 
 </strong></span>
           </li>


           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">	Limpieza hidrodinámica por medio de agua a alta presión hasta 20,000 psi.  </strong></span>
           </li>
           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">Limpieza de aisladores en vivo o muerto en subestaciones eléctricas Descauche y descontaminación de pista de aterrizaje.  </strong></span>
           </li>


           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">Limpieza de aisladores en vivo o muerto en subestaciones eléctricas Descauche y descontaminación de pista de aterrizaje. </strong></span>
           </li>



           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900"> Renta de unidades de alto vacío.  </strong></span>
           </li>

           
           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">Flushing de Aceite a sistemas hidráulicos y acondicionamiento de aceite.    </strong></span>
           </li>

           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">Decapado a tubería de servicios hidráulicos, de lubricación, Uso Oxígeno, etc.  </strong></span>
           </li>



           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">Limpieza interior de tuberías por medio de barrido con diablos (pìgs).  </strong></span>
           </li>



           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900"> Hidrosamblast y pintura de ductos y tanques de almacenamiento   </strong></span>
           </li>


           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">Pruebas Hidrostáticas. 
	
   </strong></span>
           </li>

           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900"> Pruebas de Hermeticidad, Con aire, Helio, Nitrógeno.  </strong></span>
           </li>


           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900"> Reparación y mantenimiento de intercambiadores de calor y columnas de proceso. </strong></span>
           </li>

           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900"> Reparación, refacciona miento y mantenimiento de equipos de alta presión.  </strong></span>
           </li>




          </ul>
        </div>
        
      </div>
    </div>
  </div>
</div>
</div>







<div className="four" ref={portafolioRef}>
<div className="bg-white py-24 sm:py-32  d-block mt-200">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestra experiencia</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">Nuestro personal cuenta con amplia experiencia en servicios ejecutados en industrias como: </p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
         
          <a  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"> Descauche o descontaminación de pista de aeropuertos</a>
        </div>
        <div className="group relative">
         
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Consiste en la aplicación de producto químico aplicando conjuntamente chorro de agua a alta presión (Hidroblast). </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image alt="3"  src="/1.jpg" width={300} height={300}/>
        </div>
      </article>

      {/* More posts... */}
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
         
          <a  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Limpieza mecánica e hidrodinámica de tanques cisternas y drenajes






            </a>
        </div>
        <div className="group relative">
         
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Limpieza vía química para desengrasar, desoxidar, desincrustar, decapar, pasivar, descarbonizar, fosfatizar, sanitizar.
            </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image alt="1"  src="/2.jpg" width={300} height={300}/>
        </div>
      </article>

      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
         
          <a  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"> Limpieza hidrodinámica por medio de agua a alta presión.</a>
        </div>
        <div className="group relative">
         
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"> Consiste en la aplicación de un chorro de agua a alta velocidad sobre las superficies para separar incrustaciones del metal base. El sistema consiste, en forma general, de una bomba de desplazamiento positivo que descarga agua a través de mangueras y/o tubos de alta resistencia y en su extremo se colocan boquillas o toberas, cuyo patrón de chorro se selecciona de acuerdo al diseño del equipo y a la condición de ensuciamiento. </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image alt="2"  src="/3.jpg" width={300} height={300}/>
        </div>
      </article>
      
    </div>
  </div>
</div>

</div>

<div className="bg-black py-24 sm:py-32 mt-200">
    <div className="max-w-md mx-auto text-white">
        <h4 className="text-3xl font-bold mb-6">Déjanos tus datos, nosotros te contactamos</h4>

        <form  ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium">Nombre:</label>
                <input type="text" id="nombre" name="nombre" className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 text-black" />
            </div>

            <div className="mb-4">
                <label htmlFor="correo" className="block text-sm font-medium">Correo:</label>
                <input type="email" id="correo" name="correo" className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 text-black" />
            </div>

            <div className="mb-4">
                <label htmlFor="telefono" className="block text-sm font-medium">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 text-black" />
            </div>

            <div className="mb-4">
                <label htmlFor="servicios" className="block text-sm font-medium">Servicios de interés:</label>
                <input type="tel" id="servicio" name="servicio" className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 text-black" />

            </div>

            <div className="mt-6">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Enviar</button>
            </div>
        </form>
    </div>
</div>


<div className="bg-white py-24 sm:py-32 mt-20 flex flex-col sm:flex-row">

<div className="w-full sm:w-1/2 p-6">
    <video width="80%" height="auto" className="mx-auto" controls>
      <source src="/video.mp4" type="video/mp4"/>
      Tu navegador no soporta el elemento de video.
    </video>
  </div>

  <div className="w-full sm:w-1/2 p-4 flex flex-col items-center justify-center">
    
    <img src="/hjnsa.png" alt="Imagen en forma de círculo" className="w-16 h-16 rounded-full mb-4"/>

    <audio className="w-full" controls>
      <source src="/audio.mp4" type="audio/mp4"/>
      Tu navegador no soporta el elemento de audio.
    </audio>
  </div>

</div>

 <div className="w-[60%] m-auto pt-11">
      <Carousel slides={slides} />
    </div> 
<footer ref={contactoRef} className="lg:h-50em bg-black p-4">
  <div className="flex flex-col lg:flex-row lg:justify-between h-full">
    <div className="lg:w-1/2 mb-4 lg:mb-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3758.4291758635177!2d-99.32114218954446!3d19.608941281632163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses-419!2smx!4v1707144920768!5m2!1ses-419!2smx"
        width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="lg:w-1/2 text-white p-7">
      <h2 className="text-2xl mb-2">Información de Contacto</h2>
      <p>¡Gracias por visitarnos! Aquí encontrarás información de contacto para nuestro servicio.</p>
      <p>Para mayor información y cotizaciones comunicarse al:</p>
      <p><strong>Dirección:</strong> CDA DE LAS ROSAS 1 A2, VICENTE GUERRERO 1A. SECCION, 54425 Ciudad Nicolas Romero, México</p>
      <p><strong>Teléfono:</strong> 015558234064, 5510474256 Sucursal Mérida: 9992069855</p>
      <p><strong>Correo Electrónico:</strong> hidroserviciosindustriales@hinsa.mx</p>
      <p><strong>Correo Electrónico 2:</strong> hidroserviciosindustriales@hotmail.com</p>
      <p><strong>Correo Electrónico 3:</strong> osollo@hotmail.com</p>


      <div class="flex p-4 justify-center items-center">
    <div class="m-auto text-2xl">
    <a href="https://twitter.com/hjnsa88217">
<FaXTwitter />

      </a>
    </div>
  

    <div class="m-auto text-2xl">
    <a href="https://www.instagram.com/servicios.hjsa?igsh=cDg4amczNGhvbTQz">
         <FaInstagram/>

    </a>
    </div>
   

    <div class="m-auto text-2xl">
    <a href="https://www.linkedin.com/company/hidroservicios-industriales-s-a-de-c-v/?viewAsMember=true">
         <FaLinkedin/>

    </a>
    </div>
  </div>



    </div>
  </div>
  <div className="w-full">
    <div className="mx-auto justify-center w-full"> {/* Añadir la clase w-full aquí */}
      <img src="/qr.PNG" alt="qr" className="mt-4 lg:mt-4 mx-auto" />
    </div>
  </div>

</footer>


<ChatWidget/>


<a href="https://wa.me/5215646766202" target="_blank" rel="noopener noreferrer">
    <img src="/wa.png" alt="WhatsApp" class="whatsapp-logo w-20 h-20"/>
  </a>

</>    

 );
}