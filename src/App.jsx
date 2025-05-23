import Home from './components/home';
import { Routes, Route } from 'react-router-dom';
import Register  from './pages/Register';
const App = () => {
    return(
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    )
}

export default App;