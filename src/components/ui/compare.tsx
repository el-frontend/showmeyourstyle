import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

export type CompareItem = {
  src: string
  alt: string
}

export type CompareProps = {
  itemOne: CompareItem
  itemTwo: CompareItem
  width?: number | string
  height?: number | string
  className?: string
}

export default function Compare({
  itemOne,
  itemTwo,
  width = 300,
  height = 300,
  className
}: CompareProps) {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage {...itemOne}/>}
      itemTwo={<ReactCompareSliderImage {...itemTwo} />}
      portrait={false}
      className={className}
      style={{ width, height }}
      position={50}
       
    />
  )
}
