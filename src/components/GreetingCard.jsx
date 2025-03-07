/* src/components/GreetingCard.jsx */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GreetingCard() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="card"
    >
      <h1>С 8 Марта, Сашенька!</h1>
      <p>Пусть в твоей жизни всегда будет весна: аромат цветов, солнце и счастье. Ты заслуживаешь только самого лучшего!</p>
      <button className="button" onClick={() => setShowMessage(true)}>Открыть сюрприз</button>
      {showMessage && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginTop: '15px', color: '#388e3c' }}
        >
          Ты делаешь мир вокруг себя лучше! Я очень рад, что ты есть в моей жизни! 💖
        </motion.p>
      )}
    </motion.div>
  );
}
