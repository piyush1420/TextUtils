import React, {useState} from 'react'


export default function Textform(props) {

    
    const [text, setText]=useState("");
    const handleUpper=()=>{
      setText(text.toUpperCase());
      props.showAlert("Converted to Upper case","success"); 
    }
    
    return (
     
    < >
      <div style={ {  color:props.mode==='dark'?'white':'black'} }>
      <div className={ ` mb-3 `} >
            <h1>{props.heading}</h1>
            {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea  style={ { backgroundColor: props.mode==='dark'?'#03013f':'white',  color:props.mode==='dark'?'white':'black'} } placeholder={"Enter Text"} value={text} onChange={(event)=>{setText(event.target.value)}} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-3" onClick={handleUpper}>Convert text to upper case</button>
      <button type="button" className="btn btn-primary mx-3" onClick={()=>{setText(text.toLowerCase()); props.showAlert("Converted to Lower case","success"); }}>Convert text to lower case</button>
      <button type="button" className="btn btn-primary mx-3" onClick={()=>{setText('');}}>Clear text</button>
      
      <button type="button" className="btn btn-primary mx-3" onClick={()=>{const text=document.getElementById("exampleFormControlTextarea1"); if (text.value ===""){props.showAlert("Enter some text","warning")}navigator.clipboard.writeText(text.value) ; }} >Copy Text</button>

      <div>
        <h3 > Preview</h3>
          <p>
            {text.length>0?text:"Enter text to preview"} <br/>
            No. of words : {text.trim().length === 0 ? 0 : text.trim().split(" ").length} <br/>
            No. of chars : {text.length}<br/>
            No. of chars without space : {text.split(" ").join("").length} <br/>
            No. of sentences : {text.trim().split("\n").length === 0? 0: text.trim().split("\n").length}
          </p>

      </div>
      </div>
    </>
  );
}

