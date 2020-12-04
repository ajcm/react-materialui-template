import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Title from '../components/Title';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  root: {
  '& a' :{
    textDecoration: 'none'
  }
}
}));

export default function Page() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Title>Home</Title>
      <Typography variant="body2" gutterBottom>
        <div className={classes.root}>
        <p><a href="https://reactjs.org/docs/hello-world.html"> React: Tutorial </a></p>
        <p><a href="https://reactjs.org/docs/hooks-reference.html"> React: Hooks Reference </a></p>
        <p><a href="https://reactjs.org/docs/accessibility.html"> React: Advanced Guide</a></p>
        <br/>

        <p><a href="https://material-ui.com/components/box/"> Material UI: Components </a></p>
        <p><a href="https://material-ui.com/components/material-icons/"> Material UI: Icons </a></p>
        <p><a href="https://material-ui.com/components/typography/"> Material UI: Typography </a></p>
        </div>
      </Typography>
      
    </React.Fragment>
  );
}


   