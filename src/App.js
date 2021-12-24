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

  useEffect(()=>{
    console.log("use Effect");
    fetch("https://61c4136bf1af4a0017d99289.mockapi.io/movies",{
      method:"GET"
    })
    .then((data)=>data.json())
    .then((movies)=>setmovielist(movies))
  },[])

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
           <MovieDetails movielist={movielist}/>
         </Route>

         <Route path="/xogame">
           <XOGAME/>
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

