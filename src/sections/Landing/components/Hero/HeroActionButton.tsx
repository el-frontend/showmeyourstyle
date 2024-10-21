'use client'

const HeroActionButton = ({
  text,
  onClick,
}: {
  text: string
  onClick?: () => void
}) => (
  <button
    className="bg-black/50 shadow-2xl hover:shadow-white border-white border text-xs font-semibold md:text-base text-white py-1 px-2 md:py-2 md:px-4 rounded-full hover:bg-black/80 transition duration-300"
    onClick={onClick}
  >
    {text}
  </button>
)

export default HeroActionButton
