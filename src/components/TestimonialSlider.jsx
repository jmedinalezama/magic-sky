import { useEffect, useState } from "react"
import { NextIcon } from "../icons/NextIcon"
import { PreviousIcon } from "../icons/PreviousIcon"

const testimonials = [
  {
    content: 'Estoy encantada con el trabajo de Thalia en la decoración. Todo fue realizado con mucho detalle, amor y sobre todo profesionalismo. Siempre he confiado en el talento de Thalia y una vez ha superado mis expectativas. ¡Gracias por hacer esta celebración tan especial!',
    image: '/images/cliente1.jpeg',
    name: 'Briyitte Guarniz',
    type: 'Cumpleaños'
  },
  {
    content: 'Cada detalle fue cuidadosamente pensado y ejecutado, creando una atmósfera mágica y llena de alegría. Desde los colores vibrantes hasta los adornos temáticos, todo estaba perfectamente coordinado. Sin duda, la decoración fue uno de los puntos más destacados de la fiesta y creó un ambiente inolvidable para todos los invitados.',
    image: '/galery/8.jpeg',
    name: 'Jheison',
    type: 'Detalles y sorpresas'
  }
]


export function TestimonialSlider() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeSlide, setActiveSlide] = useState(() => currentSlide)

  const handlePreviousClick = () =>{
    setCurrentSlide((state) => (state === 0 ? testimonials.length - 1 : state - 1));
  }

  const handleNextClick = () => {
    setCurrentSlide((state) => (state === testimonials.length - 1 ? 0 : state + 1));
  };

  useEffect(() => {
    setActiveSlide(currentSlide)
  }, [currentSlide])


  return (
    <article className="relative bg-white/50 backdrop-blur-md w-full h-full flex justify-center items-center lg:rounded-md">
      <div className="w-full mx-auto overflow-hidden h-full">
        <button className="absolute left-0  h-full flex items-center z-20 text-white hover:bg-[#FF00C7]/50 transition duration-300" onClick={handlePreviousClick}>
          <PreviousIcon />
        </button>

        <button className="absolute right-0  h-full flex items-center z-20 text-white hover:bg-[#FF00C7]/50 transition duration-300" onClick={handleNextClick}>
          <NextIcon />
        </button>

        <section className="relative max-w-[800px] h-[400px] sm:h-[350px] md:h-[250px] mx-auto ">
          {
            testimonials.map((testimonial, index) => (
              <div className={`absolute w-full h-full transition-opacity duration-500 z-10 px-8 py-4 flex flex-col justify-center items-center ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`} key={index}>
                <p className="text-center text-white text-base">{testimonial.content}</p>
                <div className="flex justify-center items-center gap-x-4 mt-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />
                  <div className="flex flex-col justify-center items-start">
                    <h6 className="font-bold text-white">{testimonial.name}</h6>
                    <span className="italic text-sm text-[#00FFF0]">{testimonial.type}</span>
                  </div>
                </div>
              </div>
            ))  
          }
        </section>

        <div className="flex justify-center gap-x-4 py-4">
          {
            testimonials.map((_, index) => (
              <span className={`block w-2 h-2 rounded-full border-4 border-white-400 border-solid ${index === activeSlide ? 'border-[#FF00C7]' : ''}`} key={index}></span>
            ))
          }
        </div>
      </div>
    </article>
    
  )
}
