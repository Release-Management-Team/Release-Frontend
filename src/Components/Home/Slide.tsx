import {
  animate,
  motion,
  useMotionValue,
  AnimationPlaybackControls,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
`;

const Boxes = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const SlideBox = styled(motion.div)`
  width: 40vw;
  height: 22vw;
  border-radius: 30px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
`;

function Slide() {
  const [height, setHeight] = useState(0);
  const yTranslation = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    const calculateHeight = () => {
      if (ref.current) {
        const boxHeight = ref.current.offsetHeight;
        setHeight(boxHeight);
      }
    };

    calculateHeight(); // Initial calculation
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  useEffect(() => {
    if (height === 0) return;

    const finalPosition = -height * 5;

    if (controlsRef.current) {
      controlsRef.current.stop();
    }

    controlsRef.current = animate(yTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 14,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      if (controlsRef.current) {
        controlsRef.current.stop();
      }
    };
  }, [height, yTranslation]);

  return (
    <Wrapper>
      <Boxes style={{ y: yTranslation }}>
        <SlideBox ref={ref}>1</SlideBox>
        <SlideBox>2</SlideBox>
        <SlideBox>3</SlideBox>
        <SlideBox>4</SlideBox>
        <SlideBox>5</SlideBox>
        <SlideBox>1</SlideBox>
        <SlideBox>2</SlideBox>
        <SlideBox>3</SlideBox>
        <SlideBox>4</SlideBox>
        <SlideBox>5</SlideBox>
      </Boxes>
    </Wrapper>
  );
}

export default Slide;
