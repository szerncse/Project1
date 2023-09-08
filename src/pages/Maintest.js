import React, { useState } from 'react'
import Mainlist from '../Data/Mainlist';
import { styled } from 'styled-components';



function Maintest() {

    const [currentPage, setCurrentPage] = useState(1);

  return (
 
    <>
        

    <div className='h-[180px] bg-[#D3C09D]'></div>
    <div className='w-full bg-white mt-[60px] relative'>  
      <div className=' text-white max-w-[1400px] h-[1024px] m-auto
      text-[32px] font-bold'>
        <div className='flex justify-between'>
        <div className=''></div></div>



        <div className="review-page">
          <div className="review-content">
          {
               Mainlist.filter(item => item.group <= currentPage).map((e,i)=>{
                return (
                <div className="content-item" key={i}>
                   <p>puripuri</p>
                    <img src={e.img} alt="1"/>
                      <a href="/">
                      <i className="fa-solid fa-heart" ></i>
                      <i className="fa-regular fa-message"></i>
                      <i className="fa-solid fa-feather-pointed"></i>
                      <i className="fa-regular fa-bookmark"></i>
                      <br/>{e.Text}</a>
                    </div>
                      )
                   })
          }
          </div> 
         
    
          <div className="foot">
            <div className="foot-wrap">
              <button onClick={()=>{setCurrentPage(currentPage+1)}}>더보기 +</button>
            </div>
          </div>
      
        </div>
      </div>
    </div>
    
    <div className="page">
      <div className="poto">
          <div className="poto-review">
              <img src="images/1.PNG" alt="1"/>
          </div>
          <div className="poto-name">
              <p>이름: 냥이</p><br/>
              <p>나이: 15개월</p><br/>
              <p>품종: 스코티쉬폴드</p><br/>
              <p>성별: 여</p>
          </div>
      </div>
    </div>
    
    
        </>
    


  )
}

export default Maintest