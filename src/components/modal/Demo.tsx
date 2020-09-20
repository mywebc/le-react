import React, { useState, ReactNode } from "react"
import Modal from "./Modal"
import Button from "../button/Button"

interface IDemoProps {
    mask?: boolean;
    okText?: string;
    cancelText?: string;
    maskClosable?: boolean;
    closeIcon?: string | null;
    footer?: any;
}

export const Demo: React.FC<IDemoProps> = (props) => {
    const { mask, okText, cancelText, maskClosable, closeIcon, footer } = props

    const [visible, setVisible] = useState<boolean>(false)

    const handleToggleModal = () => {
        setVisible(true)
    }

    const handleFooter = (() => {
        if (footer === "buttonArray") {
            return [
                <Button onClick={() => { setVisible(false) }}>left</Button>,
                <Button onClick={() => { setVisible(false) }}>right</Button>]
        }
        if (footer === null) {
            return null
        }
        return footer
    })()

    return (
        <>
            <Button onClick={handleToggleModal}>open modal</Button>

            <Modal
                visible={visible}
                title={"this is modal title"}
                onCancel={() => { setVisible(false) }}
                onConfirm={() => { setVisible(false) }}
                okText={okText}
                cancelText={cancelText}
                mask={mask}
                maskClosable={maskClosable}
                closeIcon={closeIcon}
                footer={handleFooter}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}