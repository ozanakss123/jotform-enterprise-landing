import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Apps from './components/Apps';
import User from './components/User';
import Security from './components/Security';
import Customer from './components/Customer';
import Geolocalization from './components/Geolocalization';
import Existing from './components/Existing';
import Features from './components/Features';
import Enterprise from './components/Enterprise';
import Productivity from './components/Productivity';
import Video from './components/Video';
import Information from './components/Information';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Brands />
    <Apps />
    <User />
    <Security />
    <Customer />
    <Geolocalization />
    <Existing />
    <Features />
    <Enterprise />
    <Productivity />
    <Video />
    <Information />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
