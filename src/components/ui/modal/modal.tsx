import { PropsWithChildren } from 'react';

export const Modal = ({ children }: PropsWithChildren) => (
    <dialog className='left-0 top-0 w-full h-full bg-[#F3F3F3E3] dark:bg-[#262B3CE3] z-50 flex justify-center items-center'>
        <div className='bg-[#F3F3F3] dark:bg-[#262B3C] m-auto px-5 w-[546px] rounded-2xl border dark:border-[#939B9F]'>
            {children}
        </div>
    </dialog>
);
