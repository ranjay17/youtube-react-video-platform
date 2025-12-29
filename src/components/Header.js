import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  const handleSidebar = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
        onClick={handleSidebar}
        className='h-8'
          alt="side-logo"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
        className='h-8'
          alt="logo"
          src="https://tse2.mm.bing.net/th/id/OIP.nIcfLYESEiAWbolDoo2GXQHaEK?pid=Api&P=0&h=180"
        />
      </div>
      <div className='col-span-10 ml-20'>
        <input type="text" className='w-1/2 border border-black rounded-l-full px-5 py-1' />
        <button className='border border-black rounded-r-full px-5 py-1 bg-gray-400'>Search</button>
      </div>
      <div className='col-span-1'>
        <img
        className='h-8'
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"
        />
      </div>
    </div>
  );
}

export default Header
