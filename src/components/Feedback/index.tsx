import classnames from "classnames"
import { useState } from "react"

import './form.scss'

const Feedback = ({ isMobile, isTablet }) => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

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
                    <input type="text" id="message" name="message" className="form-control" value={data.message} onChange={handleChange} />
                </div>
                <div className="field__submit">
                    <button className="btn" onClick={()=>{}}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Feedback