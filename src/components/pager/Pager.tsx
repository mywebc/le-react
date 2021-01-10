import React, { useCallback, useEffect } from "react"
import Icon from "../icon/Icon"
import classnames from "classnames"
import "./Pager.scss"

interface IPagerProps {
    totalPage: number,
    currentPage?: number,
    simple?: boolean,
    size?: "small" | "default",
    hidePager?: boolean,
    onChange?: (current: number) => void,
    className?: string;
    style?: React.CSSProperties
}

const Pager: React.FC<IPagerProps> = ({ className, style, simple, size = "default", hidePager = true, totalPage, currentPage = 1, onChange }) => {



    const handlePrevClick = useCallback(() => {

    }, [])

    const handleNextClick = useCallback(() => {

    }, [])

    // 去重
    const unique = useCallback((array: any) => {
        const obj = {} as any;
        array.map((i: any) => {
            obj[i] = true;
        });
        return Object.keys(obj).map((string) => parseInt(string, 10));
    }, []);

    const pages = useCallback(() => {
        return unique(
            [
                1,
                currentPage - 1,
                currentPage,
                currentPage + 1,
                currentPage + 2,
                currentPage + 3,
                currentPage + 4,
                currentPage + 5,
                totalPage,
            ]
                .filter((n) => n >= 1 && n <= totalPage)
                .sort((a, b) => a - b)
        ).reduce((prev, current, index, array) => {
            (prev as any).push(current);
            // 前后数字大于时截断
            let canAddSeparator =
                array[index + 1] !== undefined && array[index + 1] - array[index] > 1;
            if (canAddSeparator) {
                (prev as any).push("...");
            }
            return prev;
        }, [])
    }, [currentPage, totalPage])

    const onClickPage = (n: number) => {
        if (n >= 1 && n <= totalPage) {
            // ctx.emit("update:currentPage", n);
            // ctx.emit("currentChange", n)
            onChange && onChange(n)
        }
    };

    return (
        <div className={classnames("le-pager", className, {
            hide: hidePager && totalPage <= 1,
            simple,
            [size]: size
        })} style={style}>
            {/* left arrow */}
            <span className={classnames("le-pager-nav", "prev", {
                "disabled": currentPage === 1
            })} >
                <Icon name="arrow-left" onClick={handlePrevClick} />
            </span>
            {/* content */}

            {pages().map((_, i) => {
                if (_ === currentPage) {
                    return <span className="le-pager-item current" key={i}>{_}</span>
                } else if (_ === '...') {
                    return <Icon className="le-pager-separator" name="ellipsis" key={i} />
                } else {
                    return <span className="le-pager-item other" onClick={() => onClickPage(_)} key={i}>{_}</span>
                }
            })}

            {/* right arrow */}
            <span className={classnames("le-pager-nav next", {
                "disabled": currentPage === totalPage
            })} >
                <Icon name="arrow-right" onClick={handleNextClick} />
            </span>
        </div >
    )
}


export default Pager;