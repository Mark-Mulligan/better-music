import { useEffect, useRef, useState } from 'react';
import styles from './FadeIn.module.css';

const FadeIn = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (props.fadeOnLoad || entries[0].intersectionRatio > 0 || entries[0].intersectionRatio < 0) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);
    let nodeCopy = domRef.current;

    return () => observer.unobserve(nodeCopy);
  }, [props.fadeOnLoad]);

  return (
    <div ref={domRef}>
      <div className={`${styles.fadeSection} ${isVisible ? styles.isVisible : ''} `}>{props.children}</div>
    </div>
  );
};

export default FadeIn;
