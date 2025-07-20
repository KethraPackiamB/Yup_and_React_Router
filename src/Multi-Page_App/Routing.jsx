import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Navigation } from './Navigation';
import { NotFound } from './NotFound';
export const Routing = () => {

    return(
        <div>
    <BrowserRouter>
     <Navigation/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
     </Routes>
     </BrowserRouter>
        </div>
    )
}