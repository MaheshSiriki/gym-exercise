import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftIcon from '../assets/icons/left-arrow.png';
import RightIcon from '../assets/icons/right-arrow.png';


const RightArrow=()=>{
  const {scrollNext}=useContext(VisibilityContext)
  return(
    <Typography onClick={()=>scrollNext()} className='left-arrow'>
      <img src={RightIcon} alt='left-arrow'/>

    </Typography>
  )
}

const LeftArrow=()=>{
  const {scrollPrev}=useContext(VisibilityContext)
  return(
    <Typography onClick={()=>scrollPrev()} className='right-arrow'>
      <img src={LeftIcon} alt='right-arrow'/>

    </Typography>
  )
}


const HorizontalScrollbar = ({data,bodyPart,setBodyPart,isBodyParts}) => 
   (
    <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {
        data.map((item)=>
            (
            <Box key={item.id||item}
            itemId={item.id||item}
            title={item.id||item}
            m='0px 40px'>
                {isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercises={item} /> }
            </Box>
      ))}
    </ScrollMenu>
  )
export default HorizontalScrollbar 





