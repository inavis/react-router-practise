import * as React from 'react';
import Fab from '@mui/material/Fab';
import ClearIcon from '@mui/icons-material/Clear';
import { Movie } from "./Movie";

export function ShowMovies({ movielist, setmovielist }) {
  console.log("show movies-router");
  console.log(movielist);
  return (
    <div>
      <div>Movies</div>
      <div className='content'>
        {movielist.map(({ name, poster, summary, year, genre, imdb }, index) => (

          <Movie
            // Passing JSX along with other details
            deletebutton={<Fab color="error" aria-label="add" onClick={() => {
              const deleteindex = index;
              setmovielist(movielist.filter((mv, ind) => ind !== deleteindex));
            }}>
              <ClearIcon />
            </Fab>}

            name={name}

            poster={poster}

            summary={summary}

            year={year}

            genre={genre}

            imdb={imdb}

            index={index} />
        ))}
      </div>
    </div>
  );
}
