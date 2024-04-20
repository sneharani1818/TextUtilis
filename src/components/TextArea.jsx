import React, { useState } from 'react'

const TextArea = (props) => {

    const upperCaseText = () => {
        setText(text.toUpperCase());
    }

    const lowerCaseText = () => {
        setText(text.toLowerCase());
    }

    const changeText = (event) => {
        setText(event.target.value);
    }

    const countCharacters=(event)=>{
        console.log(text.length())
        // console.log(event.target.value.length())
    }

    const countWords=(event)=>{
        
    }

    const [text, setText] = useState("")
    const [ch, setNumOfChar] = useState(0)
    return (
        <div className='container'>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">{props.head}</label>
                <textarea className="form-control" onChange={changeText} id="exampleFormControlTextarea1" rows="10" value={text}></textarea>
            </div>
            <button className='btn btn-outline-primary m-2' onClick={upperCaseText}>Convert to Upper Case</button>
            <button className='btn btn-outline-primary m-2' onClick={lowerCaseText}>Convert to Lower Case</button>
            <button className='btn btn-outline-primary m-2' onClick={countCharacters}>Count characters</button>
            <button className='btn btn-outline-primary m-2' onClick={countWords}>Count words</button>
            <div id='Number of Characters'>
                {ch} Characters in the text.
            </div>
        </div>
    )
}

export default TextArea