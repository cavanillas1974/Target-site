
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout.js';
import { Chatbot } from './components/Chatbot.js';

const Home = lazy(() => import('./pages/Home.js'));
const Services = lazy(() => import('./pages/Services.js'));
const About = lazy(() => import('./pages/About.js'));
const Projects = lazy(() => import('./pages/Projects.js'));
const Contact = lazy(() => import('./pages/Contact.js'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return React.createElement(Router, null,
    React.createElement(ScrollToTop),
    React.createElement('div', { className: 'flex flex-col min-h-screen' },
      React.createElement(Navbar),
      React.createElement('main', { className: 'flex-grow' },
        React.createElement(Suspense, { 
          fallback: React.createElement('div', { className: 'h-screen w-full flex items-center justify-center bg-white' }, 
            React.createElement('div', { className: 'w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin' })
          ) 
        },
          React.createElement(Routes, null,
            React.createElement(Route, { path: '/', element: React.createElement(Home) }),
            React.createElement(Route, { path: '/servicios', element: React.createElement(Services) }),
            React.createElement(Route, { path: '/nosotros', element: React.createElement(About) }),
            React.createElement(Route, { path: '/proyectos', element: React.createElement(Projects) }),
            React.createElement(Route, { path: '/contacto', element: React.createElement(Contact) })
          )
        )
      ),
      React.createElement(Footer),
      React.createElement(Chatbot)
    )
  );
}
