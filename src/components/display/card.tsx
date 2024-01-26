import Image from "next/image";
import Link from "next/link";

interface Props {
    imageSrc?: string,
    title?: string,
    link?: string,
};

const Card = (props: Props) => {
    const { imageSrc, title, link } = props;
    const newLink = link ?? "localhost:3000";
    return (
        <>
            <Link href={newLink}>
                <div className="flex flex-row hover:cursor-pointer hover:font-semibold gap-4">
                    <div>
                        {imageSrc ? 
                            <Image 
                                src={imageSrc}
                                alt="Hero Image"
                                width={400}
                                height={200}
                                style={{
                                    aspectRatio: 16/9
                                }}
                                className="hover:rounded-md border-2 border-slate-900 dark:border-slate-300"
                            />
                        :
                            <div className="w-52 bg-slate-600 rounded-md h-full text-center">No Image</div>
                        }
                    </div>
                    <div className="h-full w-full flex flex-row items-center">
                        <div>
                            {title ?? "No Title"}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
};

export default Card;