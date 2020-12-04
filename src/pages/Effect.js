import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Title from '../components/Title';


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
    <Title>useEffect</Title>

      
    </React.Fragment>
  );
}


   