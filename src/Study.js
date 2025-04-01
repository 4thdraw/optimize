import { useRef, useEffect } from 'react';
import './btn.scss'

const Study = () => {
    const buttonRef = useRef();   

   useEffect(() => {
    const button = buttonRef.current; 
 
    const handleButtonClick = () => {
        button.classList.toggle('on');
    };

    button.addEventListener('click', handleButtonClick);

            return () => {
                button.removeEventListener('click', handleButtonClick);
            };
    }, []); // [] 1회진행   

    return (
        <div>
            <button ref={buttonRef} className='btn'>                
            </button>
        </div>
    );
};


export default Study;