import React, {useState} from 'react'

const TextForm = (props) => {
    const upperCaseText = () => {
        setText(text.toUpperCase());
    }

    const lowerCaseText = () => {
        setText(text.toLowerCase());
    }
    const changeText = (event) => {
        setText(event.target.value);
    }
    const handleClearText=()=>{
        setText("");
    }
    const sentenceCaseText=()=>{
        let arr=text.split(" ");
        let temptext=""
        arr.forEach(element => {
            temptext+=element.charAt(0).toUpperCase()+element.substring(1).toLowerCase()+" "
        });
        setText(temptext);
    }
    const alternateCaseText=()=>{
        let arr=text.split('');
        let temptext="";
        arr.forEach((element,index) => {
            index%2==0?temptext+=element.toLowerCase():temptext+=element.toUpperCase()
        });
        setText(temptext);
    }

    const [text, setText] = useState("")

  return (
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" onChange={changeText} id="exampleFormControlTextarea1" rows="10" value={text} placeholder={props.head}></textarea>
        <button className='btn btn-outline-primary m-2' onClick={upperCaseText}>Convert to Upper Case</button>
        <button className='btn btn-outline-primary m-2' onClick={lowerCaseText}>Convert to Lower Case</button>
        <button className='btn btn-outline-primary m-2' onClick={handleClearText}>Clear text</button>
        <button className='btn btn-outline-primary m-2' onClick={sentenceCaseText}>Sentence case</button>
        <button className='btn btn-outline-primary m-2' onClick={alternateCaseText}>aLtErNaTeCaSe</button>
        <div className="container">
            <h2>Your text summary</h2>
            <p><span className="text-primary fw-bolder">{text.split(" ").length}</span> words and <span className="text-primary fw-bolder">{text.length}</span> characters</p>
            <p><span className="text-primary fw-bolder">{0.008*(text.split(" ").length)}</span>seconds minutes to read the text</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TextForm