import Image from "next/image";
import Link from "next/link";

interface Props {
    imageSrc?: string,
    title?: string,
    link?: string,
};

const Text = ({ title }: Props) => {
    return (
        <>
            {title ? 
                <div>
                    {title}                    
                </div>
            :
                <div>
                    No Title
                </div>
            }
        </>
    )
};

const Display = ({ imageSrc, title }: Props) => {
    return (
        <>
            <div className="relative cursor-pointer">
                {imageSrc ? 
                    <div>
                        <Image
                            src={imageSrc}
                            alt="Hero Image"
                            width={1000}
                            height={200}
                            style={{
                                aspectRatio: 16/9
                            }}
                            className="rounded-md"
                        />
                        <div className="absolute bottom-0 p-4 font-semibold bg-slate-50/10 w-full text-2xl">
                            <Text title={title}/>
                        </div>
                    </div>
                :
                    <div>
                        <div className="w-full min-h-[25svh] bg-slate-600 rounded-md"></div>
                        <div className="absolute bottom-0 p-4 font-semibold bg-slate-50/10 w-full text-2xl">
                            <Text title={title}/>
                        </div>
                    </div>
                }
            </div>
        </>
    )
};

const Hero = (props: Props) => {
    const { imageSrc, title, link } = props;
    return (
        <>
            <div className="w-fit bg-slate-600 rounded-md my-2">
                {link ? 
                    <Link href={link}>
                        <Display imageSrc={imageSrc} title={title}/>
                    </Link>
                :
                    <div>
                        <Display imageSrc={imageSrc} title={title}/>
                    </div>
                }
            </div> 
        </>
    )
};

export default Hero;