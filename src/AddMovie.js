import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";


import { Formik,useFormik } from 'formik';
import * as yup from 'yup';




// const validateForm= (values)=>{
//   console.log("onValidate values",values);

//   //if any error it will be added
//   const errors = {};

// if(values.name.length<5){
//   errors.name="Add more characters"
// }
// if(values.summary.length<5){
//   errors.summary="Add more characters"
// }
// if(values.genre.length<5){
//   errors.genre="Add more characters"
// }
  
//   console.log(errors)

//   return errors;
// }

const validateForm =yup.object({
  name:yup.string().min(5)
                .required("It is mandatory field"),
  poster:yup.string().url().required("It is mandatory field"),
  year:yup.number().required("It is mandatory field"),
  genre:yup.string().required("It is mandatory field"),
  summary:yup.string().max(100).required("It is mandatory field"),
  imdb:yup.number().required("It is mandatory field"),
  trailer:yup.string().url().required("It is mandatory field"),
})


export function AddMovie() {
  const history = useHistory();

  const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
    initialValues:{ name:"",  poster:"",  year:"", genre:"",  summary:"", 
                imdb:"",  trailer:""},
    // validate:validateForm,
    validationSchema:validateForm,
    onSubmit:(values) =>{
      console.log("On submit value",values)
    }
})

  const addmovie =() =>{
    console.log("add movie")
    const newMovie ={
      name:values.name,
      poster:values.poster,
      year:values.year,
      genre:values.genre,
      summary:values.summary,
      imdb:values.imdb,
      trailer:values.trailer
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

   <form onSubmit={handleSubmit}>
      <div className='form'>
      <br></br>
      <div className='formhead text-primary'>ADD MOVIE DETAILS</div>
      <div>
        <TextField id="filled-basic" className="textbox" label="Movie Name" variant="filled" id='name'
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
          
          if(errors.name===undefined && errors.poster===undefined&& errors.year===undefined &&
            errors.genre===undefined && errors.summary===undefined && errors.imdb===undefined && errors.trailer===undefined){
            addmovie();
          }
        }}>ADD MOVIE</Button>
        <br></br>
      </div>
      <br></br>
    </div>

   </form>

  );
}
