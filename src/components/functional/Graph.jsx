import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Paper, Typography } from '@mui/material';
 
function Graph () {
        return (

            <>  
            <Paper sx={{my:2}}>
                      <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
            series={[
              {
                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                showMark: ({ index }) => index % 2 === 0,
              },
              {
                data: [6, 6, 2.5, 3.5, 6.5, 1, 3, 9, 3, 2],
                showMark: ({ index }) => index % 2 === 0,
              }
            ]}
            width={800}
            height={300}
          />
          <Typography sx={{ml: 5, pb: 2, fontFamily: 'fantasy'}}>Users and Subscribers</Typography>
          </Paper>
          </>

        );
    
}

export default Graph;