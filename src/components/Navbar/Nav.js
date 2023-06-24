import '../../css/styles.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

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
  
    const mapUrl = "https://www.google.com/maps/dir//%2740.7569206,-73.9933326%27";

    function Nav() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        const  myFunction = () => {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }
        return(
            <React.Fragment>
                <div
                    className='navs_tab'>
                        <div 
                            className='row'>
                                <div
                                    className='col-6'>
                                        <h2 
                                            className='logo_name'>
                                            Corvo Coffee
                                        </h2>
                                    </div>
                                <div
                                    className='col-6'>                                        
                                    <div 
                                        className="topnav" 
                                        id="myTopnav">
                                    <a 
                                        className="active"
                                        onClick={handleOpen}
                                        style={
                                            {
                                                cursor:"pointer",
                                            }
                                        }>
                                         <i 
                                            class="fa fa-envelope" 
                                                aria-hidden="true"
                                                    style={
                                                        {
                                                            padding:"5px"
                                                        }
                                                    }>

                                                </i>
                                            Contact us
                                            </a>

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
                                    <a 
                                        href={mapUrl}
                                        target={'_blank'}>
                                            <i 
                                                class="fa fa-chevron-circle-right" 
                                                    aria-hidden="true"
                                                        style={
                                                        {
                                                            padding:"5px"
                                                        }
                                                    }>

                                                    </i>
                                            Get Directions
                                            </a>
                                    <a 
                                        href="javascript:void(0);"
                                             className="icon" 
                                                onClick={myFunction}>
                                        <i 
                                            className="fa fa-bars">

                                            </i>
                                    </a>
                                    </div>

                                    </div>
                            </div>
                    </div>
            </React.Fragment>
        );
    }

export default Nav;