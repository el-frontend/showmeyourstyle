import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="relative w-full min-h-96 bg-background bg-cover bg-bottom bg-no-repeat bg-origin-content flex items-end justify-center">
      <div className="flex flex-col items-center justify-between min-h-80 py-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <Link
            href="https://youtube.com/@ElFrontend"
            target="_blank"
            className=" z-40 cursor-pointer"
          >
            <Image
              src={
                'https://res.cloudinary.com/dr0ujyp54/image/upload/f_auto,q_auto/v1/assets/elfrontend'
              }
              alt="ElFrontend"
              width={120}
              height={120}
            />
          </Link>
          <span className="font-spooky text-4xl">Cloudinary x Midudev</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 text-lg">
          <p className="text-white">
            Show me your style, an application made for you with ❤️
          </p>
          <p className="text-white">
            © {new Date().getFullYear()} Show me your style
          </p>
        </div>
      </div>
      <div
        className="absolute w-full h-full"
        style={{
          backgroundImage: 'url(images/footer_2.jpg)',
          opacity: 0.5,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'soft-light',
        }}
      />
    </div>
  )
}

export default Footer
