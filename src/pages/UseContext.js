import React,{useEffect,useState,useContext,createContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Title from '../components/Title';

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

const SharedContext = createContext();

export default function Page() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Title>useContext</Title>
        
    <Paper className={classes.root}>
    <Typography variant="body2" gutterBottom>
      <p><a className={classes.link} href="https://reactjs.org/docs/hooks-reference.html#useContext"> useContext documentation </a></p>
      <p><b><a className={classes.link} href="https://github.com/ajcm/react-materialui-template/blob/main/src/pages/UseContext.js">View Code</a></b></p>    
    </Typography>
      <pre>
{`
  //create context
  const SharedContext = createContext();
  const [message, setMessage] = React.useState();

  //enclose tags
  <SharedContext.Provider value={{message, setMessage}}>
  ...
  </SharedContext.Provider> 

  //use in components
  const {message, setMessage} = React.useContext(SharedContext);
`}
      </pre>
    </Paper>
    <Example/>      
    </React.Fragment>
  );
}




function Example() {
  const classes = useStyles();
  const [message, setMessage] = React.useState();


  return (
    <SharedContext.Provider value={{message, setMessage}}>
      <Paper className={classes.root}>
      <InputField/>    
      <OutputField/> 
      <OutputField2/>
      </Paper>
    </SharedContext.Provider>  
  );
}


const InputField = () => {
  const classes = useStyles();
  const {message, setMessage} = React.useContext(SharedContext);

  const onChange = (event) => {
    const value = event.target.value;
    setMessage(value)

  }
  
  return (
      <p><TextField id="standard-required" label="Type message:" defaultValue="" value={message ? message : ''}   onChange={onChange}  /></p>  
  );

}


const OutputField = () => {
  const classes = useStyles();
  const {message, setMessage} = React.useContext(SharedContext);
  
  return (
      <p>Message: {message ? message : 'n/a'} </p>  
  );

}

const OutputField2 = () => {
  const classes = useStyles();
  const {message, setMessage} = React.useContext(SharedContext);
  
  return (
      <Typography variant="body2" gutterBottom style={{ backgroundColor: '#cfe8fc' }}>  <p>Message #2: {message ? message : 'n/a'} </p>  </Typography>
  ); 

}




   