import classnames from "classnames"

import useBreakpoint from "./hooks/useBreakpoint"
import { MOBILE, TABLET } from "./constants/constants"

import MobileView from "./components/MobileView"
import Products from "./components/Products"
import Feedback from "./components/Feedback"

import './assets/css/styles.scss'

const App = () => {
  const breakpoint = useBreakpoint()

  const isMobile = breakpoint === MOBILE
  const isTablet = breakpoint === TABLET

  return (

    <div className={classnames("container", { "container__mobile": isMobile })}>
      {(isMobile || isTablet)
        ? <MobileView />
        : (
          <>
            <div className="header">
              <div className="tab tab__left">Products</div>
              <div className="tab tab__right">Feedback</div>
            </div>

            <div className="main">
              <Products />
              <Feedback />
            </div>
          </>
        )
      }
    </div>
  )
}

export default App
