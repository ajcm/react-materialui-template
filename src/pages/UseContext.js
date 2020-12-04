import React,{useEffect,useState,useContext,createContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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

  // const {session,setSession,user,setUser,menuOpen, setMenuOpen} = React.useContext(AppContext);


  return (
    <SharedContext.Provider value={{message, setMessage}}>
    <Paper className={classes.root}>
    <InputField/>    
    <OutputField/> 
    </Paper>
    </SharedContext.Provider>  
  );

}



const InputField = () => {
  const classes = useStyles();
  const {message, setMessage} = React.useContext(SharedContext);
  
  return (
      <p>Message: {message ? message : 'n/a'} </p>  
  );

}


const OutputField = () => {
  const classes = useStyles();
  const {message, setMessage} = React.useContext(SharedContext);
  
  return (
      <p>Message: {message ? message : 'n/a'} </p>  
  );

}




   