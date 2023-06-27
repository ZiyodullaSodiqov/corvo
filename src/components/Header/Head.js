import '../../css/styles.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import FounderImage from './IMG_7252.JPG';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


    const Head = () =>{
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        return(
            <React.Fragment>
                <div 
                    className='container'>
                        <div 
                            className='row resHXr4'>
                                <div className='col-6'>
                                        <img
                                            className="rounded mx-auto d-block noworkingImage"
                                            src={FounderImage}
                                            alt={'Founder'}
                                            style={{
                                                width:"600px",
                                                marginTop:"60px",
                                        
                                            }}
                                            />
                                </div>
                                <div
                                    className='col-6'>
                                        <div 
                                            className="transformY6">
                                            <h1
                                                className='text_center'>
                                                HUSEIN ATTAR
                                            </h1>
                                            <p
                                                style={{
                                                    textAlign:"center",
                                                    fontFamily:" 'Slabo 27px', serif",
                                                }}>
                                                Shop in Uzbekistan
                                                 <br/>
                                                Open today until 7:00 PM
                                            </p>
                                        </div>
                                        <div 
                                            className="d-grid gap-2 col-2 mx-auto trY3">
                                            <Button 
                                                onClick={handleOpen}
                                                className="btn-change">
                                                    CONTACT US
                                                </Button>

                                                <Modal
                                                open={open}
                                                
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                    CONTACT US
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    <TextField id="standard-basic" label="Name" variant="standard" />
                                                    <TextField id="standard-basic" label="Phone number" variant="standard" />
                                                    <TextField id="standard-basic" label="Email " required variant="standard" />
                                                    <TextField id="standard-basic" label="How can we help you?" variant="standard" />
                                                    <Stack direction="row" spacing={2}>
                                                    <Button variant="contained" endIcon={<SendIcon />} id='btn-down' onClick={handleClose}>
                                                        Submit
                                                    </Button>
                                                    </Stack>
                                                </Typography>
                                                </Box>
                                            </Modal>
                                            </div>
                                    </div>

                            </div>
                    </div>
            </React.Fragment>
        )
    }

export default Head;