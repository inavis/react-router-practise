import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

import ShareIcon from '@mui/icons-material/Share';

import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';




import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';



import { Switch, Route, Link,Redirect, useHistory } from "react-router-dom";
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { NotExist } from './NotExist';
import { ShowMovies } from './ShowMovies';
import { Welcome } from './Welcome';
import { GetColor } from './GetColor';

import { XOGAME } from './XOGAME';


import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { EditMovies,GetMovie } from './EditMovies';


import { Formik,useFormik } from 'formik';
import * as yup from 'yup';






const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const history= useHistory();
  
  const [name,setname] = useState("");
  const [poster,setposter] = useState("");
  const [year,setyear] = useState("");
  const [genre,setgenre] = useState("");
  const [summary,setsummary] = useState("");
  const [imdb,setimdb] = useState("");
  const [trailer,settrailer] = useState("");

  const [movielist ,setmovielist]=useState([]);


  //for nav bar using material design
  const pages = ['Welcome', 'show movies', 'add movie', 'color game', 'xo game'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const history2 = useHistory();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    // Or can use Box instead of Paper
    <Paper elevation={3}
      sx={{bgcolor: 'background.default', color: 'text.primary',minHeight:"300vh",borderRadius:"0px"}}
    >
      <div>
       
       <div>
       <AppBar position="static" style={{background:""}}>
            <Toolbar>
              <Button color="inherit" onClick={()=>{history.push("/Welcome")}}>Welcome</Button>
              <Button color="inherit" onClick={()=>{history.push("/addmovie")}}>Add Movie</Button>
              <Button color="inherit" onClick={()=>{history.push("/ShowMovies")}}>Show Movies</Button>
              <Button color="inherit" onClick={()=>{history.push("/colorgame")}}>Color Game</Button>
              <Button color="inherit" onClick={()=>{history.push("/xogame")}}>Tic-tac-toe</Button>
              <Button onClick={colorMode.toggleColorMode} color="inherit">{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}  {theme.palette.mode} </Button>
              <Button color="inherit" onClick={()=>{history.push("/basicform")}}>Basic form</Button>
            </Toolbar>
        </AppBar>
       </div>
   
 
       {/*
           A <Switch> looks through all its children <Route>
           elements and renders the first one whose path
           matches the current URL. Use a <Switch> any time
           you have multiple routes, but you want only one
           of them to render at a time
         */}
       <Switch>
         {/* Each route is case, eg. - case '/about': */}
         <Route path="/showfilms">
           <Redirect to="/ShowMovies"/>
         </Route>

         <Route path="/Welcome">
           <Welcome/>
         </Route>
         <Route path="/colorgame">
           <GetColor />
         </Route>
         <Route path="/addmovie">
           {/* Match url display the below component */}
           <AddMovie  
             name={name}
             setname={setname}
             poster={poster}
             setposter={setposter}
             year ={year}
             setyear ={setyear}
             genre ={genre}
             setgenre={setgenre}
             summary ={summary}
             setsummary={setsummary}
             imdb ={imdb}
             setimdb={setimdb}
             trailer={trailer}
             settrailer={settrailer}
             movielist ={movielist}
             setmovielist={setmovielist}
           />
         </Route>
         <Route path="/ShowMovies">
           <ShowMovies
             movielist={movielist}
             setmovielist = {setmovielist}
             />
         </Route>

         <Route path="/movies/:id">
           <MovieDetails/>
         </Route>

         <Route path="/EditMovies/:id">
           <GetMovie/>
         </Route>

         <Route path="/xogame">
           <XOGAME/>
         </Route>

         <Route path="/basicform">
           <BasicForm/>
         </Route>

         <Route exact path="/">
           <Welcome/>
         </Route>
         
         {/* For broken or links that does not exist */}
         <Route path="**">
           <NotExist/>
         </Route>
       </Switch>
     </div>
   
    </Paper>
  );
}




//FORM  VALIDATION

// const validateForm= (values)=>{
//   console.log("onValidate values",values);

//   //if any error it will be added
//   const errors = {};


//   //validate length of email
//   if(values.email.length<5){
//     errors.email="Please provide longer email"
//   }

//   //if email is in correct pattern
//   if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//     errors.email="Invalid email address"
//   }

//   //password of length 8 to 12
//   if(values.password.length<8  ){
//     errors.password="Password should be minimum 8 characters"
//   }
//   else if(values.password.length>12){
//     errors.password="Password should be maximum 12 characters"
//   }
  
//   console.log(errors)

//   return errors;
// }

const validateForm =yup.object({
  email:yup.string().min(5).
                matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"not of required pattern")
                .required("It is mandatory field"),
  password:yup.string().min(8,"Should have longer password")
                    .max(12,"should have smaller passwords")
                    .required("It is mandatory field")
})
function BasicForm(){

//   const formik = useFormik({
//     initialValues:{email:"abc@xyz.com",password:"iji"},
//     validate:validateForm,
//     onSubmit:(values) =>{
//       console.log("On submit value",values)
//     }
// })

//  changed by applying destructuring
  const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
      initialValues:{email:"abc@xyz.com",password:"iji"},
      validationSchema:validateForm,
      onSubmit:(values) =>{
        console.log("On submit value",values)
      }
  })
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter email'
            id='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        {/* {formik.errors.email} */}
        
        {/* touched is linked with onBlur propery so once touched becomes true and error is there it will display error */}
        {touched.email && errors.email ? errors.email :""}

        <input type="password" placeholder='Enter password'
            id='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        {touched.password && errors.password ? errors.password :""}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export  function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

 function App() {

  
  return (

    <div> <ToggleColorMode/></div>
    
  );
}

export default App;


