import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory, useParams } from "react-router-dom";

export function MovieDetails({ movielist }) {
  const history = useHistory();
  const { id } = useParams();
  // let find = movielist.filter((ele,ind)=>(ind==id))  //here use find[0].details
  let find = movielist[id];
  console.log(movielist[id]);
  // or can have movielist[{id}] in a simple way as array index is same as 
  // console.log(find[0].trailer)
  return (

    <div className='movieDetails'>
      {/* <div><h2 >Details of movie {id}</h2></div> */}
      <div style={{ textAlign: "center" }}>
        <iframe
          width="99%"
          height="500"
          src={find.trailer}
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">

        </iframe>
      </div>
      <div><span style={{ float: "left" }, { padding: "20px" }}>{find.name}</span> <span style={{ float: "right" }, { padding: "20px" }}>{"⭐" + find.imdb}</span></div>
      <br></br><br></br>
      <div>{find.summary}</div>
      <br></br>
      <div>
        <Button variant="outlined" color="error" startIcon={<ArrowBackIosIcon />} onClick={() => { history.goBack(); }}>
          Back
        </Button>
      </div>
      <br></br>
    </div>
  );
}
