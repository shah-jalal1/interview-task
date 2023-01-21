import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";

const Home = lazy(() => import('./Pages/Home'));
const Result = lazy(() => import('./Pages/Result'));

function App() {
  return (
   <div>
       <Suspense fallback={<div>loading.........</div>}>
       <BrowserRouter>
           <Routes>
               <Route path='/' element={<Home />}/>
               <Route path='/result' element={<Result />}/>
           </Routes>
       </BrowserRouter>
       </Suspense>
   </div>
  );
}

export default App;
