import React, { useState } from 'react';
import Link from 'next/link';
import logo from '../public/cvd-logo.svg';

function NavBar() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header className='bg-white'>
      <div className='flex flex-wrap items-center justify-between p-4 md:p-8'>
        <Link  href='/'>
          <img className='flex cursor-pointer items-center no-underline text-white' src={logo} alt='virus and written app name' />
        </Link>

        <button
          className='block md:hidden flex items-center px-3 py-2 text-white'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='34'
            height='34'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path
              d='M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z'
              fill='rgba(78,46,65,1)'
            />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto  justify-end`}
        >

          <Link href="/">
            <a href="" className="block hover:underline md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-lg text-gray-500 hover:text-gray-900">
              Statistiques
            </a>
          </Link>

          <Link href="/informations">
            <a href="/informations" className="block hover:underline md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-lg text-gray-500 hover:text-gray-900">
              Informations
            </a>
          </Link>

          <Link

            href="/contact"
          >
            <a href="/contact" className="block w-full px-5 py-3 text-center m-4 font-medium text-white bg-teal-600 hover:bg-teal-500 rounded focus:outline-none focus:bg-teal-100 focus:text-teal-700 transition duration-150 ease-in-out">
              Contacts
            </a>
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default NavBar;
