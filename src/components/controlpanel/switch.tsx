import Image from "next/image";

interface Props {
    icon1: string,
    icon2: string,
    onClick: () => void,
    state: string,
}

const Switch = (props: Props) => {
    const { icon1, icon2, onClick, state } = props;
    console.log("switch",state)
    return (
        <div className="cursor-pointer m-1" onClick={onClick}>
            {state === "dark" ? 
                <Image 
                    src={icon1}
                    alt="Light Mode Images"
                    width={32}
                    height={32}
                />
            : 
                <Image 
                    src={icon2}
                    alt="Dark Mode Images"
                    width={32}
                    height={32}
                />
            }
        </div>
    )
};

export default Switch;