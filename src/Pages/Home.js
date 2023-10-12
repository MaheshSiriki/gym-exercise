import React, { useState } from 'react';
import Box from '@mui/material/Box';
import HeroBanner from '../Components/HeroBanner.js';
import SearchExerice from '../Components/SearchExercise.js';
import Exercise from '../Components/Exercise.js';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercise, setExercise] = useState([])

  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExerice setExercise={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercise setExercise={setExercise} bodyPart={bodyPart} exercise={exercise} />
    </Box>
  )
}

export default Home
