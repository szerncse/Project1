import React, { useEffect, useState } from 'react'
import Mainlist from '../Data/Mainlist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import Detaillist from '../Data/Detaillist';
import Nav from '../component/Nav';




function Maintest() {

  // const [review , setReview] = useState(Mainlist); 
  //데이터 가져올떄 사용
  const [currentPage, setCurrentPage] = useState(1);


  const [one, setOne] = useState(null);


  const [modalOpen, setModalOpen] = useState(false);

  const [review2, setReview2] = useState(Detaillist);
  const [review, setReview] = useState(Mainlist);


  return (
    <>

      <Nav />

      <div className="w-[100%] bg-white mt-[60px] relative">
        <div className="max-w-[1400px] h-[1024px] my-0 mx-auto">
          <div className="max-w-[1280px] my-0 mx-auto">
            <div className="flex text-[15px] gap-y-5 gap-[6px] flex-wrap justify-between mb-[30px]">
              {
                Mainlist.filter(item => item.group <= currentPage).map((e, i) => {
                  return (

                    <div className="relative border border-[#f1f1ef] w-[310px] h-[480px] shadow-[4px_4px_4px_-4px_rgb(119, 112, 112)] rounded-[20px]" key={i}>
                      <ul className='flex w-[250px] justify-between my-0 mx-auto pt-5'>
                        <li><img className='w-[25px] h-[25px]' src="./../images/camera.svg" alt="camera" /></li>
                        <li><p className='text-[16px] title mt-[2px]'>PURIPURI STORY</p></li>
                        <li><img className='w-[27px] h-[27px]' src="./../images/airplane.svg" alt="aiplane" /></li>
                      </ul>
                      <div className="flex p-[15px]">
                        <img className='w-[40px] h-[40px]' src={e.rogo} alt="1" />
                        <div className="ml-[10px]">
                          <p className='font-bold text-[14px]'>PURI_PURI</p>
                          <p className='text-[13px]'>대구광역시</p>
                        </div>
                      </div>
                      <img onClick={() => { document.querySelector("html").classList.add("fixed")
                        setModalOpen(true);
                        setOne(i);
                      }} className='w-[310px] h-[220px]' src={e.img} alt="1" />
                      <div className="pl-[10px] pt-[10px] flex relative">
                        <FontAwesomeIcon icon={faHeart} color='#ff5b5b' className='w-[18px] h-[18px]' />
                        <img className='w-[18px] h-[18px] mx-[10px] ' src="./../images/chat.svg" alt="chat" />
                        <img className='w-[20px] h-[20px]' src="./../images/airplane.svg" alt="airplane" />
                        <img className='w-[20px] h-[20px] absolute right-[10px]' src="./../images/mark.svg" alt="airplane" />
                      </div>
                      <div className="flex my-[10px]">
                        <FontAwesomeIcon icon={faHeart} color='#ff5b5b' className='w-[15px] h-[15px] ml-5 mt-[3px]' />
                        <p className='text-[12px] ml-[10px] mt-[1px]'>PURI_PURI 님 외 여러 명이 좋아합니다 </p>
                      </div>
                      <div className="text-[13px] ml-[20px]">
                        <p className='font-bold'>PURI_PURI</p>
                        <p className='mb-[3px] text-ellipsis whitespace-nowrap overflow-hidden'>우리 가족에게 새로운 가족 구성원이 더해졌어요! 🐾❤️</p>
                      </div>
                      <p className='text-[13px] font-[500] text-[#164682] ml-5'>{e.Text}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className="mx-auto w-[160px]">
              <button onClick={() => { setCurrentPage(currentPage + 1) }} className='bg-[#D3C09D] text-white w-[160px] h-[50px] my-[40px] '>더보기 +</button>
            </div>
          </div>
        </div>
      </div>




      {
        modalOpen &&
        <div>
          <div className="opacity-60 fixed left-2/4 top-2/4 w-full h-full bg-[#e6e6e6] p-[20%] -translate-x-2/4 -translate-y-2/4 "></div>
          <div className="relative">
            <div className="fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[900px] h-[500px] bg-white rounded-[20px]">
              {/* {one} */}

              <FontAwesomeIcon onClick={() => { setModalOpen(false); document.querySelector("html").classList.remove("fixed") }} icon={faXmark} className='hover:text-[pink] absolute w-[30px] h-[30px] right-[1%] top-[2%] z-40' />

              <div className="flex w-full h-full relative">
                <div style={{ backgroundImage: `url(${Mainlist[one].img})`, backgroundSize: "cover", backgroundPosition: "center", flexBasis: "55%", height: "100%", margin: 0 }} className='rounded-tl-[20px] rounded-l-[20px]'></div>
                {/* <img src={Mainlist[one].img} className='w-[500px] h-[500px]' alt="review_img"/> */}
                {/* <div className='basis-[45%]'>
                <p >{review2[one].Name}</p>
                <p >{review2[one].story}</p> 
                </div> */}
                <div className="w-10 h-10 overflow-hidden ml-[10px] mt-[30px] mr-[10px]">
                  {
                    <img src={review[one].rogo} alt="로고" />
                  }
                </div>
                <div className=" w-1/2 pr-[40px] ">
                  <div className=" mt-[30px] mb-[10px] flex">
                    <div className="">
                      <p className='text-[14px] font-bold'>PURI_PURI</p>
                      <p className='text-[13px]'>우리 가족에게 새로운 가족 구성원이 더해졌어요! 🐾❤️</p>
                    </div>
                  </div>
                  <div className="">
                    <p>{review2[one].story}</p>
                  </div>
                  <div className="absolute bottom-[25px] w-[370px] border-t-2 pt-[10px]">
                    <div className="flex justify-between mb-[10px]">
                      <ul className="flex">
                        <li><FontAwesomeIcon icon={faHeart} color='#ff5b5b' className='w-[18px] h-[18px]' /></li>
                        <li><img className='w-[18px] h-[18px] mx-[10px] mt-1 ' src="./../images/chat.svg" alt="chat" /></li>
                        <li><img className='w-[20px] h-[20px] mt-1' src="./../images/airplane.svg" alt="airplane" /></li>
                      </ul>
                      <ul>
                        <li><img className='w-[20px] h-[20px]' src="./../images/mark.svg" alt="airplane" /></li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex items-center">
                        <li className='mr-[7px]'><img className='w-5 h-5' src="./../images/human.svg" alt="사람" /></li>
                        <li className='flex items-center'><span className='text-[12px]'>PURI_PURI님 외 여러 명이 좋아합니다 </span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default Maintest