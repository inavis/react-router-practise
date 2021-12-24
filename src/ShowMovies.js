import * as React from 'react';
import Fab from '@mui/material/Fab';
import ClearIcon from '@mui/icons-material/Clear';
import { Movie } from "./Movie";
import { useHistory } from 'react-router-dom';

export function ShowMovies({ movielist, setmovielist }) {
  console.log("show movies-router");
  console.log(movielist);
  const history=useHistory();
  return (
    <div>
      <div>Movies</div>
      <div className='content'>
        {movielist.map(({id, name, poster, summary, year, genre, imdb }) => (

          <Movie
            // Passing JSX along with other details
            deletebutton={<Fab color="error" aria-label="add" onClick={() => {
              const deleteindex = id;
              // setmovielist(movielist.filter(({id}) => id !== deleteindex));
              fetch(`https://61c4136bf1af4a0017d99289.mockapi.io/movies/${deleteindex}`,{
                method:"DELETE"
                })
              .then((data)=>data.json())
              .then((movie)=>{
                 let arr= movielist.filter(({id})=>(id!==movie.id))
                 setmovielist(arr);
              })
            }}>
              <ClearIcon />
            </Fab>}

            name={name}

            poster={poster}

            summary={summary}

            year={year}

            genre={genre}

            imdb={imdb}

            id={id} />
        ))}
      </div>
    </div>
  );
}
