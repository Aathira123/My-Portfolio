import React from 'react'
import {Modal,Button,Image} from 'react-bootstrap';
function CertificateModals({imgs,show,handleClose}) {
    return (
        <div>
            <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        
            <Image src={imgs} className="certimodal" />
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default CertificateModals
