import React, { useState, useEffect } from "react"
import classnames from "classnames"
import "./Switch.scss"

interface ISwitchProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: "small";
  onChange?: (checked: boolean, e: React.MouseEvent) => void;
  className?: string
  style?: React.CSSProperties
}

const Switch: React.FC<ISwitchProps> = ({ disabled = false, loading = false, size, defaultChecked = false, onChange, style, className }) => {

  const [value, setValue] = useState<boolean>(false)

  useEffect(() => {
    const checked = defaultChecked || false
    setValue(checked)
  }, [defaultChecked])


  const triggleClick: React.MouseEventHandler = e => {
    if (disabled || loading) return;
    setValue(!value);
    onChange && onChange(!value, e)
  }

  const classes = classnames("le-switch", className, {
    [`le-switch-${size}`]: size,
    "checked": value,
    "disabled": disabled,
    "loading": loading,
  })

  return (
    <button className={classes} onClick={triggleClick} style={style}>
      <span>
        {loading && <span></span>}
      </span>
    </button>
  )
}

export default Switch;
