import { makeStyles } from '@material-ui/core/styles';
import React,{useEffect,useState} from 'react';
import Title from '../components/Title';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBlockStart: '15px',
    padding: '10px'
  },
  
  paper: {
    margin: '5px'
  },
  
  container: {
    maxHeight: 440,
  },
  icon : {
    width: 25,
    height: 25,  
  },
  table: {
    "& th": {
      fontWeight: 'bold',
      backgroundColor: 'silver'
    }
  },
  link :{
    textDecoration: 'none'
  }
});

export default function Page() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Title>Dialog</Title>

    <Paper className={classes.root}>
    <Typography variant="body2" gutterBottom>
      <p><a className={classes.link} href="https://material-ui.com/components/dialogs/"> Material Ui Dialog</a></p>
      <p><b><a className={classes.link} href="https://github.com/ajcm/react-materialui-template/blob/main/src/pages/Dialog.js">View Code</a></b></p>   
      
    </Typography>
      <pre>{`
      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">

        <DialogTitle id="alert-dialog-title">{"Dialog"}</DialogTitle>
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          ....
          </DialogContentText>
        </DialogContent>
        
        <DialogActions>    
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
       `}</pre>

    </Paper>

    <Paper className={classes.root}> 
      <AlertDialog/>
    </Paper>
    </React.Fragment>
  );
}



export function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DialogWindow = () =>
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Dialog"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button  variant="contained" onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>   
      <DialogWindow />
    </div>
  );
}






   