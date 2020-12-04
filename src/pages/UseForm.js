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
    <Title>Form</Title>

    <Paper className={classes.root}>
    <Typography variant="body2" gutterBottom>
      <p><a className={classes.link} href="https://material-ui.com/components/text-fields/"> Material Forms</a></p>    
      <p><b><a className={classes.link} href="https://github.com/ajcm/react-materialui-template/blob/main/src/pages/UseForm.js">View Code</a></b></p>        
    </Typography>

<pre>
{`
    
`}
</pre>
    </Paper>

    <Paper className={classes.root}> 
      <Example/>
    </Paper>

      
    </React.Fragment>
  );
}



export function Example() {
 

  return (
    <div>
      <Button variant="outlined" color="primary">
        Open alert dialog
      </Button>   
     
    </div>
  );
}






   