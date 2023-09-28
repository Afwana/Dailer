import './App.css';
import { useState } from 'react';
import { Button, Box, Modal, Typography } from '@mui/material';

const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, };

function App() {
  const [dailNumber, setDailNumber] = useState([])
  const [open, setOpen] = useState(false)

  const handleCall = (e) => {
    setDailNumber([...dailNumber, e])
  }

  const handleCallPopup = () => {
    if (dailNumber.length === 10) {
      setOpen(true)
    }
    else {
      alert("Invalid Number")
    }
  }

  const handleReset = () => {
    setDailNumber([])
  }

  const handleClose = () => setOpen(false)

  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh', background:'url(https://tse3.explicit.bing.net/th?id=OIP.1mSOXtWoyWszqALw1koEVQHaE7&pid=Api&P=0&h=220)',backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
      <div className="p-4 rounded shadow" style={{ width: '500px',backgroundColor:'#FACDAE',height:'95vh'}}>
        <nav className='navbar navbar-expand-lg d-flex justify-content-between shadow' style={{ backgroundColor: 'transparent' }}>
          <div>
            <h6 className='ms-3'><i class="fa-solid fa-signal"></i></h6>
          </div>
          <div className='d-flex justify-content-between me-3'>
            <h6 className='me-2'> 09.45 AM</h6>
            <h6><i class="fa-solid fa-battery-full"></i></h6>
          </div>
        </nav>
        <div className='display-dail w-100 d-flex flex-column justify-content-center align-items-center bg-light rounded shadow text-dark mt-2' style={{ height: '100px' }}>
          <div className='d-flex'>
            {dailNumber.map((e, index) => (<h2 className='me-1' key={index}> {e} </h2>))}
          </div>
        </div>
        <div className='mt-4 d-flex flex-column justify-content-between' >
          <div className='row'>
            <div className="col-4 btn">
              <Button variant="text" value={1} onClick={() => handleCall(1)}><h3 style={{ color: 'black' }}>1</h3></Button>
            </div>
            <div className="col-4 btn">
              <Button variant="text" value={2} onClick={() => handleCall(2)}><h3 style={{ color: 'black' }}>2</h3></Button>
            </div>
            <div className="col-4 btn">
              <Button variant="text" value={3} onClick={() => handleCall(3)}><h3 style={{ color: 'black' }}>3</h3></Button>
            </div>
          </div>
          <div className='row mt-4'>
            <div className="col-4 btn">
              <Button variant="text" value={4} onClick={() => handleCall(4)}><h3 style={{ color: 'black' }}>4</h3 ></Button>
            </div>
            <div className="col-4 btn">
              <Button variant="text" value={5} onClick={() => handleCall(5)}><h3 style={{ color: 'black' }}>5</h3></Button>
            </div>
            <div className="col-4 btn">
              <Button variant="text" value={6} onClick={() => handleCall(6)}><h3 style={{ color: 'black' }}>6</h3></Button>
            </div>
          </div>
          <div className='row mt-4'>
            <div className="col-4 btn">
              <Button variant="text" value={7} onClick={() => handleCall(7)}><h3 style={{ color: 'black' }}>7</h3></Button>
            </div>
            <div className="col-4 btn">
              <Button variant="text" value={8} onClick={() => handleCall(8)}><h3 style={{ color: 'black' }}>8</h3></Button>
            </div>
            <div className="col-4 btn">
              <Button variant="text" value={9} onClick={() => handleCall(9)}><h3 style={{ color: 'black' }}>9</h3></Button>
            </div>
          </div>
          <div className='row mt-4'>
            <div className="col-4 btn">
              <Button variant="text" value={0} onClick={() => handleCall(0)}><h3 style={{ color: 'black' }}>*</h3></Button>
            </div>
            <div className="col-4 btn">
              <Button variant="text" value={0} onClick={() => handleCall(0)}><h3 style={{ color: 'black' }}>0</h3></Button>
            </div>
            <div className="col-4 btn">
              <Button variant="text" value={0} onClick={() => handleCall(0)}><h3 style={{ color: 'black' }}>#</h3></Button>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center p-3 rounded mt-3'>
          <button className='btn btn-outline-dark shadow me-5' onClick={handleReset}>
            <img style={{ width: '50px' }} src="https://cdn0.iconfinder.com/data/icons/messenger/154/call-cancel-phone-function-exit-over-512.png" alt="Calling" />
          </button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {dailNumber} <br /> 
                Calling....
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <button className='btn btn-outline-danger shadow mt-3' onClick={handleClose} style={{marginLeft:'120px'}}>
                  <img style={{ width: '50px' }} src="https://icon-library.com/images/end-call-icon/end-call-icon-8.jpg" alt="Calling" />
                </button>
              </Typography>
            </Box>
          </Modal>
          <button className='btn btn-outline-success shadow ms-5' onClick={handleCallPopup}>
            <img style={{ width: '50px' }} src="https://cdn0.iconfinder.com/data/icons/phone-call-3/400/Calls-06-512.png" alt="Calling" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
