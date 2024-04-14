// Home.tsx
import React from 'react';
import About from '../sections/About';

const Home: React.FC = () => {
  console.log("hola home")
  console.log(process.env.REACT_APP_FIREBASE_API_KEY)
  return (
    <div>
      <About/>
    </div>
  );
};

export default Home;
