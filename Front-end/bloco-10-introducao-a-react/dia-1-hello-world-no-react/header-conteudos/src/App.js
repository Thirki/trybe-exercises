import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'
import './style.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Content/>
        <Footer/>
      </>
    )
  }
}
export default App;