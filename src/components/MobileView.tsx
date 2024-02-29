import classnames from "classnames"
import { useState } from "react"
import useBreakpoint from "../hooks/useBreakpoint"

import { FEEDBACK, MOBILE, PRODUCTS, TABLET } from "../constants/constants"

import Products from "./Products"
import Feedback from "./Feedback"

const MobileView = () => {
  const [activeTab, setActiveTab] = useState(PRODUCTS)

  const breakpoint = useBreakpoint()

  const isMobile = breakpoint === MOBILE
  const isTablet = breakpoint === TABLET

  const handleChange = (e) => {
    setActiveTab(e.target.id)
  }

  return (
    <>
      <div className="header">
        <div
          id={PRODUCTS}
          className={classnames("tab tab__left", { 'tab--active': activeTab === PRODUCTS })}
          onClick={handleChange}
        >
          Products
        </div>
        <div
          id={FEEDBACK}
          className={classnames("tab tab__right", { 'tab--active': activeTab === FEEDBACK })}
          onClick={handleChange}
        >
          Feedback
        </div>
      </div>

      <div className={"main__mobile"}>
        {activeTab === PRODUCTS
          ? <Products />
          : <Feedback isMobile={isMobile} isTablet={isTablet} />
        }
      </div>
    </>

  )
}

export default MobileView
