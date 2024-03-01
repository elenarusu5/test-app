import { useState } from "react"
import useBreakpoint from "./hooks/useBreakpoint"
import classnames from "classnames"

import { FEEDBACK, MOBILE, PRODUCTS, TABLET } from "./constants/constants"

import Products from "./components/Products"
import Feedback from "./components/Feedback"

import './assets/css/styles.scss'

const App = () => {
  const [activeTab, setActiveTab] = useState(PRODUCTS)

  const breakpoint = useBreakpoint()

  const isMobile = breakpoint === MOBILE
  const isTablet = breakpoint === TABLET

  const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || isTablet) {
      const target = e.target as HTMLInputElement;
      setActiveTab(target.id)
    }
  }

  return (
    <div className={classnames("container", { "container__mobile": isMobile })}>
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

      <div className={classnames("main",
        {
          "main__tablet": isTablet,
          "main__mobile": isMobile
        })}>
      
        {(isMobile || isTablet) ?
          activeTab === PRODUCTS
            ? <Products isMobile={isMobile} isTablet={isTablet} />
            : <Feedback isMobile={isMobile} isTablet={isTablet} />
          : (
            <>
              <Products isMobile={isMobile} isTablet={isTablet} />
              <Feedback isMobile={isMobile} isTablet={isTablet} />
            </>
          )
        }
      </div>
    </div>
  )
}

export default App
