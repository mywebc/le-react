import React, { useEffect, useRef, memo, useCallback } from "react"
import classnames from "classnames"
import "./Affix.scss"

interface IAffixProps {
  offsetTop?: number;
  className?: string;
  style?: React.CSSProperties
}

const Affix: React.FC<IAffixProps> = memo(({ offsetTop = 0, className, style, children }) => {
  const originTopRef = useRef(0)
  const affixRef = useRef<HTMLDivElement>(null)

  const classes = classnames("le-affix", className, {})

  useEffect(() => {
    originTopPosition()
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const originTopPosition = useCallback(() => {
    if (window.scrollY === 0) {
      originTopRef.current = (affixRef.current as HTMLDivElement).getBoundingClientRect().top
    } else {
      const { scrollX, scrollY } = window
      window.scrollTo(scrollX, 0)
      originTopRef.current = (affixRef.current as HTMLDivElement).getBoundingClientRect().top
      window.scrollTo(scrollX, scrollY)
    }
  }, [])

  const handleScroll = useCallback(() => {
    const { top, bottom, left, right } = (affixRef.current as HTMLDivElement).getBoundingClientRect()
    if (offsetTop !== undefined && window.scrollY >= (originTopRef.current - offsetTop)) {
      (affixRef.current as HTMLDivElement).style.position = "fixed";
      (affixRef.current as HTMLDivElement).style.width = right - left + 'px';
      (affixRef.current as HTMLDivElement).style.height = bottom - top + 'px';
      (affixRef.current as HTMLDivElement).style.left = left + 'px';
      (affixRef.current as HTMLDivElement).style.top = offsetTop + 'px';
    } else {
      (affixRef.current as HTMLDivElement).style.position = "static";
    }
  }, [])

  return (
    <div className={classes} style={style} ref={affixRef}>
      {children}
    </div>
  )
})

export default Affix