import React, { memo, useCallback, useEffect, useRef, useState } from "react"
import classnames from "classnames"
import "./Carousel.scss"

interface ICarouselProps {
  afterChange?: (index: number) => void
  className?: string;
  style?: React.CSSProperties
}

const Carousel: React.FC<ICarouselProps> = memo(({ afterChange, children, className, style }) => {

  const [current, setCurrent] = useState(1)

  const [transitionTime, setTransitionTime] = useState(true)

  const [isTransitionRunning, setIsTransitionRunning] = useState(false)

  const leCarouselContainerRef = useRef<HTMLDivElement>(null)

  const currentRef = useRef(0)

  useEffect(() => {
    const containerRef = (leCarouselContainerRef.current as HTMLDivElement);
    cloneNode();
    goto(1);
    containerRef.addEventListener('transitionend', judgeExitTransition);
    containerRef.addEventListener('transitionrun', judgeTransitionRun);
    return () => {
      containerRef.removeEventListener('transitionend', judgeExitTransition);
      containerRef.addEventListener('transitionrun', judgeTransitionRun);
    }
  }, [])

  useEffect(() => {
    currentRef.current = current
    goto(current)
    if (current === 2 || current === (children as any).length - 1) {
      setTransitionTime(true)
    }
  }, [current])

  useEffect(() => {
    if (!transitionTime) {
      console.log(current);
      console.log(currentRef.current);
      if (current === (children as any).length + 1) {
        setCurrent(1)
      } else if (current === 0) {
        setCurrent((children as any).length)
      }
    }
  }, [transitionTime])

  const toRight = useCallback(() => {
    if (isTransitionRunning) return
    setCurrent(_ => _ + 1)
  }, [])

  const toLeft = useCallback(() => {
    if (isTransitionRunning) return
    setCurrent(_ => _ - 1)
  }, [])

  const judgeExitTransition = useCallback(() => {
    afterChange && afterChange(currentRef.current);
    setIsTransitionRunning(false)
    if ((currentRef.current === (children as any).length + 1) || (currentRef.current === 0)) {
      setTransitionTime(false)
    }
  }, [])

  const judgeTransitionRun = useCallback(() => {
    setIsTransitionRunning(true)
  }, [])

  const cloneNode = useCallback(() => {
    const nodeList: HTMLElement[] = [];
    const containerRef = (leCarouselContainerRef.current as HTMLDivElement);
    containerRef.childNodes.forEach(node => {
      if (node.nodeType === 1) {
        const eleNode = node as HTMLElement
        nodeList.push(eleNode)
      }
    });
    containerRef.append(nodeList[0].cloneNode(true));
    containerRef.prepend(nodeList[nodeList.length - 1].cloneNode(true));
  }, [leCarouselContainerRef.current])

  const goto = useCallback((target: number) => {
    if (children) {
      (leCarouselContainerRef.current as HTMLDivElement).style.transform = `translateX(${-(100 / ((children as any).length + 2)) * target}%)`
    }
  }, [])

  return (
    <div className={classnames("le-carousel", className)} style={style}>
      <div className={classnames("le-carousel-container", {
        "transitionTime": transitionTime
      })} ref={leCarouselContainerRef}>
        {React.Children.map(children, (_, i) => _)}
      </div>
      <span className="arrow_left" onClick={toLeft}>left</span>
      <span className="arrow_right" onClick={toRight}>right</span>
    </div>
  )
})

export default Carousel
