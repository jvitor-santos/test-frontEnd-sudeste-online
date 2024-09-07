import { FaWhatsapp } from 'react-icons/fa'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaXTwitter } from 'react-icons/fa6'

import { MdOutlineMail } from 'react-icons/md'

import { Badge } from '../Badge'
import { ButtonLike } from '../ButtonLike'

export function Tags() {
  return (
    <div className="flex xs:w-[300px] xs:flex-col lg:w-[960px] lg:flex-row lg:justify-between">
      <div className="flex items-center gap-2">
        <span>TAGS:</span>
        <Badge text="VENDAS" />
        <Badge text="APLICATIVO" />
        <Badge text="LEGISLAÇÃO" />
      </div>
      <div className="flex items-center gap-4 xs:pt-6">
        <FaWhatsapp className="size-5" />
        <CiFacebook className="size-5" />
        <FaXTwitter className="size-5" />
        <CiLinkedin className="size-5" />
        <MdOutlineMail className="size-5" />
        <ButtonLike />
      </div>
    </div>
  )
}
