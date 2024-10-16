import Image from 'next/image'

export type PreviewProps = {
  image: string
}

export default function Preview({ image }: PreviewProps) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${image}')`,
          filter: 'blur(24px)',
          opacity: 0.8,
        }}
      />

      <div className="flex absolute z-10 bottom-0 w-full justify-center">
        <Image src={image} alt="provided image" width="800" height="800" />
      </div>
    </>
  )
}
