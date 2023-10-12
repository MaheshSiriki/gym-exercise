import React, { useState} from 'react'
import { useEffect } from 'react'
import { Box, Typography, Stack, Button, TextField } from '@mui/material'
import {exerciseOptions,fetchedData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercise = ({setExercise,bodyPart,setBodyPart}) => {
    const [search, setSearch] = useState('')
    const [bodyParts,setBodyParts]=useState([])



    useEffect(()=>{
     const fetchExercisesData=async()=>{
        const bodyPartsdata=await fetchedData( 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
        setBodyParts(['all',...bodyPartsdata])
     }
     fetchExercisesData()
    },[])
    const handleSearch=async()=>{
        if(search){
            const exerciseData=await fetchedData( 'https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
        
        const searchedExercises=exerciseData.filter(
            (item)=>item.name.toLowerCase().includes(search)||
            item.bodyPart.toLowerCase().includes(search)||
            item.equipment.toLowerCase().includes(search)||
            item.target.toLowerCase().includes(search)
            )
        setSearch('')
        setExercise(searchedExercises)
        }

    }
    return (
        <Stack alignItems={'center'} mt='37px'
            justifyContent={'center'} p='20px'>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb='50px' textAlign={'center'} >
                Awesome Exercise you <br />
                Should Know
            </Typography>
            <Box position={'relative'} mb='72px'>
                <TextField
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}

                    height='72px'
                    value={search}
                    placeholder='Search for an exercise'
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    type='text'
                />
                <Button className='search-btn'
                    onClick={handleSearch}
                    sx={{
                        backgroundColor: '#FF2625',
                        color: '#fff', textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '22px', xs: '14px' },
                        height: '56px', position: 'absolute',
                        right: '0'
                    }}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{position:'relative',width:'100%',p:'20px'}}>
                <HorizontalScrollbar data={bodyParts}  bodyPart={bodyPart}
                setBodyPart={setBodyPart}  isBodyParts/>
            </Box>
        </Stack>

    )
}

export default SearchExercise
