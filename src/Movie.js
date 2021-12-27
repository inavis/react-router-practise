import { useState } from 'react';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import Chip from '@mui/material/Chip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";


export function Movie({ deletebutton, name, poster, summary, year, genre, imdb, id }) {

  //style for summary display:none/block
  const [show, setshow] = useState(false);
  const summarystyle = { display: show ? "block" : "none" };
  const summaryhead = (show) ? (<span> <ExpandLessIcon /></span>) : (<span> <ExpandMoreIcon /></span>);

  //variable for likes
  const [likes, setlikes] = useState(0);

  const history = useHistory();

  return (
    <Card sx={{ width: 300}}>
   
        <Typography >
          <div style={{display:"flex",flexDirection:"row"}}>
          <div style={{width:"75%",margin:"1%",textAlign:"center",paddingTop:"5px"}}>
          {<h3>{name}</h3>}
          </div>
          <div style={{width:"25%",margin:"1%",textAlign:"center",paddingTop:"5px"}}>
          <Button  color="primary" aria-label="edit movie details"  onClick={(e) => {
            history.push(`/EditMovies/${id}`);
          }}><EditIcon/></Button>
          </div>
          </div>
        </Typography>

 

      {/* uses chip to display year,genre,imdb */}
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Chip label={year} color="primary" variant="outlined" />
          <Chip label={genre} color="primary" variant="outlined" />
          <Chip label={"⭐" + imdb} color="success" variant="outlined" />
        </Stack>
      </CardContent>

      {/* display the movie poster using CardMedia */}
      <CardMedia
        component="img"
        height="300"
        image={poster}
        alt={name} />



      {/* Display summary when button is clicked */}
      <CardContent>
        {/* <Typography paragraph onClick={()=>{setshow(!show);}}>Summary <ExpandMoreIcon/></Typography> */}
       <div style={{display:"flex",flexDirection:"row"}}>
       <div style={{width:"50%",margin:"1%",textAlign:"center",paddingTop:"5px"}}>
          <Button color="primary" aria-label="show movie summary"  onClick={() => { setshow(!show); }}>
            {summaryhead}
          </Button>
        </div>
        <div style={{width:"50%",margin:"1%",textAlign:"center",paddingTop:"5px"}}>
          <Button color="primary" aria-label="show movie details"  onClick={(e) => {
            history.push(`/movies/${id}`);
          }}>
            <InfoIcon />
          </Button>
          </div>
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
              {deletebutton}
            </Tooltip>
          </div>
          <div>
            <Tooltip title="Like Movie">
              <Fab color="error" aria-label="like" onClick={() => setlikes(likes + 1)}>
                <Badge color="primary" badgeContent={likes} max={30}>
                  <FavoriteBorderIcon />
                </Badge>
              </Fab>
            </Tooltip>

          </div>
        </div>
      </CardContent>

    </Card>
  );
}
