export const ChartDuotone = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={40} height={36} viewBox='0 0 40 36' {...props}>
        <rect
            x={4.935}
            y={6}
            width={29.613}
            height={24}
            rx={2}
            className='fill-[#0000007d] dark:fill-white-50'
        />
        <path
            d='M13.161 15v9m6.581-6v6m6.581-12v12'
            className='stroke-white-50 dark:stroke-[#273B4A]'
            strokeWidth={1.2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
