import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//////////////////////////////////////////////////////
export function GetColor() {
  const [color, setcolor] = useState("white");
  const [colorlist, setcolorlist] = useState(["red", "blue"]);
  //console.log(colorlist)
  const style1 = { background: color };
  return (
    <div style={{ textAlign: "center", padding: "10px" }} className='form'>
      <div>
        <TextField id="filled-basic" color='primary' style={style1} className="textbox" label="Enter a color to be added" variant="filled" onChange={(event) => setcolor(event.target.value)} />
      </div>
      <Button variant="contained" color="primary" onClick={() => setcolorlist([...colorlist, color])}>ADD COLOUR</Button>

      {colorlist.map((color) => (

        <ColorRectange color={color} />
      ))}
    </div>

  );
}
function ColorRectange({ color }) {
  // console.log(color)
  const style = { height: "100px", width: "95%", margin: "15px", background: color };
  return (
    <div style={{ textAlign: "center" }}>
      <div style={style}></div>
    </div>
  );
}
