import Flicking from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import { AutoPlay } from '@egjs/flicking-plugins'

interface CarouselProps {
  children?: React.ReactNode
}

export function Carousel({ children }: CarouselProps) {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: 'NEXT', stopOnHover: false }),
  ]
  return (
    <Flicking
      align={'center'}
      bounce={0}
      circular={true}
      circularFallback={'bound'}
      plugins={plugins}
    >
      {children}
    </Flicking>
  )
}
