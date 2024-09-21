import BleedContainer from './BleedContainer';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
    className?: string;
    svg?: string
}

const titleText = 'Linear is a purpose-built tool for planning and building products'

const tokenize = (value: string) => {
    return value.split('')
}

const Hero = (props: Props) => {
    return (
        <>
            <section className={cn('max-w-[calc(var(--page-max-width)+var(--page-padding-left)+var(--page-padding-right))] pl-linear-page-padding-left pr-linear-page-padding-right *:text-balance mx-auto mt-[calc(var(--header-height)_+_24px)] pt-[60px]', props.className)}>
                <h1 className="text-linear-text-primary font-variation-opsz-28 text-[3.8rem] font-[500] tracking-[-.0325em] leading-[1.1]">
                    {tokenize(titleText).map((token, index) => <span key={`title-text-token-${index}`} >{token}</span>)}
                </h1>
                <div className="max-w-[70%] mt-6">
                    <h2 className="mt-6 text-[21px] text-[#ffffffb3] font-[500]">Meet the system for modern software development. Streamline issues, projects, and product roadmaps.</h2>
                </div>
                <div className="flex mt-10 gap-4">
                    <button className="bg-neutral-200 w-fit text-linear-bg-primary shadow-linear-stack-low h-10 text-linear-regular-plus rounded-lg font-medium px-4 cursor-pointer">
                        Start building
                    </button>
                    <div className="hover:bg-linear-bg-tertiary transition-all duration-200 ease-in-out  rounded-[10px]">
                        <button className="flex mt-px items-center w-fit bg-gradient-to-r from-linear-text-primary to-linear-text-quaternary bg-clip-text text-transparent shadow-linear-stack-low h-10 text-linear-regular-plus rounded-[10px] font-medium px-4 cursor-pointer">
                            New: Linear Mobile
                            <ChevronRight className='text-linear-text-secondary align-baseline p-px' size={20} />
                        </button>
                    </div>

                </div>
            </section>

            <BleedContainer svg={props.svg} />
        </>
    )
}

export default Hero