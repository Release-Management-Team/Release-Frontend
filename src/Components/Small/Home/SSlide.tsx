import {
  animate,
  motion,
  useMotionValue,
  AnimationPlaybackControls,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  overflow: hidden;
  width: 100%;
`;

const Boxes = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  justify-content: start;
  gap: 20px;
`;

const SlideBox = styled(motion.div)`
  flex: 0 0 40vw;
  height: 26vw;
  border-radius: 30px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
`;

function SSlide() {
  const [width, setWidth] = useState(0);
  const [gap, setGap] = useState(0);
  const xTranslation = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    const calculateWidthAndGap = () => {
      if (ref.current) {
        const boxWidth = ref.current.offsetWidth;
        setWidth(boxWidth);
      }
      if (boxesRef.current) {
        const style = window.getComputedStyle(boxesRef.current);
        const gap = parseFloat(style.gap);
        setGap(gap);
      }
    };
    calculateWidthAndGap();
    window.addEventListener("resize", calculateWidthAndGap);

    return () => {
      window.removeEventListener("resize", calculateWidthAndGap);
    };
  }, []);

  useEffect(() => {
    if (width === 0) return;
    const finalPosition = -(width + gap) * 5;

    if (controlsRef.current) {
      controlsRef.current.stop();
    }

    controlsRef.current = animate(xTranslation, [0, finalPosition], {
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
  }, [width, gap, xTranslation]);

  return (
    <Wrapper>
      <Boxes ref={boxesRef} style={{ x: xTranslation }}>
        <SlideBox
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs18.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          ref={ref}
        ></SlideBox>
        <SlideBox
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs19.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></SlideBox>
        <SlideBox
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs5.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></SlideBox>
        <SlideBox
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs5.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></SlideBox>
        <SlideBox
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs5.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></SlideBox>
        <SlideBox
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs18.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></SlideBox>
        <SlideBox
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs19.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></SlideBox>
        <SlideBox
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs5.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></SlideBox>
        <SlideBox
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs5.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></SlideBox>
        <SlideBox
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs5.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></SlideBox>
      </Boxes>
    </Wrapper>
  );
}

export default SSlide;
