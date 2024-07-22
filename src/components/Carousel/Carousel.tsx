import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface SProps {
  slides: string[];
}

// Styled components
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  width: 400px;
  height: 500px;
  margin: auto;
  overflow: hidden;
`;

const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
`;

const Button = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: black;
  opacity: 0.5;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  ${(props) => props.left ? 'left: 10px;' : 'right: 10px;'}
`;

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
              <img src={slide} />
            </Slide>
          )
        ))}
      </AnimatePresence>
      <Button left onClick={prevSlide}>◀</Button>
      <Button onClick={nextSlide}>▶</Button>
    </CarouselContainer>
  );
}

export default Carousel;
