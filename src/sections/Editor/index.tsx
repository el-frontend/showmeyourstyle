import Canvas from './components/Canvas/Canvas'
import Divider from './components/Divider'
import Presets from './components/Presets'
import Prompt from './components/Prompt'

export default function Editor() {
  return (
    <div className="flex h-dvh">
      <Canvas />

      <div className="w-2/5 pt-16 px-8 flex flex-col bg-white">
        <Presets />
        <Divider label="OR" />
        <Prompt />
      </div>
    </div>
  )
}
