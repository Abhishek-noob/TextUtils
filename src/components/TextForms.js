import React,{useState} from 'react'

export default function TextForms(props) {
    const handleOnChange = (event) =>{
        // console.log("on change")

        setText(event.target.value)
    }

    const handleUpClick = ()=>{
        // console.log("you have clicked" + text);
        let newtext= text.toUpperCase();
        setText(newtext);
        document.title="TextUtils: convert to uppercase"
    }
    const handleLowClick = ()=>{
        // console.log("you have clicked" + text);
        let newtext= text.toLowerCase();
        setText(newtext);
        document.title="TextUtils: convert to lowercase"
    }
    const clear = ()=>{
        // console.log("you have clicked" + text);
        setText("");
        document.title="TextUtils: clear"

    }

   const[text,setText] = useState('Enter Your Text Here');
   return (
       <>
<div>
<div className="container my-3" >
    <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
<textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
</div>
<button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button type="button" className="btn btn-secondary mx-1 my-1" onClick={clear}>Clear</button>
</div>
<div className="conatiner my-3">
    <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h1>
    <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").length} words and  {text.length} characters</p>
    <p className={`text-${props.mode==='light'?'dark':'light'}`}>{0.008*text.split(" ").length} Minutes Required To Read</p>
</div>
</>
    )
}
