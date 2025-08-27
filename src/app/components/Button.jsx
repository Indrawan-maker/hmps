export default function Button({ icon, href, text }) {
    return (
        <main className="">
        <a className=""
        target="_blank"
            rel="noopener noreferrer"
            href={href}>
        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-16 w-110">
            <div className="flex items-center w-full px-6 relative">
            <div className="mt-3">
                {icon}
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4">
                    <h2 className="font-bold tracking-wide">{text}</h2>
                </div>
            </div>
        </div>
            </a>
        </main>
    )
}