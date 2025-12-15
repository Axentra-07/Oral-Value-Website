import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import  Resources  from './pages/Resources';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('HOME');

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onNavigate={setCurrentPage} />;
      case 'SERVICES':
        return <Services onNavigate={setCurrentPage} />;
      case 'ABOUT':
        return <About />;
      case 'TEAM':
        return <Team onNavigate={setCurrentPage} />;
      case 'FAQ':
        return <FAQ />;
      case 'CONTACT':
        return <Contact />;
      case 'RESOURCES':
        return <Resources />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;