import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from "webfontloader";

// layouts
import { PageLayout } from './Layouts/PageLayout';

// components
import { Home } from './components/Home/Home';
import { Test } from './components/Test';

export default function App() {

  //webfontloader
  useEffect( () => {
    WebFont.load({
        google: {
            families: ['Poppins',  'Open Sans', 'Roboto']
        }
    });
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
          </Route>
          
        </Routes>
      </Router>
    </div>
  
  );
}