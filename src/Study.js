import { useRef, useState } from 'react';
const Study = () => {
    const buttonRef = useRef();
    const textarry =["열기", "닫기"];    

    const [btn, setBtn] = useState(0);    

    const handleClick = () => {
        setBtn((prevBtn) => (prevBtn + 1) % textarry.length);     
    };

    return (
        <div>
            <button ref={buttonRef} onClick={handleClick}>
                {textarry[btn]}
            </button>
        </div>
    );
};


export default Study;