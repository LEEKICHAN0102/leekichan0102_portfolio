// hooks
import { useState } from "react";

// libs
import { AnimatePresence } from "framer-motion";

// styles
import { 
  Button,
  CarouselContainer,
  Slide,
  SlideCount,
} from "./carousel.style";

interface SProps {
  slides: string[];
}

// Carousel component
function Carousel ({ slides }: SProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <CarouselContainer>
      <AnimatePresence>
        {slides.map((slide, index) => (
          index === currentSlide && (
            <Slide
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={slide} alt={`slide-${index}`} />
            </Slide>
          )
        ))}
      </AnimatePresence>
      <Button left onClick={prevSlide}>◀</Button>
      <Button onClick={nextSlide}>▶</Button>
      <SlideCount>
        {currentSlide + 1} / {slides.length}
      </SlideCount>
    </CarouselContainer>
  );
}

export default Carousel;