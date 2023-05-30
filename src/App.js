import React from 'react';
import "./styles/App.css"
import {  FaSearch } from "react-icons/fa";
import {GrNotification} from "react-icons/gr";
import DetailCard from './DetailCard';

function App() {
  return <div>

    <div className='container'>

    <div className='top'>
      <FaSearch />
      <input className='inptop' placeholder='Write Something' />
      <GrNotification />
    </div>

    {/* Detail */}
    <div className='detail'>

      <div className='det1'>
        <img src = "" />
        <p>Name</p>
        <p>Country</p>
        <p>Position</p>
        <button> Like </button>

      </div>

      <div className='det2'>
        <h3>Personal Detail</h3>

<div className='flexrow'>
        <div className='det3' >
          <DetailCard name = "Name" data = "Himanshu" />
          <DetailCard name = "Email" data = "hima707ch" />
          <DetailCard name = "xyz123" data = "abc123" />
        </div>

        <div className='det3' >
          <DetailCard name = "Name" data = "Himanshu" />
          <DetailCard name = "Email" data = "hima707ch" />
          <DetailCard name = "xyz123" data = "abc123" />
        </div>
</div>
    </div>

    </div>






    <div className='detail'>

<div className='det1'>
  <img src = "" />
  <p>Name</p>
  <p>Country</p>
  <p>Position</p>
  <button> Like </button>

</div>

<div className='det2'>
  <h3>Personal Detail</h3>

<div className='flexrow'>
  <div className='det3' >
    <DetailCard name = "Name" data = "Himanshu" />
    <DetailCard name = "Email" data = "hima707ch" />
    <DetailCard name = "xyz123" data = "abc123" />
  </div>

  <div className='det3' >
    <DetailCard name = "Name" data = "Himanshu" />
    <DetailCard name = "Email" data = "hima707ch" />
    <DetailCard name = "xyz123" data = "abc123" />
  </div>
</div>
</div>

</div>










  </div>
  
  </div>
}

export default App;
