import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import React from 'react';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 mt-10 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <h1 className='self-center text-3xl font-bold text-white text-center lg:mr-10'>
        RMoveis
      </h1>
    </header>
  );
}

export default Header;
