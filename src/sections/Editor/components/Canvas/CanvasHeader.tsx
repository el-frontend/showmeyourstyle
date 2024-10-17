import Image from 'next/image'
import Link from 'next/link'
import UploadButton from '../UploadView/UploadButton'

export function CanvasHeader() {
  return (
    <div className="absolute z-50 w-full px-8 py-4 top-0 right-0 left-0 min-h-16 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/images/logo_white.svg"
          alt="SHOWME your style Logo"
          width={117}
          height={50}
        />
      </Link>
      <UploadButton />
    </div>
  )
}
