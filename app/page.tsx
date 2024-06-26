// page.tsx
import React from 'react';
import NavBarHome from './components/NavBarHome';

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen bg-beige">
        <div style={{ marginRight: '40%', marginLeft: '2%' }}>
          <NavBarHome />
        </div>
        <div className="absolute right-0 top-0 bg-navy p-8 h-[70%] w-[32%] bg-cover bg-center" style={{ backgroundImage: "url('/home-page-pattern.jpg')" }}>
        </div>
        <div className="p-8 max-w-4xl" style={{ marginLeft: '2%' }}>
          <p className="text-white text-6xl font-bold leading-none font-custom-2">DISCOVER THE</p>
          <p className="text-white text-6xl font-bold leading-none font-custom-2">PERFECT KURTA,</p>
          <p className="text-navy text-6xl font-bold leading-none font-custom-2">TAILORED JUST FOR</p>
          <p className="text-navy text-6xl font-bold leading-none font-custom-2">YOU!</p>
          <p className="mx-2 my-2 text-lg"><span className="font-bold text-navy">Welcome to Tailor Swift,</span> where tradition meets technology. We craft personalized kurtas that fit your unique style and measurements. Using advanced computer vision, we ensure each garment is perfectly tailored for unmatched comfort and elegance. For any occasion, Tailor Swift blends sophistication and individuality in every stitch.</p>
        </div>
        <div style={{marginLeft: '34%', marginTop: '5%', width: '70%'}}>
            <p className="text-white text-6xl font-bold leading-none font-custom-2">YOUR PERFECT KURTA</p>
            <p className="text-blue text-6xl font-bold leading-none font-custom-2">IN FOUR SIMPLE STEPS</p>
        </div>
         <div className="absolute left-0 top-[75%] bg-navy p-8 h-[90%] w-[32%] bg-cover bg-center" style={{ backgroundImage: "url('/home-page-pattern.jpg')"}}>
        </div>
      </div>
      <div className="min-h-screen bg-navy">
        <div className="absolute right-0 top-[170%] bg-navy p-8 h-[110%] w-[32%] bg-cover bg-center" style={{ backgroundImage: "url('/home-page-pattern.jpg')" }}>
        </div>
      </div>
      <div className="min-h-screen bg-beige">
        <div className="p-8 max-w-5xl" style={{ marginLeft: '2%' }}>
          <p className="text-white text-6xl font-bold leading-none font-custom-2">CHECK OUT SOME</p>
          <p className="text-navy text-6xl font-bold leading-none font-custom-2">DESIGNS GENERATED BY OUR MODEL</p>
        </div>
        <div className="flex bg-beige mx-4 p-8">
          <div className="flex flex-col items-center mx-4">
            <img src="kurta-1.png" alt="Image 1" className="h-[75%] w-64 object-cover" />
            <p className="mt-4 text-center text-navy text-medium">“plain white color”</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img src="kurta-2.png" alt="Image 2" className="h-[75%] w-64 object-cover" />
            <p className="mt-4 text-center text-navy text-medium">“white and orange, anarkali”</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img src="kurta-3.jpg" alt="Image 3" className="h-[75%] w-64 object-cover" />
            <p className="mt-4 text-center text-navy text-medium ">“red in color, floral pattern, boat neck”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
