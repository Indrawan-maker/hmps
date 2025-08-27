import Image from 'next/image'
import { VscGithub } from "react-icons/vsc";
import { MdOutlineWhatsapp } from "react-icons/md";
import { BsTiktok } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import logo from "../images/si.webp"
import Button from './Button';

export default function Card() {

    const items = [
        {
            icon: <div className='w-10 h-10'><Image className='w-full h-full' src={logo} alt='Jurusan Sistem Informasi' /></div>,
            href: "https://google.com/",
            text: "Website"
        },


        {
            icon: <div className='w-10 h-10'><MdOutlineWhatsapp className='w-full h-full' /></div>,
            href: "https://www.youtube.com/",
            text: "Whatsap me"
        },
        {
            icon: <div className='w-8 h-8'><BsTiktok className='w-full h-full' /></div>,
            href: "https://tiktok.com/",
            text: "Tiktok"
        },
        {
            icon: <div className='w-10 h-10'><FiYoutube className='w-full h-full' /></div>,
            href: "https://open.spotify.com/",
            text: "Youtube"
        }
    ]
    return (
        <main className="p-0 md:p-8 flex justify-center items-center">
            <main className="w-140 h-220 bg-white rounded-md md:rounded-2xl">
                <div className="w-full h-full p-6">
                    <nav className="w-full h-12 cursor-pointer">
                        <a href="https://github.com/Indrawan-maker"
                            target="_blank"
                            rel="noopener noreferrer">
                            <div className="w-7 h-7">
                                <VscGithub className="w-full h-full object-cover" />
                            </div>
                        </a>
                    </nav>
                    <section className='grid items-center justify-center mt-12'>
                        <div className='w-24 h-24 flex justify-center items-center ml-18 md:ml-42'>
                            <Image className='w-full h-full object-cover flex items-center justify-center self-center'
                                src={logo} alt="logo sistem informasi" />
                        </div>
                        <div className='mt-8 grid items-center justify-center -ml-2 md:ml-0'>
                            <h1 className='font-extrabold text-xl text-center tracking-widest'>HMPS SI</h1>
                            <div className='mt-1 '>
                                <h4 className='font-extrabold text-sm text-center tracking-widest'>Kabinet Dhirgika</h4>
                            </div>
                        </div>
                        <section className='grid items-center justify-center mt-18'>
                            {
                                items.map((item, i) =>
                                (
                                    <main key={i}>
                                        <Button key={i}
                                            icon={item.icon}
                                            href={item.href}
                                            text={item.text}
                                        />
                                        <div className='mb-6' key={i}></div>
                                    </main>
                                )
                                )}
                        </section>
                    </section>
                </div>
            </main>
        </main>
    )
}