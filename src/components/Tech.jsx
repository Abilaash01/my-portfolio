import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { useInView } from 'react-intersection-observer';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <LazyBallCanvas key={technology.name} icon={technology.icon} />
      ))}
    </div>
  );
};

// Create a new component to handle lazy loading for each BallCanvas
const LazyBallCanvas = ({ icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it enters the viewport
    threshold: 0.1, // When 10% of the component is visible
  });

  return (
    <div ref={ref} className="w-28 h-28">
      {inView && <BallCanvas icon={icon} />}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
