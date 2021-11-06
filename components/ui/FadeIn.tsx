import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/FadeIn.module.scss';

interface FadeInProps {
  fadeOnLoad: boolean;
  children: JSX.Element;
}

const FadeIn = (props: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (props.fadeOnLoad || entries[0].intersectionRatio > 0 || entries[0].intersectionRatio < 0) {
        setIsVisible(true);

        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      }
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    let nodeCopy = domRef.current;

    return () => {
      if (nodeCopy) {
        observer.unobserve(nodeCopy);
      }
    };
  }, []);

  return (
    <div ref={domRef}>
      <div className={`${styles.fadeSection} ${isVisible ? styles.isVisible : ''} `}>{props.children}</div>
    </div>
  );
};

export default FadeIn;
