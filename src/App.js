import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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


import { Switch, Route, Link,Redirect, useHistory } from "react-router-dom";
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { NotExist } from './NotExist';
import { ShowMovies } from './ShowMovies';
import { Welcome } from './Welcome';
import { GetColor } from './GetColor';

 function App() {

  
  const [name,setname] = useState("");
  const [poster,setposter] = useState("");
  const [year,setyear] = useState("");
  const [genre,setgenre] = useState("");
  const [summary,setsummary] = useState("");
  const [imdb,setimdb] = useState("");
  const [trailer,settrailer] = useState("");

  const [movielist ,setmovielist]=useState([ {
       name: "Toy Story 3",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNWM2YTFkODItNTAyZC00ZGYwLTkwYmMtMDZlODc2MTViYjI4XkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg",
      summary:
        "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
      year: "2021",
      genre: ["Animation,Comedy"],
      imdb: "8.2",
      trailer:"https://www.youtube.com/embed/ZZv1vki4ou4"
    },
    {
      name: "Venom",
      poster:
        "https://c4.wallpaperflare.com/wallpaper/266/85/309/venom-wallpaper-preview.jpg",
      summary:
        "A reporter battles a mad scientist in a fight for his life merging with a snarking alien symbiote that gives him remarkable superpowers",
      year: "2018",
      genre:["Superhero"],
      imdb: "6.7",
      trailer:"https://www.youtube.com/embed/dzxFdtWmjto"
    },
  ]);

  //for nav bar using material design
  const pages = ['Welcome', 'show movies', 'add movie', 'color game'];
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

  return (
      <div>
        <div>
        <AppBar position="static" style={{background:"#212121"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            MOVIESS
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  {/* <Link to={"/"+page.split(' ').join('')} className='link'>{page}</Link> */}
                  <button onClick={()=>{history2.push({page}.split(' ').join(''))}}> {page}</button>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={"/"+page.split(' ').join('')} className='link'>{page}</Link>
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
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

          <Route exact path="/">
            <Welcome/>
          </Route>
          
          {/* For broken or links that does not exist */}
          <Route path="**">
            <NotExist/>
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;

