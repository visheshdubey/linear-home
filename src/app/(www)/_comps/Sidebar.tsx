import { ArrowLeft, ArrowRight, ChevronDown, Clock3, Inbox, Search, SquarePen } from "lucide-react"

import Image from "next/image"

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className="h-full bg-linear-bg-primary flex flex-col">
            <div className="flex items-center justify-between">
                <div className="flex gap-2 ml-1">
                    <span className="size-3 bg-linear-bg-secondary rounded-full"></span>
                    <span className="size-3 bg-linear-bg-secondary rounded-full"></span>
                    <span className="size-3 bg-linear-bg-secondary rounded-full"></span>
                </div>

                <div className="flex gap-2">
                    <ArrowLeft size={12} className="text-linear-text-tertiary" />
                    <ArrowRight size={12} className="text-linear-text-quaternary" />
                    <Clock3 size={12} className="text-linear-text-tertiary" />
                </div>
            </div>

            <div className="flex items-center justify-between mt-7">
                <div className="flex items-center gap-2">
                    <div className="size-[18px] flex rounded-sm bg-linear-bg-secondary size items-center justify-center">
                        <Image src={'/favicon.svg'} width={14} height={14} alt="Linear Logo" />
                    </div>
                    <span className="font-medium text-[11px]">Linear</span>
                    <ChevronDown size={14} className="text-linear-text-tertiary" />
                </div>
                <div className="flex items-center gap-3">
                    <Search size={14} className="text-linear-text-tertiary" />
                    <span className="size-7 rounded-md bg-linear-bg-secondary flex items-center justify-center">
                        <SquarePen size={16} className="text-linear-text-secondary rounded-lg antialiased" />
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-0.5 mt-5">
                <div className="flex items-center gap-2.5 px-2 py-2 bg-linear-bg-tertiary rounded-md text-xs">
                    <Inbox size={14} />
                    Inbox
                </div>
                <div className="flex items-center gap-2.5 px-2 py-2 rounded-md text-xs">
                    <Inbox size={14} />
                    My Issues
                </div>
            </div>

            <div className="px-1 flex gap-1 text-[10px] text-linear-text-tertiary mt-7">Workspace
                <svg className="text-linear-text-quaternary" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path></svg>
            </div>

            <div className="flex flex-col gap-0.5 mt-3">
                <div className="flex items-center gap-2.5 px-2 py-2 rounded-md text-xs">
                    <Inbox size={14} />
                    Inbox
                </div>
                <div className="flex items-center gap-2.5 px-2 py-2 rounded-md text-xs">
                    <Inbox size={14} />
                    My Issues
                </div>
            </div>

            <div className="px-1 flex gap-1 text-[10px] text-linear-text-tertiary mt-7">Workspace
                <svg className="text-linear-text-quaternary" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path></svg>
            </div>

            <div className="flex flex-col gap-0.5 mt-3">
                <div className="flex items-center gap-2.5 px-2 py-2 rounded-md text-xs">
                    <Inbox size={14} />
                    Inbox
                </div>
                <div className="flex items-center gap-2.5 px-2 py-2 rounded-md text-xs">
                    <Inbox size={14} />
                    My Issues
                </div>
            </div>

            <div className="px-1 flex gap-1 text-[10px] text-linear-text-tertiary mt-7">Workspace
                <svg className="text-linear-text-quaternary" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path></svg>
            </div>

            <div className="flex flex-col gap-0.5 mt-3">
                <div className="flex items-center gap-2.5 px-2 py-2 rounded-md text-xs">
                    <Inbox size={14} />
                    Inbox
                </div>
                <div className="flex items-center gap-2.5 px-2 py-2 rounded-md text-xs">
                    <Inbox size={14} />
                    My Issues
                </div>
            </div>
        </div>
    )
}

export default Sidebar