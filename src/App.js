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

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

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
    
  );
}

export default App;

function XOGAME(){
  const { width, height } = useWindowSize()

  // initially all 9 boxes have null values
  const [board,setboard] =useState([null,null,null,null,null,null,null,null,null]);

  // isxtrun to see whose turn is it x or o
  const [isxturn,setisxturn]=useState(true);

  //when box is clicked from null to x or o based on ixturn value
  const handleClick = (index) =>{
    console.log(index);
    
    //initially box values null ==> so can change to x or o
    //with index values we track which box has which value
    //after that use should not be able to change
    if(board[index]===null && (winner===null || winner===undefined)){ //if someone won the game cannot play further
      const copy=[...board];
    copy[index]= isxturn?"X":"O";
    setboard(copy);
    console.log("setting boiard",board)
    setisxturn(!isxturn);
    }
  };


  //function to decide WINNER
  const decidewinner = board =>{
    //getting all lines which decides the winner
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
  ];
    for(let i=0;i<lines.length;i++){
      const [a,b,c]=lines[i]; //instead of nested loop , destructuring it
      //a b c are just indexses of winning lines
      // console.log(a,b,c)
      // console.log(board[a],board[b],board[c])

      //initially all values are null so to filter it we have a condition
    
      if((board[a])===(board[b]) && (board[b])===(board[c]) && (board[c])===(board[a])){
        console.log(a,b,c)
      console.log(board[a],board[b],board[c])
        if(board[a]==="X" || board[a]==="O"){
          return board[a]
        }else{
          return null
        }
        // return board[a]
      }
    }
  }

  const isdraw = board =>{
    
       const values= board.filter((val)=> val===null);
       console.log("values",values.length)
     if(winner!=="X" || winner!=="O"){
      if(values.length===0 ){
        return true
      }else{
        return null
      }
     
     }
      
  }


 const winner = decidewinner(board);
 console.log("winner",winner)
 console.log("boiard",board)
const draw = isdraw(board);
console.log("draw",draw)

const confeti = (winner)?<Confetti width={width} height={height} gravity={0.07} numberOfPieces={100}/>:"";
const winnerannounce = (winner)?<h1>The winner is {winner}</h1>:"";
const drawannounce = (winner)?"":(draw)?<h1>The match ended in DRAW</h1>:"";

const player = (winner)?"":(draw)?"":(isxturn)?<h2>X's turn</h2>:<h2>O's turn</h2>;

const [visible,setvisible]=useState(true);
const style1=(visible)?{display:"block"}:{display:"none"};
const style2=(visible)?{display:"none"}:{display:"block"};

  return(


      <div style={{color:"white"},{textAlign:"center"}}className='gamebg'>
      {confeti}
      <br></br>
      <div className='choosePlayer' style={style1}>
         <div><h3>Who is the first player</h3></div>
         <button onClick={()=>{setisxturn(true); setvisible(false);}}>X</button>
         <button  onClick={()=>{setisxturn(false); setvisible(false);}}>O</button>
      </div>

      <div>
        {winnerannounce}
      </div>
      <div>
        {drawannounce}
      </div>
      
     <div className='gameArea' style={style2}>
       <div style={{width:"15%"},{float:"right"}}>
         <button onClick={()=>{
           setboard([null,null,null,null,null,null,null,null,null])
           setvisible(true);
         }}>RESTART GAME</button>
       </div>
       <br></br>
     <div>{player}</div>
        <div className='board'>
          {
            //with index we will find which boox is clicked
            board.map((val,index)=>(
              <GameBox val={val} onPlayerClick={()=>handleClick(index)} />
            ))
          }
          
          </div>
     </div>
      <br/>
    </div>
 
  )
}

function GameBox({val,onPlayerClick}){
  const style1=(val==="X")?{color:"red"}:{color:"blue"}
  return(
    <div>
      <div className='gamebox' style={style1} onClick={onPlayerClick}>
      {val}
    </div>
    </div>
  )

}