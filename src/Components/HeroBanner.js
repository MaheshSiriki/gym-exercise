import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Banner from '../assets/images/banner.png'
 
const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '60px' }, postion: 'relative', p: '20px'
        }}>
            <Typography color='#FF2625'
                fontSize='26px' fontWeight='600'>
                Fitness Club
            </Typography>
            <Typography sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                fontWeight='700' mt='23px' mb='30px'>
                Sweat,Smile <br /> And Reapat
            </Typography>
            <Typography fontSize='22px' lineHeight={'35px'} mb={5}>
                Check out the most effective exercise
            </Typography>
            
            <Button variant="contained" color="error" sx={{backgroundColor:'#FF2625' ,padding:'10px'}} href='#exercise'>
                Explore Exercise
            </Button>
            <Typography color='#FF2625'fontWeight={'600'} mt={5}
            sx={{opacity:0.1,
            display:{lg:'block',xs:'none'},
            fontSize:'200px'}}>
                Exercises
            </Typography>

            <img src={Banner} alt='heroBanner' className='hero-banner-img'/>
        </Box>
    )
}

export default HeroBanner
