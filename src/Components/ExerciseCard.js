import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercises }) => {
    return (
        <Link className='exercise-card' to={`/exercises/${exercises.id}`}>
            <img src={exercises.gifUrl} alt={exercises.name} loading='lazy' />
            <Stack direction='row'>
                <Button sx={{ ml: '21px', color: '#fff', backgroundColor: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {exercises.bodyPart}
                </Button>
                <Button sx={{ ml: '21px', color: '#fff', backgroundColor: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {exercises.target}
                </Button>
                {/* <Button sx={{ ml: '21px', color: '#fff', backgroundColor: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>{exercises.name}</Button> */}
            </Stack>
            <Typography ml='21px' fontWeight='bold' pb='10px' textTransform='capitalize' fontSize='22px' sx={{ color: '#000000' }}>
                {exercises.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard
