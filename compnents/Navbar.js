import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
  return (
    <div className='bg-green-600 p-2 flex justify-between items-center  text-lg md:text-xl  '>
        <div className='font-bold'>
        Rock Paper Scissor Game
        </div>
        <div>
<ul className='flex gap-4 font-semibold'>
    <li className='hover:scale-110 hover:underline cursor-pointer'>
       <Link target='_blank' href={"/"}>Game</Link> 
    </li>
    <li className='hover:scale-110 hover:underline cursor-pointer flex gap-1'>
       <Image className="active:scale-95 cursor-pointer " src="/github.svg" height={30} width={30} alt="github" /> <Link target='_blank' href={"https://github.com/mashit7516-code/rpsgame#"}>Github</Link>
    </li>
</ul>
        </div>
    </div>
  )
}

export default Navbar