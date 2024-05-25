import { Header, WordleBoard } from '@/components';
export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center '>
            <Header />
            <WordleBoard />
        </div>
    );
}
