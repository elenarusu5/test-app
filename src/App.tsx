import { useState } from "react"
import useBreakpoint from "./hooks/useBreakpoint"
import classnames from "classnames"

import { FEEDBACK, MOBILE, PRODUCTS, TABLET } from "./constants/constants"

import Products from "./components/Products"
import Feedback from "./components/Feedback"

import './assets/css/styles.scss'

export type FormProps = {
  name: string
  phone: string
  email: string
  message: string
}

const App = () => {
  const [activeTab, setActiveTab] = useState<string>(PRODUCTS)
  const [data, setData] = useState<FormProps>({
    name: "",
    phone: "",
    email: "",
    message: ""
  })

  const breakpoint = useBreakpoint()

  const isMobile = breakpoint === MOBILE
  const isTablet = breakpoint === TABLET

  const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || isTablet) {
      const target = e.target as HTMLInputElement;
      setActiveTab(target.id)
    }
  }
console.log('test deploy')
  return (
    <div className={classnames("container", { "container__mobile": isMobile })}>
      <div className={classnames("header", { "header__mobile": isMobile || isTablet })}>
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
            ? <Products
              isMobile={isMobile}
              isTablet={isTablet}
            />
            : <Feedback
              data={data}
              setData={setData}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          : (
            <>
              <Products />
              <Feedback
                data={data}
                setData={setData}
              />
            </>
          )
        }
      </div>
    </div>
  )
}

export default App
