import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Header } from "../common/Header"
import { Home } from "../components/home/Home"
import { BoughtBefore } from "../components/page/BoughtBefore"
import { Specials } from "../components/page/Specials"
import { Blog } from "../components/page/Blog"
import { Contact } from "../components/page/Contact"
import { SideContent } from "../components/side/SideContent"

const Pages = () => {
  return (
    <>
      <div className='main-div'>
        <div className='side'>
          <SideContent />
        </div>
        <main>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/boughtBefore' component={BoughtBefore} />
              <Route exact path='/specials' component={Specials} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </Router>
        </main>
      </div>
    </>
  )
}

export default Pages;
