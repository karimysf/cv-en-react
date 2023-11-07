import React from 'react';
import { Home } from './HOME/home';
import './App.css'
import { Info } from './HOME/informations';
import { Cmt } from './HOME/formation et competences';
import { Lng } from './HOME/langues';
import { Foote } from './HOME/footer';
import image from './images/cv.jpeg';


function App() {
  return ( 
  <body>    
    <head> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="  crossOrigin="anonymous"referrerPolicy="no-referrer" /></head>
    <div className="container">
      <div className="header">
        <div className="img-area">
            <img src={image} alt=""/>
        </div>
        <h1>karim youssoufi</h1>
        <h3>Front-end Developer</h3>
      </div>
      <div className="main">
        <div className="flex-1 p-6">
          <Info/>
         <Cmt/>
          </div>
         <div className="flex-1 p-6">
        <Lng/>
           </div>
      </div>
    </div> 
    <div className="relative mt-[-55px] h-[200px] bg-gradient-to-r from-indigo-900 via-indigo-600 to-cyan-200">
    <div className="w-full bg-blue-600 mt-[-40px] h-2"> </div>
  <footer>
    <Foote/>
  </footer>
  </div>
</body>)


  

  } 
   
  


export default App;
