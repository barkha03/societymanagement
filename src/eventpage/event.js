import React from 'react';

class EventPage extends React.Component{

    render(){


        return(<div>
             <div id="wrapper">

        
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                        UPDATE
                    </a>
                </li>
                
                <li>
                    <a href="#"  data-toggle="collapse" data-target="#demo">Dashboard</a>
                    <div id="demo" className="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing eli
  </div>
                </li>
                <li>
                <a href="#"  data-toggle="collapse" data-target="#demoo">Shortcuts</a>
                    <div id="demoo" className="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing eli
  </div>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
       
        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div class="col-lg-12">
                    <div className="container">
    <h2>Society Events</h2>
       
    <div className="card">
    <div className="card-body">
        <div className="row">
            <div className="col-md-4">
    <img className="card-img-top" src={require('../assets/event44.jpg')} /></div>
    <div className="col-md-8">
    <h3>Event Name:</h3>
     <h3>Date:</h3>
     <button type="button" class="btn btn-primary">Book Now</button>   
        </div></div>
        </div>
  </div>
  </div>
  

  <div className="row">
                    <div class="col-lg-12">
                        <div className="container">
    <div className="card">
    <div className="card-body">
        <div className="row">
            <div className="col-md-4">
    <img className="card-img-top" src={require('../assets/event33.jpg')}  /></div>
    <div className="col-md-8">
    <h3>Event Name:</h3>
     <h3>Date:</h3>
     <button type="button" class="btn btn-primary">Book Now</button>   
        </div></div>
        </div>
  </div>
  </div>
  </div>
  </div>

  <div className="row">
                    <div class="col-lg-12">
                        <div className="container">
    <div className="card">
    <div className="card-body">
        <div className="row">
            <div className="col-md-4">
    <img className="card-img-top" src={require('../assets/event55.JPG')}  /></div>
    <div className="col-md-8">
     <h3>Event Name:</h3>
     <h3>Date:</h3>
     <button type="button" class="btn btn-primary">Book Now</button>   
    
        </div></div>
        </div>
  </div>
  </div>
  </div>
  </div>

  <div className="row">
                    <div class="col-lg-12">
                        <div className="container">
    <div className="card">
    <div className="card-body">
        <div className="row">
        <div className="col-md-4">
    <img className="card-img-top" src={require('../assets/yoga.jpg')}/>
    </div>
    <div className="col-md-8">
    <h3>Event Name:</h3>
     <h3>Date:</h3>
     <button type="button" class="btn btn-primary">Book Now</button>   
   
    </div>
        </div>
        </div>
  </div>
  </div>
  </div>
  </div>

                    </div>
                </div>
            </div>
        </div>
        

    </div>
            </div>

         )
        }
}

export default EventPage;


