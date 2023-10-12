import './App.css';
import Box from '@mui/material/Box';
import {Routes,Route} from 'react-router-dom';
// import {Box} from '@miui-material';
// import banner from './assets/assets/images/banner.png'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ExerciseDetails from './Pages/ExerciseDetail'

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/exercises/:id" element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;