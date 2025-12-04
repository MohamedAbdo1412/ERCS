import React from 'react'
import { FaSearch ,FaRegUser,FaArrowRight  } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
export default function Search() {
    return (
        <div className='Hero-Container'>
            <div className='Hero Search'>
                <h2>If You Want To <h2>Search A Device States</h2></h2>
                <form className='Form parent' action="">
                    <div className="Input-Group div1">
                        <input type="text" placeholder='Enter Your Name ...' />
                        <FaRegUser />
                    </div>
                    <div className="Input-Group div2">
                        <input type="text" placeholder='Enter Your Email ...' />
                        <MdAlternateEmail />
                    </div>
                    <div className="Input-Group div3">
                        <input type="text" placeholder='Enter Device Id You Want To Search For ...' />
                        <FaSearch />
                    </div>
                    <button className='div4 search'>Search< FaArrowRight /></button>
                </form>
            </div>
        </div>
    )
}
