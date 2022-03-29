type Props = {
    text: string;
    clickFn: (txt: string) => void;
}

export const Button = ({ text, clickFn }: Props) => {
    const handleClick = () => {
        clickFn('Param');
    }
    return (
        <button onClick={handleClick}>{text}</button>
    );
}