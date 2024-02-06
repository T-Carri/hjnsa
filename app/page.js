'use client'
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  
  const contactoRef = useRef(null);

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


  return (
<>
<div className="main">
<header>
      <nav >

        <div className="mt-3"  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <div className='relative w-24 h-24  mx-3 rounded-xl overflow-hidden '>
          <Image src="/hjnsa.png" alt="Descripción de la imagen" fill={true} />
        </div>
          <div style={{ marginLeft: '50px' }}>
        <a>INICIO</a>

          </div>
          <div onClick={scrollToAboutus} style={{ marginLeft: '50px' }}>
        <a>SOBRE NOSOTROS</a>

          </div>
          <div style={{ marginLeft: '50px' }} onClick={scrollToContacto}>
        <a>CONTACTO</a>

          </div>

        </div>
        
      </nav>
    </header>

<div className="carousel relative mb-50"  >
<Image className="overflow-hidden" src="/hero.jpg"  fill={true} />

<div className="content">
<div className=" max-w-7xl px-6 lg:px-8">
    <div className=" max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Hidroservicios Industriales, S.A. de C.V.</h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">Con más de 15 años de experiencia, se destaca en el mercado por ofrecer soluciones eficientes y sostenibles para el mantenimiento y la limpieza de pistas de aterrizaje, priorizando la seguridad y operatividad aeroportuaria.</p>
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


              <span><strong className="font-semibold text-gray-900">	AEROPUERTO DE BELICE</strong></span>
            </li>

            <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">	COMEX PLANTA TEPEXPAN </strong></span>
           </li>


           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">	FLOWSERVE PLANTA ECATEPEC </strong></span>
           </li>
           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">COMEX PLANTA TEPEXPAN </strong></span>
           </li>


           <li className="flex gap-x-3">
             

             <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
             </svg>


             <span><strong className="font-semibold text-gray-900">AEROPUERTO QUERETARO, CANCÚN, PUEBLA, COZUMEL, MINATITLAN, VILLAHERMOSA, OAXACA, MERIDA </strong></span>
           </li>





          </ul>
        </div>
      </div>
    </div>
    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://plus.unsplash.com/premium_photo-1661963072327-555bfc988fea?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
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
      <p className="mt-2 text-lg leading-8 text-gray-600">NUESTRO PERSONAL CUENTA CON AMPLIA EXPERIENCIA EN SERVICIOS EJECUTADOS EN INDUSTRIAS COMO: </p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
         
          <a  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"> DESCAUCHE O DESCONTAMINACIÓN DE PISTA DE AEROPUERTOS</a>
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
         
          <a  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">LIMPIEZA MECANICA E HIDRODINAMICA DE TANQUES CISTERNAS Y DRENAJES 
            </a>
        </div>
        <div className="group relative">
         
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">LIMPIEZA VIA QUÍMICA PARA DESENGRASAR, DESOXIDAR, DESINCRUSTAR, DECAPAR, PASIVAR, DESCARBONIZAR, FOSFATIZAR, SANITIZAR.
            </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image alt="1"  src="/2.jpg" width={300} height={300}/>
        </div>
      </article>

      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
         
          <a  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"> LIMPIEZA HIDRODINAMICA POR MEDIO DE AGUA A ALTA PRESION</a>
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




<footer ref={contactoRef} style={{ height: '40em', backgroundColor: 'black', padding: '4%' }}>
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






</>    






  );
}
