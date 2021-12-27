import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory, useParams } from "react-router-dom";
import { useState,useEffect } from 'react';

export function EditMovies() {

   

    const [movielist,setmovielist] = useState([])

          
    const [name,setname] = useState("");
    const [poster,setposter] = useState("");
    const [year,setyear] = useState("");
    const [genre,setgenre] = useState("");
    const [summary,setsummary] = useState("");
    const [imdb,setimdb] = useState("");
    const [trailer,settrailer] = useState("");


    const history = useHistory();
    const { id } = useParams();

    let getmovies =() => {
        console.log("use Effect");
        fetch(`https://61c4136bf1af4a0017d99289.mockapi.io/movies/${id}`,{
          method:"GET"
        })
        .then((data)=>data.json())
        .then((movies)=>{
            setmovielist(movies);
            setname(movies.name);
            setposter(movies.poster)
            setyear(movies.year)
            setgenre(movies.genre)
            setsummary(movies.summary)
            setimdb(movies.imdb)
            settrailer(movies.trailer)
        })
      }
    
      useEffect(getmovies,[]);

      const updatemovie =() =>{
        const newMovie ={
          name,
          poster,
          year,
          genre,
          summary,
          imdb,
          trailer
        };
        fetch(`https://61c4136bf1af4a0017d99289.mockapi.io/movies/${movielist.id}`,{
          method:"PUT",
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
            <TextField id="filled-basic" className="textbox" label="Movie Name" variant="filled" value={name} onChange={(event) => setname(event.target.value)}/>
          </div>
          <br></br>
          <div>
            <TextField id="filled-basic" className="textbox" label="Poster URL" variant="filled" value={poster} onChange={(event) => setposter(event.target.value)}/>
          </div>
          <br></br>
          <div>
            <TextField id="filled-basic" className="textbox" label="Release year" variant="filled" value={year} onChange={(event) => setyear(event.target.value)} />
          </div>
          <br></br>
          <div>
            <TextField id="filled-basic" className="textbox" label="Genre" variant="filled" value={genre} onChange={(event) => setgenre(event.target.value)} />
          </div>
          <br></br>
          <div>
            <TextField id="filled-basic" className="textbox" label="IMDB rating" variant="filled" value={imdb} onChange={(event) => setimdb(event.target.value)} />
          </div>
          <br></br>
          <div>
            <TextField id="filled-basic" className="textbox" label="Movie Summary" variant="filled"  value={summary } onChange={(event) => setsummary(event.target.value)}/>
            <br></br>
          </div>
          <div>
            <br></br>
            <TextField id="filled-basic" className="textbox" label="Movie Trailer  embed url" variant="filled" value={trailer}  onChange={(event) => settrailer(event.target.value)}/>
            <br></br>
          </div>
          <div>
            <br></br>
            <Button variant="contained" onClick={() => {
    
              // setmovielist([...movielist, { name: name, poster: poster, year: year, genre: genre, summary: summary, imdb: imdb, trailer: trailer }]);
              // history.push("/ShowMovies");
              updatemovie();
            }}>update details</Button>
            <br></br>
          </div>
          <br></br>
        </div>
    
    
      );
}
