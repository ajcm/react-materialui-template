import React,{useEffect,useState,useRef,forwardRef,useImperativeHandle} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

export default function Page() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Title>useRef</Title>
    <Typography variant="subtitle" gutterBottom>Reference to child</Typography>
        
    <Paper className={classes.root}>
    <Typography variant="body2" gutterBottom>
      <p><a className={classes.link} href="https://reactjs.org/docs/hooks-reference.html#useref"> useRef documentation</a></p>
      <p><b><a className={classes.link} href="https://github.com/ajcm/react-materialui-template/blob/main/src/pages/UseRef.js">View Code</a></b></p>    
    </Typography>
      <pre>
{`
  //create ref
  const childRef = useRef();
  < ... ref={childRef} >

  //use in child
  const Component = forwardRef((props, ref) => { 
    ...
  })
`}
      </pre>
    </Paper>
    <Example/>      
    </React.Fragment>
  );
}


function Example() {
  const classes = useStyles();

  const childRef = useRef();

  const doReset = () => {
    childRef.current.doAction('')
  }


  return (
      <Paper className={classes.root}>
      <ButtonField callback={doReset} />
      <InputField ref={childRef}/>    
      </Paper>
  );
}



const ButtonField = ({callback}) => {
  const classes = useStyles();

  const onClick = (event) => {
    

  }
  
  return (
      <p><Button variant="contained" color="primary"  component="span"  onClick={callback} style={{marginLeft:'15px'}}>Clear Text</Button></p>  
  );

}

const InputField = forwardRef((props, ref) => {
  const classes = useStyles();
  const [value,setValue] = useState()

  const onChange = (event) => {
    const _value = event.target.value;
    setValue(_value)
  }

  const onClick = (event) => {
    setValue('')
  }


  useImperativeHandle(ref, () => {
    return {
        doAction: (value) =>  setValue(value)
  }});
  
  return (
      <p><TextField id="standard-required" label="Type message:" defaultValue="" value={value ? value : ''}   onChange={onChange}  /></p>  
  );

})






   