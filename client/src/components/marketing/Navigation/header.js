import styled from 'styled-components';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Link from 'next/link';

import FlyoutMenu from './flyoutMenu';
import MobileMenu from './mobileMenu';

const StyledLink = styled.div`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  font-size: 1.1rem;
  font-weight: 800;

  &:before {
    content: '';
    margin-bottom: -5px;
    position: absolute;
    width: 0;
    height: 6px;
    bottom: 0;
    left: 0;
    background-color: red;
    visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
    transition: all 0.3s ease-in-out;
    width: ${(props) => (props.active ? '100%' : '0')};
  }

  &:hover {
    &:before {
      visibility: visible;
      width: 100%;
    }
  }
`;

const Header = () => {
  const ref = useRef();
  const refMobile = useRef();
  const router = useRouter();
  const [menu, toggleMenu] = useState(false);
  const [mobileMenu, toggleMobileMenu] = useState(false);

  const mobileMenuHandler = () => (mobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true));

  const menuHandler = () => (menu ? toggleMenu(false) : toggleMenu(true));

  useOutsideClick(ref, () => toggleMenu(false));
  useOutsideClick(refMobile, () => toggleMobileMenu(false));

  return (
    <div className='relative bg-white'>
      <div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
        {/*Logo*/}
        <div className='lg:w-0 lg:flex-1'>
          <Link href='/'>
            <img
              className='cursor-pointer h-8 w-auto sm:h-10'
              src='/logo/small_logo.svg'
              alt='Logo'
            />
          </Link>
        </div>
        {/*Mobile menu icon*/}
        <div ref={refMobile} className='-mr-2 -my-2 md:hidden'>
          <button
            onClick={mobileMenuHandler}
            type='button'
            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
          >
            <img className='w-10 h-10' src='/icons/menu.svg' alt='menu' />
          </button>
         
          {mobileMenu ? <MobileMenu mobileMenuHandler={mobileMenuHandler} /> : null}
        </div>

        <nav className='hidden md:flex space-x-10'>
          <div ref={ref} className='relative'>
            {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->*/}
            {/* <button
              onClick={menuHandler}
              type='button'
              className={`group text-gray-500 inline-flex items-center 
                        space-x-2 text-base leading-6 font-medium
                        hover:text-gray-900 focus:outline-none focus:text-gray-900 
                        transition ease-in-out duration-150'`}
            >
              <span>Students</span>
              <img
                className={`text-gray-400 h-5 w-5 group-hover:text-gray-500
                            group-focus:text-gray-500 
                            transition ease-in-out duration-150`}
                src='/icons/chevron-down.svg'
                alt='down arrow'
              />
            </button> */}
            <div>
              {menu ? (
                <div className='FadeInUp'>
                  <FlyoutMenu />
                </div>
              ) : null}
            </div>
          </div>

          {/* <Link href='/pricing'>
            <StyledLink active={router.pathname == '/pricing' ? true : false}>Projects</StyledLink>
          </Link>*/
          <Link href='/app/dashboard'>
            <StyledLink active={router.pathname == '/app' ? true : false}>Student Board</StyledLink>
          </Link>}
        </nav>

        <div className='hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0'>
          <span className='inline-flex rounded-md shadow-sm'>
            {/* <Link href='/'>
              <div className='cursor-pointer whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'>
                Sign-In
              </div>
            </Link> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
