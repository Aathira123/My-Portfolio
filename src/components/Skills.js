import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap';
import {SkillBars} from 'react-skills'

import {projectdata} from './ProjectCard';
export default function Skills() {
  const [clicked,setClick]=useState(false)
    const Skillsdata=[
        {
            name: 'Python',
            level: 70,
            color: '#404040',
          },
          {
            name: 'ReactJS',
            level: 80,
            color: '#404040',
          },
        {
            name: 'Java',
            level: 65,
            color: '#404040',
          },
          {
            name: 'HTML/CSS',
            level: 75,
            color: '#404040',
          },
          {
            name: 'Data Structures',
            level: 70,
            color: '#404040',
          },
          {
            name: 'JavaScript',
            level: 55,
            color: '#404040',
          },
          {
            name: 'SQL',
            level: 65,
            color: '#404040',
          },
          {
            name: 'NodeJs',
            level: 30,
            color: '#404040',
          }
      ]
    
     
 
    return (
        <div style={{marginTop:'4em'}}>
            <h3 className="pageheading1">My Skills</h3>
            <br/>
            <br/>
         <Row>
             <Col md={6} xs={12}>
         <SkillBars skills={Skillsdata}  labelsWidth={200} duration={2} /></Col>
         <Col md={{ offset:0.5 }}>
             <h3 style={{fontFamily:"Apple Chancery, cursive",textAlign:'left',fontSize:'20px', color:"white"}}>
                 I love developing new skills . Web Development is one field that I love. Developing something from scratch is something challenging and interesting at the same time.
                     </h3>
                     <h3 style={{fontFamily:"Apple Chancery, cursive",textAlign:'left',fontSize:'20px',color:"white"}}>
                 Another thing I love doing is working with data structures. I try to improve my coding skills by doing atleast one question per day.
                     </h3>
                     <h3 style={{fontFamily:"Apple Chancery, cursive",textAlign:'left',fontSize:'20px',color:"white"}}>
                I am not an outstanding Coder yet but I am trying my best to reach there one day .
                     </h3>
                    
        </Col>
         </Row>
            
          <br/><br/>
         <h3 className="pageheading2">Projects</h3>

         <div className="projects">
            <br/>
            <br/>

{projectdata.map((pd)=>{
   return(   <div class="card" style={{width:' 20rem',height:'19rem',opacity:0.7}}>
 
   <div class="card-body">
     <h5 class="card-title">{pd.title}</h5>
     <p class="card-text">{pd.description}</p>
     <a href={pd.loc} target='_blank' class="btn btn-secondary">Click to See</a>
   </div>
 </div>)
})}


        </div>
     
       
       </div>
       
    ) 
  }

