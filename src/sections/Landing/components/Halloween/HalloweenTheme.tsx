import { Ghost, Moon, Skull } from 'lucide-react'
import AnimatedItem from './AnimatedItem'
import Bat from './items/Bat'
import Pumpkin from './items/Pumpkin'
import Spider from './items/Spider'



export default function HalloweenTheme() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <AnimatedItem key={`spider-${i}`} delay={i * 2}>
          <Spider />
        </AnimatedItem>
      ))}
      {[...Array(10)].map((_, i) => (
        <AnimatedItem key={`bat-${i}`} delay={i * 2 + 1}>
          <Bat />
        </AnimatedItem>
      ))}
      {[...Array(10)].map((_, i) => (
        <AnimatedItem key={`pumpkin-${i}`} delay={i * 2 + 0.5}>
          <Pumpkin />
        </AnimatedItem>
      ))}
      {[...Array(3)].map((_, i) => (
        <AnimatedItem key={`moon-${i}`} delay={i * 3}>
          <Moon className="text-yellow-200" size={24} />
        </AnimatedItem>
      ))}
      {[...Array(3)].map((_, i) => (
        <AnimatedItem key={`skull-${i}`} delay={i * 3 + 1.5}>
          <Skull className="text-gray-300" size={24} />
        </AnimatedItem>
      ))}
      {[...Array(3)].map((_, i) => (
        <AnimatedItem key={`ghost-${i}`} delay={i * 3 + 1}>
          <Ghost className="text-gray-300" size={24} />
        </AnimatedItem>
      ))}
    </>
  )
}
