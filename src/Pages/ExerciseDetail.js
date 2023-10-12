import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetchedData, youtubeOptions } from '../utils/fetchData'
import Details from '../Components/Details'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const exerciseDetailsData = await fetchedData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailsData)
      const exerciseVideosData = await fetchedData(`${youtubeSearchUrl}/search?query=${exerciseDetailsData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      const targetMuscleExercisesData = await fetchedData(`${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
      const equimentExercisesData = await fetchedData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);


    }
    fetchExercisesData()
  }, [id])
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail
