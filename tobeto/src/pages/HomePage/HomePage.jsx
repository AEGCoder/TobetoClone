import React from 'react'
import MainComp from '../../components/Main/MainComp'
import Content from '../../components/contents/Content'
import Contents1Bottom from '../../components/Contents1Bottom/Contents1Bottom'
import Contents2Bottom from '../../components/Contents2Bottom/Contents2Bottom'
import HomeCollapse from '../../components/collapse/HomeCollapse'
import FooterUp from '../../components/FooterUp/FooterUp'
import Footer from '../../components/Footer/Footer'
const HomePage = () => {



  return (
    <div>
        <MainComp />
         <Content /> 
         <Contents1Bottom />
         <Contents2Bottom />
         <HomeCollapse />
         <FooterUp />
        <Footer /> 
    </div>
  )
}

export default HomePage