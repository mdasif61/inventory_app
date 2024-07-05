import SideBar from '@/components/SideBar';
import Header from '@/components/dashboard/Header';
import React from 'react';

const BackOfficeLayout = ({ children }) => {
    return (
        <div className='flex'>
            <SideBar/>
            <main className='bg-slate-100 w-full min-h-screen'>
                <Header/>
                {children}
            </main>
        </div>
    );
};

export default BackOfficeLayout;