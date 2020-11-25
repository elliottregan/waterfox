import React, { useEffect, useRef } from "react";
import anime from 'animejs';

import './Background.scss';

const defaults = {
  duration: 4000
}

const useHorizontalAnimation = (target: React.RefObject<SVGSVGElement> | React.RefObject<SVGPathElement>, options: { duration: any; } = defaults) => {
  const animationRef = useRef(anime({}));
  useEffect(() => {
    animationRef.current = anime({
      targets: target.current,
      translateX: '25%',
      duration: 8000,
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine"
    });
    animationRef.current.play()

  }, [target, options]);

  return animationRef;
}

const useBackgroundAnimation = (target: React.RefObject<SVGSVGElement> | React.RefObject<SVGPathElement>, options: { duration: any; } = defaults) => {
  const animationRef = useRef(anime({}));
  useEffect(() => {
    animationRef.current = anime({
      targets: target.current,
      duration: options.duration,
      easing: 'easeInOutSine',
      d: target.current?.dataset.altD,
      loop: true,
      direction: "alternate",
    });
    animationRef.current.play()

  }, [target, options]);

  return animationRef;
}

function Background() {

  const shape1 = useRef<SVGSVGElement>(null);
  const shape2 = useRef<SVGSVGElement>(null);
  const path1 = useRef<SVGPathElement>(null);
  const path2 = useRef<SVGPathElement>(null);

  useHorizontalAnimation(shape1);
  useBackgroundAnimation(path1);
  useBackgroundAnimation(path2, { duration: 5000 });

  return (
    <div>
      <div className="shape-wrap">
        <svg ref={shape1} className="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            ref={path1}
            fill="#0099ff"
            fillOpacity="0.65"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,149.3C672,139,768,85,864,101.3C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            data-alt-d="M0,128L48,122.7C96,117,192,107,288,128C384,149,480,203,576,224C672,245,768,235,864,208C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg ref={shape2} className="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            ref={path2}
            fill="#0099ff"
            fillOpacity="0.65"
            d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,165.3C672,171,768,213,864,213.3C960,213,1056,171,1152,170.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            data-alt-d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,261.3C672,267,768,245,864,245.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Background;
