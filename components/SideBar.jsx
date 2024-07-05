import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import SubcriptionCard from './dashboard/SubcriptionCard';

const SideBar = () => {
    return (
        <div className='w-56 bg-slate-900 flex flex-col justify-between text-slate-50 min-h-screen'>

            <div className='flex flex-col'>
                <div className='flex bg-slate-950 py-3 px-2'>
                    <ShoppingCart /><span className='ml-2'>Inventory</span>
                </div>

                <nav className='flex flex-col'>
                    <Link className='flex px-2 py-3 items-center' href='/'><Home className='w-4 h-4'/><span className='ml-2'>Home</span></Link>
                    <button className='flex px-2 py-3 items-center'>
                        <BaggageClaim className='w-4 h-4'/>
                        <span className='ml-2'>Inventory</span>
                    </button>
                    <button className='flex px-2 py-3 items-center'>
                        <ShoppingBasket className='w-4 h-4'/>
                        <span className='ml-2'>Sales</span>
                    </button>
                    <button className='flex px-2 py-3 items-center'>
                        <ShoppingBag className='w-4 h-4'/>
                        <span className='ml-2'>Purchases</span>
                    </button>
                    <Link className='flex px-2 py-3 items-center' href='/'><Cable className='w-4 h-4'/><span className='ml-2'>Integrations</span></Link>
                    <Link className='flex px-2 py-3 items-center' href='/'><BarChart4 className='w-4 h-4'/><span className='ml-2'>Reports</span></Link>
                    <Link className='flex px-2 py-3 items-center' href='/'><Files className='w-4 h-4'/><span className='ml-2'>Documents</span></Link>
                </nav>
                <SubcriptionCard/>
            </div>
            <div className='bg-slate-950 flex items-center justify-center'>
                <ChevronLeft />
            </div>
        </div>
    );
};

export default SideBar;