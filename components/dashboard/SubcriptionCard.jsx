
import Link from 'next/link';
import React from 'react';

const SubcriptionCard = () => {
    return (
        <div className='p-4'>
            <div className='bg-slate-950 rounded-lg'>
                <div className='p-2 border-b border-b-slate-500'>
                    <p className='text-xs pl-2 border-l-2 border-orange-500'>Your Premium plan's trial expires in <span className='text-orange-500'>13 days</span></p>
                </div>
                <div className='flex text-sm justify-evenly items-center'>
                    <button className='border-r pr-1 border-slate-500'>Change Plan</button>
                    <Link href='#'>Upgrade</Link>
                </div>
            </div>
        </div>
    );
};

export default SubcriptionCard;