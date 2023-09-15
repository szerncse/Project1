import React, { useState } from 'react'
import './../Main.css';
import Mainlist from '../Data/Mainlist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark, faMessage, faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import {  faHeart, faPaw, faXmark } from '@fortawesome/free-solid-svg-icons';
import Detaillist from '../Data/Detaillist';




function Main() {
  
  // const [review , setReview] = useState(Mainlist); 
  //데이터 가져올떄 사용
  const [currentPage, setCurrentPage] = useState(1);


const [one, setOne] = useState(null);

const [review , setReview] = useState(false);
const [modalOpen, setModalOpen] = useState(false);

const [review2 , setReview2] = useState(Detaillist);  


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
            <div className="content-item " key={i}>
              <ul>
                <li><img src="images/camera.jpg" alt="카메라" /></li>
                {/* <li><span>instagram</span></li> */}
                <li><span>PURIPURI STORY</span></li>
                {/* <li><img src="images/instagram.jpg" alt="카메라" /></li> */}
                <FontAwesomeIcon icon="fa-solid fa-camera" />
                <li><FontAwesomeIcon icon={faPaperPlane} /></li>
              </ul>
               <p><img src={e.rogo} alt="1"/>Puripuri</p>
                <img onClick={()=>{
                  setModalOpen(true);
                  setOne(i);
                }} src={e.img} alt="1"/>
                  <a href="/">
                  <FontAwesomeIcon icon={faHeart} color='red' />
                  <FontAwesomeIcon className='faMessage' icon={faMessage} />
                  <FontAwesomeIcon className='faPaperPlane' icon={faPaperPlane} />
                  <FontAwesomeIcon className='faBookmark' icon={faBookmark} />

                  <br/></a>{e.Text}
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

{
  modalOpen &&
  <div className="page">
<div className="page-wrap"></div>
  <div className="poto">
    {/* {one} */}
    <button onClick={()=>{
      setModalOpen(false)
    }}><FontAwesomeIcon icon={faXmark} /></button>
      <>
      <div className="poto-review">    
      
          <img src={Mainlist[one].img} alt="1"/>
      </div>
      <div className="poto-name">
          <p>{review2[one].Name}</p><br/>
          <p>{review2[one].story}</p> 
      </div>
      </>
    

  </div>
</div>

}



    </>

  )
}

export default Main