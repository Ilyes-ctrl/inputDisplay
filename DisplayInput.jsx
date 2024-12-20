import React, {useState} from 'react';
import './styles.css'

function DisplayInput(){
    const [enteredText, setEnteredText] = useState("");
    const [submittedText, setSubmittedText] = useState(null);

    const textChangeHandler = (e) => {
        setEnteredText(e.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setSubmittedText(enteredText)
        setEnteredText("");
    }
    

    return(
        <>
        <div className="one">
            <div className='title'>
                <h1>Display Input</h1>
            </div>

            <div className='two'>
                <div className='three'>
                    <div className='four'>
                        <input placeholder="Type your task" type="text" value={enteredText} onChange={textChangeHandler} />
                    </div>

                    <div className='four'>
                        <button className='weew' role='button' type="submit" onClick={submitHandler}>Add</button>
                    </div>
                </div>

                <div className='five'>
                    <p>You just typed: {submittedText}</p>
                </div>
            </div>
            
        </div>
        </>
    )
}


export default DisplayInput