import React,{useState,useEffect} from 'react'
import { Pagination,Box,Stack,Typography } from '@mui/material'
import {exerciseOptions,fetchedData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercise = ({exercise,setExercise,bodyPart}) => {
  const [currentPage,setCurrentPage]=useState(1)
  const exercisesPerPage=6
  const indexOfLastExercise=currentPage*exercisesPerPage
  const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage
  const CurrentExercise=exercise.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate=(e,value)=>{
      setCurrentPage(value)

      window.scrollTo({top:'1800',behavior:'smooth'})
  }

  useEffect(()=>{
     const fetchExercisesData=async()=>{
      let exerciseData=[]
      if(bodyPart==='all'){
        exerciseData=await fetchedData( 'https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      }else {
        exerciseData=await fetchedData( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
      }
      setExercise(exerciseData)
     }
     fetchExercisesData()
  },[bodyPart,setExercise])
  return (
    <Box
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p='20px' id='exercise'>
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap='wrap' justifyContent='center'>
        {CurrentExercise.map((exercises,index)=>(
        <ExerciseCard key={index} exercises={exercises}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercise.length>4 && 
        <Pagination color='standard'
        shape='rounded'
        defaultPage={1}
        count={Math.ceil(exercise.length/exercisesPerPage)}
        page={currentPage}
        onChange={paginate}
        size='large'/>}

      </Stack>
    </Box>
  )
}

export default Exercise
