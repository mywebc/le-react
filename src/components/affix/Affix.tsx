import React, { useEffect, useRef } from "react"
import classnames from "classnames"
import "./Affix.scss"

interface IAffixProps {
  offsetTop?: number;
  className?: string;
  style?: React.CSSProperties
}

const Affix: React.FC<IAffixProps> = (props) => {
  const { offsetTop, className, style } = props;
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

  const originTopPosition = () => {
    if (window.scrollY === 0) {
      originTopRef.current = (affixRef.current as HTMLDivElement).getBoundingClientRect().top
    } else {
      const { scrollX, scrollY } = window
      window.scrollTo(scrollX, 0)
      originTopRef.current = (affixRef.current as HTMLDivElement).getBoundingClientRect().top
      window.scrollTo(scrollX, scrollY)
    }
  }

  const handleScroll = () => {
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
  }

  return (
    <div className={classes} style={style} ref={affixRef}>
      {props.children}
    </div>
  )
}

Affix.defaultProps = {
  offsetTop: 0
}

export default Affix