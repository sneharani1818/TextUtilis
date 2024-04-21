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


    const [text, setText] = useState("")

  return (
    <div className='container'>
        <textarea className="form-control" onChange={changeText} id="exampleFormControlTextarea1" rows="10" value={text}>{props.heading}</textarea>
        <button className='btn btn-outline-primary m-2' onClick={upperCaseText}>Convert to Upper Case</button>
        <button className='btn btn-outline-primary m-2' onClick={lowerCaseText}>Convert to Lower Case</button>
    </div>
  )
}

export default TextForm