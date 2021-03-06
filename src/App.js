import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { CommonLoading } from 'react-loading';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContext } from '../src/context/AppContext';
import Template from './components/Template';
import theme from './theme';

import Home from './pages/Home';
import About from './pages/About';
import UseEffect from './pages/UseEffect';
import Dialog from './pages/Dialog';
import UseContext from './pages/UseContext';
import UseRef from './pages/UseRef';
import UseForm from './pages/UseForm';

const App = (props) => {
  const [menuOpen, setMenuOpen] = useState(true);

  if (props.isLoading) {
    return <CommonLoading />;
} else {
  return (
    <AppContext.Provider value={{menuOpen,setMenuOpen}}>
    <ThemeProvider theme={theme}>
    <CssBaseline />        
    <BrowserRouter>            
      <Routes />         
    </BrowserRouter>
    </ThemeProvider>
     </AppContext.Provider>
  );
}
}


const Routes = () => {
  return (
  <Switch>

     <Route path="/" exact >
        <Template><Home/></Template>
      </Route>

      <Route path="/about" exact >
        <Template><About/></Template>
      </Route>

      <Route path="/useEffect" exact >
        <Template><UseEffect/></Template>
      </Route>

      <Route path="/useRef" exact >
        <Template><UseRef/></Template>
      </Route>

      <Route path="/useContext" exact >
        <Template><UseContext/></Template>
      </Route>

      <Route path="/Form" exact >
        <Template><UseForm/></Template>
      </Route>

      <Route path="/Dialog" exact >
        <Template><Dialog/></Template>
      </Route>



    </Switch>
  )}
  





export default App