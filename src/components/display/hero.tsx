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
                        <div className="absolute bottom-0 p-1 sm:p-4 font-semibold bg-gradient-to-t from-slate-200/50 to-slate-200/20 dark:from-slate-800 dark:to-slate-800/10 rounded-b-md w-full text-lg sm:text-2xl">
                            <Text title={title}/>
                        </div>
                    </div>
                :
                    <div>
                        <div className="w-full min-h-[25svh] bg-slate-600 rounded-md"></div>
                        <div className="absolute bottom-0 p-1 sm:p-4 font-semibold bg-gradient-to-t from-slate-200/50 to-slate-200/20 dark:from-slate-800 dark:to-slate-800/10 rounded-b-md w-full text-lg sm:text-2xl">
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