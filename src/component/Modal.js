import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import personimg from '../Images/personimg.png'

function Modalone() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
        <button style={{background:'none', border:'none', color:"blue"}}  onClick={() => setLgShow(true)}>Read More</button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Imran Ali Khan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-6">
                <img src={personimg} alt="" />
                </div>
                <div className="col-6">
                <h5 class="card-title">Imran Ali Khan</h5>
          <h6 class="card-subtitle mb-2 text-muted">CEO, EMPG</h6>
          <h6 class="card-subtitle mb-2 text-muted">Board member</h6>
          <p class="card-text">Imran Ali Khan is the CEO of EMPG. Before stepping into the digital classifieds industry, Imran worked for such prestigious organizations as Goldman Sachs, and Deloitte, the largest professional services network in the world, along with pursuing his ACA qualification. He is a graduate of the University of Oxford, from where he acquired his Bachelors and Masters in Engineering and Computer Sciences.</p>
          
                </div>

            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// render(<Example />);
export default Modalone