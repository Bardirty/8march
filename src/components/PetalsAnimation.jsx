import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Petal({ style, transition }) {
  return <motion.div className="petal" style={style} animate={{ y: '110vh', rotate: 360 }} transition={transition} />;
}

export default function PetalsAnimation() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalCount = 30;
    const newPetals = Array.from({ length: petalCount }, (_, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="petals-container">
      {petals.map((petal) => (
        <Petal
          key={petal.id}
          style={{ left: petal.x, top: '-10%' }}
          transition={{ duration: petal.duration, delay: petal.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  );
}
