import React, { Component } from 'react';
import GridCard from '../common/Grid';
import Graph from '../functional/Graph';

function Home() {
    return (
        <div className='page-layout'>
                        <GridCard />
            <Graph />
        </div>
    )
}

export default Home;