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
import Effect from './pages/Effect';
import Dialog from './pages/Dialog';
import UseContext from './pages/UseContext';
import Forms from './pages/UseContext';

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
        <Template><Effect/></Template>
      </Route>
      
      <Route path="/useContext" exact >
        <Template><UseContext/></Template>
      </Route>

      <Route path="/Forms" exact >
        <Template><Forms/></Template>
      </Route>

      <Route path="/Dialog" exact >
        <Template><Dialog/></Template>
      </Route>



    </Switch>
  )}
  





export default App