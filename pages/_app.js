

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;

      const container = document.getElementById('trail-container');
      if (container) {
        container.appendChild(trail);
      }

      setTimeout(() => {
        trail.remove();
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        id="trail-container"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      />
      <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;



// import Navbar from '../components/Navbar';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Navbar />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;
