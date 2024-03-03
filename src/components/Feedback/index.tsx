import { useEffect, useRef } from "react"
import classnames from "classnames"

import { FormProps } from "../../App"

import './form.scss'

type FeedbackProps = {
    data: {
        name: string
        phone: string
        email: string
        message: string
    }
    setData: React.Dispatch<React.SetStateAction<FormProps>>
    isMobile?: boolean
    isTablet?: boolean
}

const Feedback = (props: FeedbackProps) => {
    const { data, setData, isMobile, isTablet } = props

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        if (textAreaRef && textAreaRef.current) {
            textAreaRef.current.style.height = "0px";
            const scrollHeight = textAreaRef.current.scrollHeight;
            textAreaRef.current.style.height = scrollHeight + "px";
        }
    }, [data.message])

    const disableSave = !data.name?.length
        || !data.phone?.length
        || !data.email?.length
        || !data.message?.length

    return (
        <div className="section-right">
            <form className={classnames("form", {
                "form__mobile": isMobile,
                "form__tablet": isTablet
            })}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="form-control" value={data.name} onChange={handleChange} />
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" id="phone" name="phone" className="form-control" value={data.phone} onChange={handleChange} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-control" value={data.email} onChange={handleChange} />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" ref={textAreaRef} rows={1} className="form-control" value={data.message} onChange={handleChange} />
                </div>
                <div className="field__submit">
                    <button className="btn" onClick={() => { }} disabled={disableSave}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Feedback