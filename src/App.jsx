import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/movies.context';
import Navbar from './components/navbar';

import Home from './pages/home';
import Details from './pages/details';
import Favorites from './pages/favorites';

function App() {
  return (
    <MoviesProvider>
      <div className='min-h-sreen w-full bg-[#121212] text-[#f2f2f2]'>
        <BrowserRouter>
          <Toaster />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:ID/details' element={<Details />} />
            <Route path='/favorites' element={<Favorites />} />
            {/* <Route path='/:rest*' element={<NotFoundComponent />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </MoviesProvider>
  );
}

export default App;
