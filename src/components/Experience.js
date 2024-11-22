import React,{useState,useEffect} from 'react'
import { experienceData } from '../Data/data'
import {Card} from 'react-bootstrap';
function Experience() {
const [experience,setExperience]=useState([]);
useEffect(()=>{
setExperience(experienceData);
},[])
    return (
       <div className='cardscontainer'>
         
        {experience.map((exp)=>(
             <Card style={{ width: '50rem'}}>
             <Card.Body className='experience-bg'>
               <Card.Title>{exp.Company}</Card.Title>
               <Card.Subtitle className="text-muted">{exp.Position}</Card.Subtitle>
               <Card.Subtitle className="mt-1 mb-1 text-muted">{exp.Duration}</Card.Subtitle>
               <Card.Text>
                <ul>
                {exp.Description.map((desc)=>(
                    <li style={{color:"green",fontWeight:"bold" }}>{desc}</li>
                ))}
                </ul>
              
               </Card.Text>
          
             </Card.Body>
             
       <Card.Footer>
        {exp.Technologies.map((tech)=>(
            <span key={tech} className='span-skills'>{`${tech}`}</span>
        )) }
       </Card.Footer>
             
         
           </Card>
        )

        )}


       </div>
    )
}

export default Experience