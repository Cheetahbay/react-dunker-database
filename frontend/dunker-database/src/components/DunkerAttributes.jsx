import React from 'react'

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Radar } from 'react-chartjs-2';
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );





const DunkerAttributes = ( { attributes } ) => {
    
        

        DunkerAttributes.defaultProps = {
            
            attributes: {
                "style": 5,
                "creativity": 5,
                "power": 5,
                "versatility": 5
            }
        }

        const numberAttributes = [7, 9.5, 8.5, 5.5];

        const data = {
            labels: ['Style', 'Creatvity', 'Power', 'Versatility'],
            datasets: [
            {
                label: '# of Points',
                data: numberAttributes,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            ],
        };

        const options = {
            scales: {
               
                r: {
                    suggestedMin: 0,
                    suggestedMax: 10,
                    backgroundColor: '#3D3D3D',
                    ticks: {
                        stepSize: 1,
                    
                    }
                }
            }
        }
    
    

        return (
            <div className='dunker-body primary'>
                <h3>Attributes</h3>
                <Radar data={data} options={options}/>
                <div className="container">
                    <div className="row">
                        {/* <div className="col">
                            <button className='btn btn-primary mb-2'>Style: {attributes['style']}</button>
                            <button className='btn btn-primary mb-2'>Power: {attributes['power']}</button>
                        </div>
                        <div className="col">
                            <button className='btn btn-primary mb-2'>Creativity: {attributes['creativity']}</button>
                            <button className='btn btn-primary'>Versatility: {attributes['versatility']}</button>
                        </div> */}
                    </div>
                    </div> 
            </div>
        )
    
    
}

export default DunkerAttributes
