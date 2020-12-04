import { makeStyles } from '@material-ui/core/styles';
import React,{useEffect,useState} from 'react';
import Title from '../components/Title';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    <Title>useEffect</Title>
        
    <Paper className={classes.root}>
    <Typography variant="body2" gutterBottom>
      <p><a className={classes.link} href="https://reactjs.org/docs/hooks-reference.html#usestate"> useState documentation </a></p>
      <p><a className={classes.link} href="https://reactjs.org/docs/hooks-reference.html#useeffect"> useEffect documentation</a></p>
      <p><b><a className={classes.link} href="https://github.com/ajcm/react-materialui-template/blob/main/src/pages/UseEffect.js">View Code</a></b></p>      
    </Typography>

<pre>
{`
  const [state, setState] = useState();

  useEffect(() => {
    /* do things */

    /* for async code, needs to call another function */

    /* function to be called in unmount */ 
    return () => unmount(); 
  }); 


`}
        </pre>

    </Paper>
    <Example/>      
    </React.Fragment>
  );
}

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference = +new Date(`${year}-12-31`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};


/* https://github.com/do-community/react-hooks-timer/blob/master/src/App.js */
function Example() {
  const classes = useStyles();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

      // Clear timeout if the component is unmounted
      /* function to be called in unmount */ 
      /* return () => clearTimeout(timer); */

  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <Paper className={classes.root}>
      New Year's Eve Counter: {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </Paper>
  );
}




   