import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from 'lucide-react';
import React from 'react';
import userImg from '@/public/user.jpg'
import SearchInput from './SearchInput';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='bg-gray-200 shadow-md flex items-center justify-between px-8 h-12'>
            <div className="flex items-center justify-center gap-3">
                <History className='h-6 w-6'/>
                <SearchInput/>
            </div>
            <div className="flex items-center">
                <div className=' border-gray-400 pr-2 border-r'>
                    <button className='rounded-lg bg-blue-600 p-1'>
                        <Plus className='text-white w-4 h-4'/>
                    </button>
                </div>
                <div className='border-gray-400 space-x-2 border-r'>
                    <button className=' hover:bg-slate-300 p-1'>
                        <Users className='text-slate-900 w-4 h-4'/>
                    </button>
                    <button className=' hover:bg-slate-300 p-1'>
                        <Bell className='text-slate-900 w-4 h-4'/>
                    </button>
                    <button className=' hover:bg-slate-300 p-1'>
                        <Settings className='text-slate-900 w-4 h-4'/>
                    </button>
                </div>

                <div className='flex items-center gap-3 ml-2'>
                    <button className='flex items-center'><span>Garat</span> <ChevronDown className='w-4 h-4'/></button>

                    <button className='border border-slate-400 rounded-full'>
                        <Image className='w-9 h-9 rounded-full' width={1536} height={2048} src={userImg} alt='user image'/>
                    </button>
                    <button>
                       <LayoutGrid/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Header;