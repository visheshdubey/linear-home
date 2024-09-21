import Sidebar from "./Sidebar"

type Props = {
    svg?: string
}

const BleedContainer = (props: Props) => {
    return (
        <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] '>
            <div className="-mt-[140px] block"></div>
            <div className="w-full h-[900px]">
                <div className="relative contain-strict size-full" style={{ perspective: "4000px", perspectiveOrigin: '100% 0', transformStyle: 'preserve-3d' }}>
                    <div className="flex hero-perpective-transform" style={{ transformStyle: 'preserve-3d' }}>
                        <div className="py-4 px-6 h-full w-[260px] shrink-0" style={{ transformStyle: 'preserve-3d' }}>
                            <div className="w-full h-full bg-linear-bg-translucent rounded-sm">
                                <Sidebar />
                            </div>
                        </div>

                        <div className="absolute left-[260px] overflow-hidden h-full" style={{ insetBlock: 8, transformStyle: 'preserve-3d' }}>
                            <div dangerouslySetInnerHTML={{ __html: props.svg || '' }} />
                            <div className="pointer-events-none absolute -inset-2" style={{ background: 'linear-gradient(to right, transparent 80%, var(--color-bg-primary) 90%)' }} />
                        </div>

                        <div className="inset-0 pointer-events-none absolute w-full z-2" style={{ background: 'linear-gradient(to bottom, transparent 50%, var(--color-bg-primary) 100%)' }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BleedContainer