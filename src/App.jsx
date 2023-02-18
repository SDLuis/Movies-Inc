import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home/home';
import Details from './home/details';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:ID/details' element={<Details />} />
        {/* <Route path='/:rest*' element={<NotFoundComponent />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
