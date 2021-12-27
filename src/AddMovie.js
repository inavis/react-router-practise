import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";

export function AddMovie({ name, setname, poster, setposter, year, setyear, genre, setgenre, summary, setsummary, imdb, setimdb, trailer, settrailer, movielist, setmovielist }) {
  const history = useHistory();

  const addmovie =() =>{
    const newMovie ={
      name,
      poster,
      year,
      genre,
      summary,
      imdb,
      trailer
    };
    fetch(`https://61c4136bf1af4a0017d99289.mockapi.io/movies/`,{
      method:"POST",
      body: JSON.stringify(newMovie),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((data)=>data.json())
    .then(()=>history.push("/ShowMovies"))
  }

  return (

    <div className='form'>
      <br></br>
      <div className='formhead text-primary'>ADD MOVIE DETAILS</div>
      <div>
        <TextField id="filled-basic" className="textbox" label="Movie Name" variant="filled" onChange={(event) => setname(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Poster URL" variant="filled" onChange={(event) => setposter(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Release year" variant="filled" onChange={(event) => setyear(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Genre" variant="filled" onChange={(event) => setgenre(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="IMDB rating" variant="filled" onChange={(event) => setimdb(event.target.value)} />
      </div>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Movie Summary" variant="filled" onChange={(event) => setsummary(event.target.value)} />
        <br></br>
      </div>
      <div>
        <br></br>
        <TextField id="filled-basic" className="textbox" label="Movie Trailer  embed url" variant="filled" onChange={(event) => settrailer(event.target.value)} />
        <br></br>
      </div>
      <div>
        <br></br>
        <Button variant="contained" onClick={() => {

          // setmovielist([...movielist, { name: name, poster: poster, year: year, genre: genre, summary: summary, imdb: imdb, trailer: trailer }]);
          // history.push("/ShowMovies");
          addmovie();
        }}>ADD MOVIE</Button>
        <br></br>
      </div>
      <br></br>
    </div>


  );
}
