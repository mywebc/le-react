import React, { memo, ReactNode, useCallback, useEffect, useRef, useState } from "react"
import classnames from "classnames"
import "./Carousel.scss"

interface ICarouselProps {
  className?: string;
  style?: React.CSSProperties
}

const Carousel: React.FC<ICarouselProps> = memo(({ children, className, style }) => {

  const [current, setCurrent] = useState(0)

  const leCarouselContainerRef = useRef<HTMLDivElement>(null)

  const toRight = useCallback(() => {
    setCurrent(_ => {
      let next = _ + 1
      if (next >= (children as any).length) {
        next = 0
      }
      goto(next)
      return next
    })
  }, [])

  const toLeft = useCallback(() => {
    setCurrent(_ => {
      let next = _ - 1
      if (next < 0) {
        next = (children as any).length - 1
      }
      goto(next)
      return next
    })
  }, [])

  const goto = useCallback((target: number) => {
    if (children) {
      (leCarouselContainerRef.current as HTMLDivElement).style.transform = `translateX(${-(100 / (children as any).length) * target}%)`
    }
  }, [])

  return (
    <div className={classnames("le-carousel", className)} style={style}>
      <div className="le-carousel-container" ref={leCarouselContainerRef}>
        {React.Children.map(children, (_, i) => _)}
      </div>
      <span className="arrow_left" onClick={toLeft}>left</span>
      <span className="arrow_right" onClick={toRight}>right</span>
    </div>
  )
})

export default Carousel
