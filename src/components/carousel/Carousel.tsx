import React, { memo, useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react"
import classnames from "classnames"
import "./Carousel.scss"

interface ICarouselProps {
  dots?: boolean;
  duration?: number;
  afterChange?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

interface CarouselRef {
  goTo: (slide: number) => void;
  next: () => void;
  prev: () => void;
}

const Carousel = forwardRef<CarouselRef, ICarouselProps>(({ afterChange, dots = true, duration = 0, children, className, style }, ref) => {

  const [current, setCurrent] = useState(1)

  const [transitionTime, setTransitionTime] = useState(true)

  const [isTransitionRunning, setIsTransitionRunning] = useState(false)

  const leCarouselContainerRef = useRef<HTMLDivElement>(null)

  const currentRef = useRef(0)

  let autoTimer = useRef<NodeJS.Timeout>()

  useImperativeHandle(ref, () => ({
    goTo: (number) => { goto(number) },
    next: () => { goto(currentRef.current + 1) },
    prev: () => { goto(currentRef.current - 1) }
  }));

  useEffect(() => {
    cloneNode();
    goto(1);
    const containerRef = (leCarouselContainerRef.current as HTMLDivElement);
    containerRef.addEventListener('transitionend', judgeExitTransition);
    containerRef.addEventListener('transitionrun', judgeTransitionRun);
    return () => {
      containerRef.removeEventListener('transitionend', judgeExitTransition);
      containerRef.addEventListener('transitionrun', judgeTransitionRun);
    }
  }, [])

  useEffect(() => {
    duration !== 0 && autoPlay()
    return () => { autoTimer.current && duration !== 0 && clearInterval(autoTimer.current) }
  }, [])

  useEffect(() => {
    if (!children) return
    currentRef.current = current
    goto(current)
    if (current === 2 || current >= (children as any).length - 1) {
      setTransitionTime(true)
    }
  }, [current])

  useEffect(() => {
    if (!transitionTime) {
      if (current >= (children as any).length + 1) {
        setCurrent(1)
      } else if (current === 0) {
        setCurrent((children as any).length)
      }
    }
  }, [transitionTime])

  const judgeExitTransition = useCallback(() => {
    let afterIndex = currentRef.current
    if (currentRef.current > (children as any).length) {
      afterIndex = 1
    }
    afterChange && afterChange(afterIndex);
    setIsTransitionRunning(false)
    if ((currentRef.current >= (children as any).length + 1) || (currentRef.current === 0)) {
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

  const handleGoToTarget = useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (isTransitionRunning) return
    const target = (e.target as HTMLSpanElement).getAttribute("data-id")
    setCurrent(Number(target))
  }, [])

  const autoPlay = useCallback(() => {
    if (duration !== 0) {
      autoTimer.current = setInterval(() => {
        setCurrent(_ => _ + 1)
      }, duration)
    }
  }, [])

  const handleOnMouseEnter = useCallback(() => {
    if (autoTimer.current && duration !== 0) {
      clearInterval(autoTimer.current)
      autoTimer.current = undefined
    }
  }, [])
  const handleOnMouseLeave = useCallback(() => {
    autoPlay()
  }, [])

  return (
    <div className={classnames("le-carousel", className)} style={style} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <div className={classnames("le-carousel-container", {
        "transitionTime": transitionTime
      })} ref={leCarouselContainerRef}>
        {React.Children.map(children, (Child) => Child)}
      </div>
      {dots && <div className="dotsWrapper">
        {React.Children.map(children, (_, i) => <span
          className={classnames("dot", { active: current === i + 1 })}
          onClick={handleGoToTarget}
          key={i}
          data-id={i + 1}
        ></span>)}
      </div>}
    </div >
  )
})

export default Carousel
