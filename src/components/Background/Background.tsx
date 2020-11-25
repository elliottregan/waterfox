import React, { useEffect, useRef } from "react";
import anime from 'animejs';

import './Background.scss';

const SWAY_DEFAULTS = {
  duration: 8000
}

const PATH_DEFAULTS = {
  duration: 16000
}

const useHorizontalAnimation = (
  target: React.RefObject<SVGSVGElement> | React.RefObject<SVGPathElement>, options: { duration: number; } = SWAY_DEFAULTS) => {
  const animationRef = useRef(anime({}));
  useEffect(() => {
    animationRef.current = anime({
      targets: target.current,
      translateX: '15%',
      translateY: '5%',
      duration: options.duration,
      loop: true,
      direction: "alternate",
      easing: "easeInOutBack",
      delay: 0,
    });

  }, [target, options]);

  return animationRef;
}

const useBackgroundAnimation = (target: React.RefObject<SVGSVGElement> | React.RefObject<SVGPathElement>, options: { duration: number; } = PATH_DEFAULTS) => {
  const animationRef = useRef(anime({}));
  useEffect(() => {
    animationRef.current = anime({
      targets: target.current,
      duration: options.duration,
      easing: 'easeInOutBack',
      d: target.current?.dataset.altD,
      loop: true,
      direction: "alternate",
    });

  }, [target, options]);

  return animationRef;
}

function Background() {

  const shape1 = useRef<SVGSVGElement>(null);
  const shape2 = useRef<SVGSVGElement>(null);
  const shape3 = useRef<SVGSVGElement>(null);
  const path1 = useRef<SVGPathElement>(null);
  const path2 = useRef<SVGPathElement>(null);
  const path3 = useRef<SVGPathElement>(null);

  useHorizontalAnimation(shape1);
  useHorizontalAnimation(shape2, { duration: 10000 });
  useHorizontalAnimation(shape3, { duration: 12000 });
  useBackgroundAnimation(path1);
  useBackgroundAnimation(path2);
  useBackgroundAnimation(path3);

  return (
    <div>
      <div className="shape-wrap">
        <svg ref={shape1} className="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            ref={path1}
            fill="#0099ff"
            fillOpacity="0.25"
            d="M0,192L60,197.3C120,203,240,213,360,218.7C480,224,600,224,720,240C840,256,960,288,1080,277.3C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            data-alt-d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,240C840,256,960,256,1080,250.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg ref={shape2} className="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            ref={path2}
            fill="#0099ff"
            fillOpacity="0.20"
            d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,165.3C672,171,768,213,864,213.3C960,213,1056,171,1152,170.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            data-alt-d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,261.3C672,267,768,245,864,245.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg ref={shape3} className="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            ref={path3}
            fill="#0099ff"
            fillOpacity="0.15"
            d="M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,224C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            data-alt-d="M0,160L60,176C120,192,240,224,360,240C480,256,600,256,720,256C840,256,960,256,1080,240C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Background;
