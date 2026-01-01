import Image from "next/image"

const NavBar = () => {
  return (
    <header className="w-full bg-secondary-bg border-b-1 border-border-strong p-2 fixed top-0 left-0 z-3">
        <nav className="w-full flex justify-between items-center">
            <div className="p-2">
                <Image src="/images/logo.svg" alt="Logo" width={120} height={24} />
            </div>

            <ul className="flex gap-6 items-center text-[14px] text-muted-text ">
                <li className="text-primary-text cursor-pointer">Home</li>
                <li className="hover:text-secondary-text cursor-pointer">Create</li>
                <li className="hover:text-secondary-text cursor-pointer">About</li>
                <li className="hover:text-secondary-text cursor-pointer">Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar