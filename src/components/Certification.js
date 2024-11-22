import React,{useState} from 'react'

import flask from '../images/flask.jpg'
import ml from '../images/ml.jpg';
import ds from '../images/ds.jpg';
import rea from '../images/react.jpg'
import agile from '../images/agile.jpg'
import CertificateModals from './CertificateModals';
import kub from '../images/kub.jpg';
import spring from '../images/spring.jpg';
import cloud from '../images/cloud.jpg'
function Certification() {
const [imgs,setImgs]=useState('');
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return (
        <div style={{marginTop:'4em'}}>
            <h3 className="pageheading1">CERTIFICATIONS</h3>
            <br/>
        <div className="cardscontainer">
        <img src={kub} alt="" className="cards"onClick={()=>{setImgs(kub);handleShow();}}/>
        <img src={rea} alt="" className="cards" onClick={()=>{setImgs(rea);handleShow();}}/>
            <img src={ml} alt="" className="cards"  onClick={()=>{setImgs(ml);handleShow();} }/>
            <img src={spring} alt="" className="cards" onClick={()=>{setImgs(spring);handleShow();}}/>
            <img src={ds} alt="" className="cards" onClick={()=>{setImgs(ds);handleShow();}}/>
            
            <img src={flask} alt="" className="cards"onClick={()=>{setImgs(flask);handleShow();}}/>
            <img src={agile} alt=""className="cards" onClick={()=>{setImgs(agile);handleShow();}}/>
            <img src={cloud} alt="" className="cards" onClick={()=>{setImgs(cloud);handleShow();}}/>
        </div>
  <CertificateModals imgs={imgs} show={show} handleClose={handleClose}/>
  </div>


       
    )
}

export default Certification
