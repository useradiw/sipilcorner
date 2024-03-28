import Image from "next/image";

interface Props {
    icon1: string,
    icon2: string,
    onClick: () => void,
    state: string,
    size: number,
}

const Switch = (props: Props) => {
    const { icon1, icon2, onClick, state, size } = props;
    return (
        <div className="cursor-pointer m-1 flex align-baseline" onClick={onClick}>
            {state === "dark" ? 
                <Image 
                    src={icon1}
                    alt="Light Mode Images"
                    width={size}
                    height={size}
                />
            : 
                <Image 
                    src={icon2}
                    alt="Dark Mode Images"
                    width={size}
                    height={size}
                />
            }
        </div>
    )
};

export default Switch;