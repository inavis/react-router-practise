import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory, useParams } from "react-router-dom";
import { useState,useEffect } from 'react';


import { Formik,useFormik } from 'formik';
import * as yup from 'yup';

const validateForm =yup.object({
  name:yup.string().min(5)
                .required("It is mandatory field"),
  poster:yup.string().url().required("It is mandatory field"),
  year:yup.number().required("It is mandatory field"),
  genre:yup.string().required("It is mandatory field"),
  summary:yup.string().max(200).required("It is mandatory field"),
  imdb:yup.number().required("It is mandatory field"),
  trailer:yup.string().url().required("It is mandatory field"),
})

export function GetMovie(){
  
  const [moviefind,setmoviefind] = useState([])
  const { id } = useParams();

  
  let getmovies =() => {
    console.log("use Effect");
    fetch(`https://61c4136bf1af4a0017d99289.mockapi.io/movies/${id}`,{
      method:"GET"
    })
    .then((data)=>data.json())
    .then((movies)=>{
        setmoviefind(movies);
    })
  }
  console.log(moviefind)

  useEffect(getmovies,[]);

   //to prevent race condition
   //before getting the respective movie we cannot load form with undefined values
   return moviefind.name ? <EditMovies moviefind={moviefind}/> : ""

}



export function EditMovies({moviefind}) {

  const history = useHistory();

      const {name,poster,year,genre,summary,imdb,trailer} = moviefind;
      console.log("movies",name,poster,year,genre,summary,imdb,trailer)

      const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
        initialValues:{ name:name,  poster:poster,  
                year:year, genre:genre[0],  summary:summary, 
                    imdb:imdb,  trailer:trailer},
        // validate:validateForm,
        validationSchema:validateForm,
        onSubmit:(values) =>{
          console.log("On submit value",values)
        }
      })

      const updatemovie =() =>{
        const newMovie ={
          name:values.name,
          poster:values.poster,
          year:values.year,
          genre:values.genre,
          summary:values.summary,
          imdb:values.imdb,
          trailer:values.trailer
        };
        fetch(`https://61c4136bf1af4a0017d99289.mockapi.io/movies/${moviefind.id}`,{
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
<form onSubmit={handleSubmit}>
      <div className='form'>
      <br></br>
      <div className='formhead text-primary'>EDIT MOVIE DETAILS</div>
      <div>
        <TextField id="filled-basic" className="textbox" label="Movie Name"
         variant="filled" id='name'
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
        
         />
      </div>
      {console.log(touched.name,errors.name)}
      <div style={{color:"red",float:"left",marginLeft:"10%"}}>
          {touched.name && errors.name ? errors.name :""}
      </div>
      <br></br><br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Poster URL" variant="filled"id='poster'
            name='poster'
            value={values.poster}
            onChange={handleChange}
            onBlur={handleBlur}
          />
      </div>
      <div style={{color:"red",float:"left",marginLeft:"10%"}}>
          {touched.poster && errors.poster ? errors.poster :""}
      </div>
      <br></br>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Release year" variant="filled"  id='year'
            name='year'
            value={values.year}
            onChange={handleChange}
            onBlur={handleBlur}
         />
      </div>
      <div style={{color:"red",float:"left",marginLeft:"10%"}}>
          {touched.year && errors.year ? errors.year :""}
      </div>
      <br></br>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Genre" variant="filled" id='genre'
            name='genre'
            value={values.genre}
            onChange={handleChange}
            onBlur={handleBlur}
        />
      </div>
      <div style={{color:"red",float:"left",marginLeft:"10%"}}>
          {touched.genre && errors.genre ? errors.genre :""}
      </div>
      <br></br>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="IMDB rating" variant="filled"  id='imdb'
            name='imdb'
            value={values.imdb}
            onChange={handleChange}
            onBlur={handleBlur}
         />
      </div>
      <div style={{color:"red",float:"left",marginLeft:"10%"}}>
         {touched.imdb && errors.imdb ? errors.imdb :""}
      </div>
      <br></br>
      <br></br>
      <div>
        <TextField id="filled-basic" className="textbox" label="Movie Summary" variant="filled"  id='summary'
            name='summary'
            value={values.summary}
            onChange={handleChange}
            onBlur={handleBlur}
         />
        <br></br>
      </div>
      <div style={{color:"red",float:"left",marginLeft:"10%"}}>
          {touched.summary && errors.summary ? errors.summary :""}
      </div>
      <br></br>
      <div>
        <br></br>
        <TextField id="filled-basic" className="textbox" label="Movie Trailer  embed url" variant="filled" 
        id='trailer'
        name='trailer'
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
         />
        <br></br>
        <div style={{color:"red",float:"left",marginLeft:"10%"}}>
            {touched.trailer && errors.trailer ? errors.trailer :""}
      </div>
      <br></br>
      </div>
      <div>
        <br></br>
        <Button variant="contained" type='submit' onClick={() => {

          // setmovielist([...movielist, { name: name, poster: poster, year: year, genre: genre, summary: summary, imdb: imdb, trailer: trailer }]);
          // history.push("/ShowMovies");
          updatemovie();
        }}>UPDATE MOVIE DETAILS</Button>
        <br></br>
      </div>
      <br></br>
    </div>

   </form>

    
      );
}
