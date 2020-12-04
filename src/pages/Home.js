import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Title from '../components/Title';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Page() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Title>Home</Title>
      <Typography variant="body1" gutterBottom>Home </Typography>
     
      
    </React.Fragment>
  );
}


   