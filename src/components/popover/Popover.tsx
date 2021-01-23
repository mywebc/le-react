import React, { memo, Children, useState, useRef, useEffect, useCallback } from "react"
import classnames from "classnames"
import "./Popover.scss"

interface IPopoverProps {
    position?: "top" | "bottom" | "left" | "right",
    content?: string,
    trigger?: "click" | "hover",
    className?: string;
    style?: React.CSSProperties
}

const Popover: React.FC<IPopoverProps> = memo(({ position = "top", trigger = "click", content, children, className, style }) => {

    const [visible, setVisible] = useState(false)
    const popoverRef = useRef<HTMLDivElement>(null)
    const contentWrapperRef = useRef<HTMLDivElement>(null)
    const triggerWrapperRef = useRef<HTMLDivElement>(null)

    const classes = classnames("le-popover", className, {

    })

    // init
    useEffect(() => {
        if (trigger === "click") {
            popoverRef.current?.addEventListener("click", onClick);
        } else {
            popoverRef.current?.addEventListener("mouseenter", open);
            popoverRef.current?.addEventListener("mouseleave", close);
        }
        return () => {
            if (trigger === "click") {
                popoverRef.current?.removeEventListener("click", onClick);
            } else {
                popoverRef.current?.removeEventListener("mouseenter", open);
                popoverRef.current?.removeEventListener("mouseleave", close);
            }
        }
    }, [])

    const positionContent = useCallback(() => {
        document.body.appendChild(contentWrapperRef.current as HTMLDivElement);
        const {
            width,
            height,
            top,
            left,
        } = (triggerWrapperRef.current as HTMLDivElement).getBoundingClientRect();
        const { height: height2 } = (contentWrapperRef.current as HTMLDivElement).getBoundingClientRect();
        let positions = {
            top: { top: top + window.scrollY, left: left + window.scrollX },
            bottom: {
                top: top + height + window.scrollY,
                left: left + window.scrollX,
            },
            left: {
                top: top + window.scrollY + (height - height2) / 2,
                left: left + window.scrollX,
            },
            right: {
                top: top + window.scrollY + (height - height2) / 2,
                left: left + window.scrollX + width,
            },
        } as any;
        (contentWrapperRef.current as HTMLDivElement).style.left = positions[position].left + "px";
        (contentWrapperRef.current as HTMLDivElement).style.top = positions[position].top + "px";
    }, []);


    const onClickDocument = useCallback((e) => {
        if (
            popoverRef.current &&
            (popoverRef.current === e.target || popoverRef.current.contains(e.target))
        ) {
            return;
        }
        if (
            contentWrapperRef.current &&
            (contentWrapperRef.current === e.target ||
                contentWrapperRef.current.contains(e.target))
        ) {
            return;
        }
        close();
    }, []);

    const open = useCallback(() => {
        setVisible(() => {
            document.addEventListener("click", onClickDocument);
            return true
        })
        positionContent();
    }, []);

    const close = useCallback(() => {
        document.removeEventListener("click", onClickDocument);
        document.body.removeChild(contentWrapperRef.current as HTMLDivElement)
    }, []);

    const onClick = useCallback((event) => {
        if (triggerWrapperRef.current?.contains(event.target)) {
            if (visible === true) {
                close();
            } else {
                open();
            }
        }
    }, []);

    return (
        <div className={classes} style={style} ref={popoverRef}>
            {/* 弹框 */}
            {visible && <div
                ref={contentWrapperRef}
                className={classnames("popover-content-wrapper", {
                    [`position-${position}`]: true
                })}
            >
                {content}
            </div>}
            {/* trigger */}
            <span ref={triggerWrapperRef} style={{ display: "inline-block" }}>
                {children}
            </span>
        </div >
    )
})

export default Popover