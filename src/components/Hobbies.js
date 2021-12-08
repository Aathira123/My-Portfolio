import React from 'react'
import {Pie} from 'react-chartjs-2'

function Hobbies() {
    const data = {
        datasets: [{
            
            data: [25, 25, 15,15,20],
            
            backgroundColor:['#FFCC99','#99CCFF','#FF99CC','#CCFFCC','#FFFF66'],
            borderColor:'black',
            
            legend:{
                display:true,
                labels:{
                    fontColor: 'rgb(255, 99, 132)',
                    boxWidth:'10'
                }
            }
           
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Watching Movies',
            'Coding',
            'Cooking/Baking',
            'Shopping',
            'Listening to Music'

        ],
        
    };
    const w='70vh';
    const h='40vh';
    return (
        <div className="pie">
          <Pie data={data}  width={w}
  height={h} 
  options={ {
 
    maintainAspectRatio:false,
    legend: {
        display: true,
        labels: {
            fontSize:23,
            fontColor:'black'
        }
    }
}}
  />
            
        </div>
    )
}

export default Hobbies;