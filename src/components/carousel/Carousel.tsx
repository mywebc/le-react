import React, { memo, ReactNode, useCallback, useEffect, useRef, useState } from "react"
import classnames from "classnames"
import "./Carousel.scss"

interface ICarouselProps {
  className?: string;
  style?: React.CSSProperties
}

const Carousel: React.FC<ICarouselProps> = memo(({ children, className, style }) => {

  const [current, setCurrent] = useState(1)

  const [isExitTransition, setIsExitTransition] = useState(false)

  const leCarouselContainerRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    cloneNode()
    goto(1)
    return () => { setIsExitTransition(false) }
  }, [])

  useEffect(() => {
    if (current === (children as any).length + 2) {
      setIsExitTransition(false)
      goto(2)
    } else {
      setIsExitTransition(true)
    }
  }, [current])

  const toRight = useCallback(() => {
    setCurrent(_ => {
      let next = _ + 1
      if (next >= (children as any).length + 2) {
        next = 1
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

  const cloneNode = useCallback(() => {
    const nodeList: HTMLElement[] = [];
    (leCarouselContainerRef.current as HTMLDivElement).childNodes.forEach(node => {
      if (node.nodeType === 1) {
        const eleNode = node as HTMLElement
        nodeList.push(eleNode)
      }
    });
    (leCarouselContainerRef.current as HTMLDivElement).append(nodeList[0].cloneNode(true));
    (leCarouselContainerRef.current as HTMLDivElement).prepend(nodeList[nodeList.length - 1].cloneNode(true));
  }, [leCarouselContainerRef.current])

  const goto = useCallback((target: number) => {
    if (children) {
      (leCarouselContainerRef.current as HTMLDivElement).style.transform = `translateX(${-(100 / ((children as any).length + 2)) * target}%)`
    }
  }, [])

  return (
    <div className={classnames("le-carousel", className)} style={style}>
      <div className={classnames("le-carousel-container", {
        "isExitTransition": isExitTransition
      })} ref={leCarouselContainerRef}>
        {React.Children.map(children, (_, i) => _)}
      </div>
      <span className="arrow_left" onClick={toLeft}>left</span>
      <span className="arrow_right" onClick={toRight}>right</span>
    </div>
  )
})

export default Carousel
