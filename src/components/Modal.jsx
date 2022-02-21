import React, { useRef, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const show = isOpen ? 'block' : 'hidden';
  const urlRef = useRef("");

  const submitHandler = () => console.log("foo")

  return (
    <>
      {/* Overlay */}
      <div onClick={() => setIsOpen(false) } className={` z-20 bg-gray-800 opacity-80 w-full h-full top-0 left-0 absolute  ${show}`} >
      </div>
      <div className=" flex justify-center ">
        <div className=" absolute top-14 flex justify-center flex-col items-center sm:top-10">

          {/* Button */}
          <div className=" z-40 ">
            <div onClick={() => setIsOpen(!isOpen)} className=" bg-grey h-14 w-14 rounded-full border-dashed border-4 border-cheesyYellow flex justify-center items-center text-2xl transition-all duration-200 transform hover:scale-105  cursor-pointer  ">
                <i className="fas fa-pizza-slice text-offWhite hover:text-accent "></i>
            </div>
          </div>

          {/* Content Container */}
          <div className={` z-20 bg-darkestGrey relative -top-5 rounded-2xl border-2 px-4 pt-14 pb-8 border-offWhite shadow-2xl flex  flex-col justify-center items-center font-roboto text-offWhite ${show}` }>
            {/* Heading */}
            <div className="flex flex-col justify-center items-center mb-5 ">
                <h1 className="text-3xl">HOT SAUCE</h1>
                <h2 className="text-lg text-lightGrey ">Find the hottest Open Source projects.</h2>
            </div>
            <input ref={urlRef} type="text" placeholder='ex: https://github.com/open-sauced/hot' className=' w-full bg-gray-200 border-[1px] h-[34px] mr-[10px]  outline-secondary px-2 rounded-md border-green-500 ' />
              <div className=' flex items-center cursor-pointer  uppercase bg-secondary px-2 rounded-md text-white transition duration-350 ease-in-out hover:bg-green-600 ' >
                <FontAwesomeIcon icon={faMagnifyingGlass} className=" mr-[5px]  font-normal text-[14px] " />
                <button  onClick={submitHandler} className="  "  >Submit</button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Modal;
