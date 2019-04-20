import React, { Component } from 'react';
import logo from './logo.svg';
import profile from './profiles.jpg';
import './App.css';
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
            <div className="card">
              <img src={profile} alt="pic" className="pic"/>
              <h1 id="head"> Tunyarat Mokon </h1>
                <p className="title"> Frontend Developer </p>
                <div className="row">
                  <div className="column1">
                    <h5 id="head"> About </h5>
                      <p id="p">I graduated from Dhurakij Pundit University Faculty of Digital Media and Game System Engineering. I have an interest programming and want to be Web Full - Stack Developer.</p>
                    <h5 id="head"> Profile </h5>
                      <p id="p"> 2/4 Moo 3 Sub district Bangplub District Parkkret Nonthaburi 11120 </p>
                      <IconFont type="icon-facebook"/> 
                        <span id="p"> facebook.com/ungink.huhu </span> <br />
                      <Icon type="phone" />
                        <span id="p"> 085-8245148 </span> <br />
                      <Icon type="mail" />
                        <span id="p"> tunyarat8146@gmail.com </span>
                  </div>
                   
                  <div className="column2 line">
                    <h5 id="head"> Skills </h5>
                      <p id="p"> - Knowledge of the use nodejs, html, css, bootstrap framework, ant design framework, semantic framework, react, Vue.js, jQuery, MVC, mySQL </p>
                      <p id="p"> - Teamwork is good </p>
                      <p id="p"> - Can use version control / Git </p>
                    <h5 id="head"> Work Experience </h5>
                      <strong className="titlework"> Buzz freeze solution </strong>
                      <strong className="txtright"> 2018 - March 2019 </strong>
                      <p id="p"> I am working with BuzzFreeze Solution as a contractor to Sansiri Co. Ltd., for a year using stacks of VB.net, C#.net, Javascript(Vue.js) and Mostly use SQL Server as a Database </p>
                    <h5 id="head"> Education </h5>
                      <strong className="titlework"> College </strong>
                      <strong className="txtright"> 2007 - 2012</strong>
                      <p id="p"> Siam Business Administation Technological College Nonthaburi (Sbac) </p>
                      <strong className="titlework"> University </strong>
                      <strong className="txtright"> 2012 - 2017</strong>
                      <p id="p"> Bacheior of Dhurakij Pundit University Faculty of Digital Media and Game System Engineering </p>
                  </div>

                </div>
            </div>
        
        </header>
      </div>
    );
  }
}

export default App;
