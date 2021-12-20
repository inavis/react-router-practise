import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import ClearIcon from '@mui/icons-material/Clear';
import Chip from '@mui/material/Chip';

import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

import TextField from '@mui/material/TextField';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';



import { Switch, Route, Link } from "react-router-dom";

 function App() {

  
  const [name,setname] = useState("");
  const [poster,setposter] = useState("");
  const [year,setyear] = useState("");
  const [genre,setgenre] = useState("");
  const [summary,setsummary] = useState("");
  const [imdb,setimdb] = useState("");

  const [movielist ,setmovielist]=useState([ {
       name: "Toy Story 3",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNWM2YTFkODItNTAyZC00ZGYwLTkwYmMtMDZlODc2MTViYjI4XkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg",
      summary:
        "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
      year: "2021",
      genre: ["Animation,Comedy"],
      imdb: "8.2",
      
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
    },
  ]);

  //for nav bar using material design
  const pages = ['Welcome', 'show movies', 'add movie', 'color game'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
                  <Link to={"/"+page.split(' ').join('')} className='link'>{page}</Link>
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
        </Switch>
      </div>
    
  );
}

export default App;



function Home() {
  return (
    <div>
      <h2>Home, Welcome All!!!</h2>
      {/* <TableComp /> */}
    </div>
  );
}

function AddMovie({name,setname,poster,setposter,year,setyear,genre,setgenre,summary,setsummary,imdb,setimdb,movielist,setmovielist}) {
  return (
     
      <div   className='form'>
      <br></br>
      <div className='formhead text-primary'>ADD MOVIE DETAILS</div>
        <div>
        <TextField id="filled-basic"  className="textbox" label="Movie Name" variant="filled" onChange={(event)=>setname(event.target.value)} />
        </div>
        <br></br>
        <div>
        <TextField id="filled-basic"  className="textbox" label="Poster URL" variant="filled"  onChange={(event)=>setposter(event.target.value)}/>
        </div>
        <br></br>
        <div> 
        <TextField id="filled-basic"    className="textbox" label="Release year" variant="filled"  onChange={(event)=>setyear(event.target.value)} />
        </div>
        <br></br>
        <div>
        <TextField id="filled-basic"    className="textbox"  label="Genre" variant="filled" onChange={(event)=>setgenre(event.target.value)} />
        </div>
        <br></br>
        <div>
        <TextField id="filled-basic"    className="textbox" label="IMDB rating" variant="filled" onChange={(event)=>setimdb(event.target.value)} />
        </div>
        <br></br>
        <div>
        <TextField id="filled-basic"   className="textbox" label="Movie Summary" variant="filled"  onChange={(event)=>setsummary(event.target.value)}/>
        <br></br>
        </div>
        <div>
          <br></br>
        <Button variant="contained"  onClick={()=>
        { 
          
          setmovielist([...movielist,{name:name,poster:poster,year:year,genre:genre,summary:summary,imdb:imdb}])}
  
        }>ADD MOVIE</Button>
        <br></br>
        </div>
        <br></br>
     </div>

       
  );
}

function ShowMovies({movielist,setmovielist}) {
  console.log("show movies-router");
console.log(movielist)
  return (
   <div>
     <div>Movies</div>
     <div className='content'>
      {
    
     movielist.map(({ name, poster, summary, year, genre, imdb },index)=>(
  
      <Movie
      // Passing JSX along with other details

      deletebutton = {
        <Fab color="error" aria-label="add" onClick={()=>{
          const deleteindex=index;
          setmovielist(movielist.filter((mv,ind)=>ind!==deleteindex))
        }}>
                <ClearIcon/>
        </Fab>
      }

      name={name}

      poster={poster}

      summary={summary}

      year={year}

      genre={genre}

      imdb={imdb}

     
    />
     ))

   }
    </div>
   </div>
  );
}


function Welcome() {
 // alert("welcome")
  return (
    <div style={{color:"white"}}>
      <h1>Welcome to Movie Website</h1>
    </div>
  );
}

function Movie({deletebutton, name, poster, summary, year, genre, imdb}) {

    //style for summary display:none/block
    const [show,setshow] = useState(false);
    const summarystyle = {display:show?"block":"none"}
    const summaryhead = (show)?(<span>Summary <ExpandLessIcon/></span>):(<span>Summary <ExpandMoreIcon/></span>);
  
    //variable for likes
    const [likes,setlikes] = useState(0);

  return (
    <Card sx={{ width: 300 ,backgroundColor:"#212121" ,color:"white"}}>
      <CardContent>
        <Typography style={{textAlign:"center"}}>
          {<h3>{name}</h3>}
        </Typography>
      </CardContent>

      {/* uses chip to display year,genre,imdb */}
      <CardContent>
      <Stack direction="row" spacing={1}>
          <Chip label={year} color="primary" variant="outlined" />
          <Chip label={genre} color="primary" variant="outlined" />
          <Chip label={"⭐"+imdb} color="success" variant="outlined" />
        </Stack>
      </CardContent>
      
      {/* display the movie poster using CardMedia */}
      <CardMedia
        component="img"
        height="300"
        image={poster}
        alt={name}
      />
    
        {/* Display summary when button is clicked */}
        <CardContent>
          {/* <Typography paragraph onClick={()=>{setshow(!show);}}>Summary <ExpandMoreIcon/></Typography> */}
         <div style={{textAlign:"center"}}>
         <Button variant="outlined" onClick={()=>{setshow(!show);}}>{summaryhead} </Button>
         </div>
           <br></br>
          <Typography paragraph style={summarystyle}>
            {summary} 
          </Typography>
          
        </CardContent>
    
  
        {/* //have 2 buttons-delete(movie gets deleted) and like(shows count with bagde) with tooltip */}
  <CardContent>
  <div className='material-head'>
            <div>
            <Tooltip title="delete movie" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                {deletebutton }
            </Tooltip>
            </div>
            <div>
            <Tooltip title="Like Movie">
              <Fab color="error" aria-label="like"  onClick={()=>setlikes(likes+1)} >
                  <Badge color="primary" badgeContent={likes} max={30}>
                      <FavoriteBorderIcon/>
                  </Badge>      
                </Fab>
            </Tooltip>
            
            </div>
          </div>
  </CardContent>
       
    </Card>
  );
 }

 //////////////////////////////////////////////////////

 function GetColor(){
  const [color,setcolor]=useState("white");
  const [colorlist,setcolorlist] = useState(["red","blue"])
  //console.log(colorlist)
  const style1={background:color}
  return (
      <div style={{textAlign:"center",padding:"10px"}} className='form'>
        <div>
        <TextField id="filled-basic" color='primary' style={style1} className="textbox" label="Enter a color to be added" variant="filled" onChange={(event) =>setcolor(event.target.value)}/>
        </div>
        <Button variant="contained" color="primary" onClick={()=>setcolorlist([...colorlist,color])}>ADD COLOUR</Button>

        {
            colorlist.map((color)=>(
                
              <ColorRectange color={color}/>
            ))
        }
      </div>
      
    );
}

function ColorRectange({color}){
// console.log(color)
  const style = {height:"100px",width:"95%",margin:"15px",background:color}
  return(
      <div style={{textAlign:"center"}}>
        <div style={style}></div>
      </div>
  )
}