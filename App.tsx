import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ChapterList } from './components/ChapterList';
import { ChapterReader } from './components/ChapterReader';
import { CastPage } from './components/CastPage';
import { About } from './components/About';
import { CHAPTERS } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-800">
        <Navbar />

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapters" element={<ChapterList />} />
            <Route path="/chapter/:id" element={<ChapterReader />} />
            <Route path="/characters" element={<CastPage />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/latest"
              element={<Navigate to={`/chapter/${CHAPTERS.length}`} replace />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
