'use client'

const HeroActionButton = ({
  text,
  onClick,
}: {
  text: string
  onClick?: () => void
}) => (
  <button
    className="bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition duration-300"
    onClick={onClick}
  >
    {text}
  </button>
)

export default HeroActionButton
