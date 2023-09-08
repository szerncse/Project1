import React, { useState } from 'react'
import './../Main.css';
import Mainlist from '../Data/Mainlist';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark, faMessage} from "@fortawesome/free-regular-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons';






function Main() {
  
  // const [review , setReview] = useState(Mainlist); 
  //데이터 가져올떄 사용
  const [currentPage, setCurrentPage] = useState(1);

  
  return (
    <>
        

<div className="heard"></div>
<div className="review">  
  <div className="review-wrap">
    <div className="title-area">
      <div className="title"></div>
    </div>
    <div className="review-page">
      <div className="review-content">
      {
           Mainlist.filter(item => item.group <= currentPage).map((e,i)=>{
            return (
            <div className="content-item" key={i}>
               <p><img src={e.rogo} alt="1"/>Puripuri</p>
                <img src={e.img} alt="1"/>
                  <a href="/">
                  <FontAwesomeIcon icon={faHeart} color='red' />
                  <FontAwesomeIcon className='faMessage' icon={faMessage} />
                  <FontAwesomeIcon className='faBookmark' icon={faBookmark} />

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

<div className="page-wrap"></div>
  <div className="poto">
      <div className="poto-review">
          <img src="images/1.PNG" alt="1"/>
      </div>
      <div className="poto-name">
          <p>이름: 냥이</p><br/>
          <p>나이: 15개월</p><br/>
          <p>품종: 스코티쉬폴드</p><br/>
          <p>성별: 여</p>
          {/* <p>보호소기관: 대구...</p> */}
      </div>
  </div>
</div>


    </>

  )
}

export default Main