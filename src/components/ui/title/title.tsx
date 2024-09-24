import { roboto } from '@/config/fonts';
import { TitleProps } from './title.interface';

export const Title: React.FC<TitleProps> = ({ title, classNameContainer, className }) => (
    <div className={`${classNameContainer}`}>
        <h1 className={`${roboto.className} ${className}`}>{title}</h1>
    </div>
);
