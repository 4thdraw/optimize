import React , { useEffect } from 'react';
import { Paginationdiv, Paginationdot } from './ui/Textui';
import { Badges } from './ui/Ui';

import './App.css';

function App() {

  useEffect(()=>{
    // 화면이 출력후 
     const btns = document?.querySelectorAll('.App .paginationdiv');
     console.log(btns.length);
     btns.forEach((btn, idx) => {
       btn.addEventListener('click', () => {
         btns.forEach((btn) => {
           btn.classList.remove('active');
         });
         btn.classList.add('active');
       })
     });
  }, [])

  return (
    <div className="App" >
        <h1>꼭 useState로 해야만 할까?????? </h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap: "1rem" }}>
          {[1, 2, 3, 4, 5].map((num, idx) => (
            <Paginationdiv key={idx} 
                className={num === 1 ? ' active  paginationdiv ' : ' paginationdiv '}>
              <Paginationdot >{num}</Paginationdot>
            </Paginationdiv>
          ))} 
        </div>     
      <Badges className='N'>50%</Badges>
      <Badges className='S'>50%</Badges>  
          
    </div>
  );
}

export default App;
