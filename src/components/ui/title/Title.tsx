import { roboto } from '@/config/fonts';

interface Props {
    title: string;
    className?: string;
    classNameContainer?: string;
}

export const Title = ({ title, classNameContainer, className }: Props) => {
    return (
        <div className={`${classNameContainer}`}>
            <h1 className={`${roboto.className} ${className}`}>{title}</h1>
        </div>
    );
};
