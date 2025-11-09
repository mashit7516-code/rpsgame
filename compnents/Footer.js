import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    <div className='p-6 bg-green-600 flex justify-center items-center flex-col '>
        <span>

Made With &hearts; by Ali Hassan
        </span>
<ul className='flex '>
    <li><Image className="active:scale-95 cursor-pointer " src="/github.svg" height={30} width={30} alt="github" /><Link target='_blank' href={"https://github.com/mashit7516-code/rpsgame#"}></Link></li>
    <li><Image className="  active:scale-95 cursor-pointer " src="/youtube.svg" height={30} width={30} alt="youtube" /><Link target='_blank' href={"https://www.youtube.com/channel/UCt8-S7KJ0mVp9_n5DvCvPOA"}></Link></li>
</ul>
    </div>
  )
}

export default Footer