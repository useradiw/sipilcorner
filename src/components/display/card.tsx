import Image from "next/image";
import Link from "next/link";

interface Props {
    imageSrc?: string,
    title?: string,
    link?: string,
};

const Card = (props: Props) => {
    const { imageSrc, title, link } = props;
    return (
        <>
            <div className="flex flex-row hover:bg-slate-50/5 hover:rounded-md hover:border hover:border-slate-50/10 hover:cursor-pointer w-96 h-40 gap-4">
                <div className="py-4">
                    {imageSrc ? 
                        <Image 
                            src={imageSrc}
                            alt="Hero Image"
                            width={400}
                            height={200}
                            style={{
                                aspectRatio: 16/9
                            }}
                        />
                    :
                        <div className=" w-52 bg-slate-600 rounded-md h-full text-center">No Image</div>
                    }
                </div>
                <div className="h-full w-full">
                    {title ?? "No Title"}
                </div>
            </div>
        </>
    )
};

export default Card;