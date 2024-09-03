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
  height: 100%;
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
  const [gap, setGap] = useState(0);
  const yTranslation = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    const calculateHeightAndGap = () => {
      if (ref.current) {
        const boxHeight = ref.current.offsetHeight;
        setHeight(boxHeight);
      }
      if (boxesRef.current) {
        const style = window.getComputedStyle(boxesRef.current);
        const gap = parseFloat(style.gap);
        setGap(gap);
      }
    };
    calculateHeightAndGap();
    window.addEventListener("resize", calculateHeightAndGap);

    return () => {
      window.removeEventListener("resize", calculateHeightAndGap);
    };
  }, []);

  useEffect(() => {
    if (height === 0) return;

    const finalPosition = -(height + gap) * 5;

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
  }, [height, gap, yTranslation]);

  return (
    <Wrapper>
      <Boxes ref={boxesRef} style={{ y: yTranslation }}>
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

export default Slide;
