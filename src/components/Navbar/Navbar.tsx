import Image from "next/image"

interface navbar {
    logo: string
    name: string
}
const Navbar = ({logo , name} : navbar) => {
  return (
    <div className="flex bg-navbar py-3 gap-3 px-2 items-center w-full">
        <Image src={logo} alt={name} width={150} height={200} className="pr-2 border-r border-[#737373]"/>
        <p className="font-bold text-white">{name}</p>
    </div>
  )
}

export default Navbar