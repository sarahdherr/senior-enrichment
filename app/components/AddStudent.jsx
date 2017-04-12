import React, { Component } from 'react';
import axios from 'axios';

import store from '../store';
import { getStudents } from '../action-creators/students';
import { generateRandomKitty } from '../utils';

export default class AddStudent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      enrolledIn: '',
      campusId: ''
    }

    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePhone = this.handlePhone.bind(this)
    this.handleCampus = this.handleCampus.bind(this)
    this.handleProgram = this.handleProgram.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // saves inputed name to local state
  handleName(evt) {
    evt.preventDefault()
    this.setState({
      name: evt.target.value
    })
  }

  // saves inputed email to local state
  handleEmail(evt) {
    evt.preventDefault()
    this.setState({
      email: evt.target.value
    })
  }

  // saves inputed phone to local state
  handlePhone(evt) {
    evt.preventDefault()
    this.setState({
      phone: evt.target.value
    })
  }

  // saves selected campus to local state as it's id
  handleCampus(evt) {
    evt.preventDefault()
    const campusKey = this.props.campuses.filter(campus => campus.name === evt.target.value )[0].id
    this.setState({
      campusId: +campusKey
    })
  }

  // saves selected program to local state as first word (`Immersive` or `Part-time`)
  handleProgram(evt) {
    evt.preventDefault()
    this.setState({
      enrolledIn: evt.target.value.split(' ')[0]
    })
  }

  // on submit, sends local state to db as new student (through express route)
  handleSubmit(evt) {
    const studentObj = this.state;
    const nameAddOn = studentObj.name.split(' ')[0].toLowerCase() 
    
    // adds github based on inputed name and random kitten img to student object 
    studentObj.imgUrl = generateRandomKitty();
    studentObj.github = 'github.com/' + nameAddOn;

    // sends student object to db as new student and reloads page
    axios.post(`/api/students`, studentObj)
      .then(() => store.dispatch(getStudents()))
      .then(() => window.location.reload())
  }

  render() {
    return (
      <form className='form-group add-student-form' style={{marginTop: '1%', marginLeft: '18%', marginRight: '13%'}} onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input  onChange={this.handleName} className='form-control' placeholder="Student name" />
        
        <label style={{marginTop: '2%'}}>Email:</label>
        <input onChange={this.handleEmail} className='form-control' placeholder="Student email" />
        
        <label style={{marginTop: '2%'}}>Phone Number:</label>
        <input onChange={this.handlePhone} className='form-control' placeholder="Student phone number" />
        
        
        <label style={{marginTop: '2%'}}>Campus:</label>
        <select onChange={this.handleCampus} className="form-control">
          <option></option>
          {
            this.props.campuses && this.props.campuses.map( campus => <option key={campus.id}>{campus.name}</option> )
          }
        </select>

        <label style={{marginTop: '2%'}}>Program:</label>
        <select onChange={this.handleProgram} className="form-control">
          <option></option>
          <option>Immersive Program</option>
          <option>Part-time Program</option>
        </select>
        
        <button className="btn add-student-submit" type="submit">Add Student</button>
      </form>
    )
  }
}

