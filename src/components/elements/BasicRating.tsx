import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({value}: {value: number}) {

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Rating 
        className='text-green' 
        name="read-only" 
        value={value} 
        readOnly 
        precision={0.5}
        size="small"
      />
    </Box>
  );
}