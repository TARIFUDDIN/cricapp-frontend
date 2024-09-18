import React from 'react';
import MultiStageForm from '../components/MultistageForm';
import Navbar from '../components/Navbar';
import Slider from '../components/Silder';
import Footer from '../components/Footer';




const HomePage = () => {
  return (
    <div>
      <Navbar />
      <header style={{ position: 'relative', height: '100vh', background: '#e0f7fa' }}>
        <Slider />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', color: '#004d40' }}>Welcome to XYZ Cricket Tournament</h1>
          <p style={{ fontSize: '1.5rem', color: '#004d40' }}>Join our exciting cricket tournaments!</p>
        </div>
      </header>
      <main style={{ padding: '2rem' }}>
        <MultiStageForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
