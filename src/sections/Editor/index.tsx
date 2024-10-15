import Image from 'next/image'
import Prompt from './Prompt'
import TransformPreview from './TransformPreview'

export default function Editor() {
  return (
    <div className="flex h-dvh">
      <div className="w-3/5 h-full grid items-end justify-center bg-cover bg-foreground relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/sys-model-base-2.webp')",
            filter: 'blur(24px)',
            opacity: 0.8,
          }}
        />

        <div className="z-10">
          <Image
            src="/images/sys-model-base-2.webp"
            alt="provided image"
            width="800"
            height="800"
          />
        </div>
      </div>

      <div className="w-2/5 p-12 flex flex-col">
        <div className="flex-grow">
          <h2 className="font-bold mb-4">Select style</h2>
          <div className="h-fit grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-8">
            <TransformPreview />
            <TransformPreview />
            <TransformPreview />
            <TransformPreview />
            <TransformPreview />
            <TransformPreview />
          </div>
        </div>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-600 font-bold">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <Prompt />
      </div>
    </div>
  )
}
