import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { FavouritesProductsPage, Mainpage, SearchResults} from './pages'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Mainpage/>}/>  
      <Route path="/favourite" element={<FavouritesProductsPage/>}/>  
      <Route path="/search" element={<SearchResults/>}/>  
    </Routes>
    </BrowserRouter>
  )
}

export default App
