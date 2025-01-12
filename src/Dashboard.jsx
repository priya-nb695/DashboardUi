import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import OutlinedCard from './Cards';
import ResponseTime from './ResponseTime';
import ApproachData from './ApproachData';
import SuggestionsCard from './SuggestionsCard';
import CompAccuCard from './CompAccuCard';
import ScoreCard from './ScoreCard';
import RevisitPaper from './RevisitPaper';
import ColoredChips from './ColoredChips';
import TimeScale from "./TimeScale";
import result from "../src/assests/result.png"

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
      <div className='leftContainer'>
      <div className="textwithImage">
      <img  src={result} alt="result img"/> 
      <h1 className='purple-text'>Your Result!</h1>
      <p>All Your insights & details in one place</p>
      <ScoreCard />
      <RevisitPaper /></div>
       
      </div>
      <div className='rightContainer'>
        {/* Cards in firstContainer in horizontal flex */}
        <div className='firstContainer' style={{ display: 'flex', gap: '16px', justifyContent: 'space-between' }}>
          <Paper elevation={3} style={{ width: '30%', padding: '16px', height:"200px"}}>
            <OutlinedCard />
          </Paper>
          <Paper elevation={3} style={{ width: '30%', padding: '16px',height:"200px" }}>
            <OutlinedCard />
          </Paper>
          <Paper elevation={3} style={{ width: '30%', padding: '16px',height:"200px" }}>
            <OutlinedCard />
          </Paper>
        </div>

        {/* Cards in secondContainer */}
        <div className='secondContainer' style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Paper elevation={3} style={{ width: '230px', padding: '5px' ,height:"240px"}}>
            <p>Improvemnts</p>
            <ColoredChips />
          </Paper>
          <Paper elevation={3} style={{ width: '230px', padding: '5px',height:"240px" }}>
           <p>Response Time</p>
            <ResponseTime />
          </Paper>
          <Paper elevation={3} style={{ width: '230px', padding: '5px',height:"240px" }}>
          <p>Approach Data</p>
            <ApproachData />
          </Paper>
          <Paper elevation={3} style={{ width: '230px', padding: '5px' ,height:"240px"}}>
          <p>Suggestions</p>
            <SuggestionsCard />
          </Paper>
        </div>

        {/* Cards in thirdContainer */}
        <div className='thirdContainer'>
          
          <CompAccuCard />
   
         <TimeScale />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
