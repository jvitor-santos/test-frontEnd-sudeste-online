import { IoCalendarOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";


import { Badge } from "../Badge/Badge";

export function Header () {
    return (
        <header className="flex flex-col w-[1174px] h-[387px] items-center justify-center">
            <img src="/assets/png/icon.png" alt="icone"/>
            <h1 className="font-lato font-extrabold text-5xl pt-12">DESIGN BETTER. FASTER. TOGETHER.</h1>
            <h2 className="font-lato font-normal text-lg pt-4">The digital product design platform powering the world’s best user experiences</h2>

            <div className="flex w-full justify-center items-center pt-12 gap-x-6">
                <div className="font-lato text-xs">
                    <span className="font-semibold">CATEGORIA: </span><span className="text-info font-extrabold">POR ONDE COMEÇAR</span>
                </div>

                <Badge icon={<LuClock3 />} text="7 MIN LEITURA"/>
                <Badge icon={<IoCalendarOutline />} text="01/SETEMBRO/2024"/> 
            </div>
        </header>
    )
}