import React from 'react';
import { connect } from 'react-redux';

import { addStudent, deleteStudent } from '../action-creators/students';

import axios from 'axios';
import { hashHistory } from 'react-router';

import FilterInput from './FilterInput';
import AddStudent from './AddStudent';
import Students from './Students';

const mapStateToProps = (state) => {
  return {
    students: state.students.list,
    campuses: state.campuses.list
  }
}

class StudentsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      search: false,
      inputValue: '',

      addStudent: false,
      name: '',
      email: '',
      enrolledIn: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    // this.submitStudent = this.submitStudent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  handleSearch (evt) {
    if (this.state.search) {
      this.setState({ search: false })
    } else {
      this.setState({
        addStudent: false,
        search: true
      })
    }
  }

  handleAddButton (evt) {
    if (this.state.addStudent) {
      this.setState({ addStudent: false })
    } else {
      this.setState({
        search: false,
        addStudent: true
      })
    }
  }

  // submitStudent(student) {
  //   let nameAddOn;
  //   if (student.name.split(' ').length !== 1) { 
  //     nameAddOn = student.name.split(' ')[0].toLowerCase() 
  //   } else { 
  //     nameAddOn = student.name.toLowerCase()
  //   }
    
  //   student.imgUrl = 'https://s-media-cache-ak0.pinimg.com/736x/e5/0a/a7/e50aa75ca28265b5cc69f92c055e6ee4.jpg';
  //   student.github = 'github.com/' + nameAddOn;

  //   addStudent(student)
  // }

  handleDelete (studentId) {
    axios.delete(`/api/students/${studentId}`)
      .then(() => window.location.reload())
  }

  render () {

    const inputValue = this.state.inputValue;
    const filteredStudents = this.props.students.filter(student =>
      student.name.toLowerCase().match(inputValue.toLowerCase()));

    return (
      <div className='filterable-students'>
        <h2 className='page-title'>Our Students</h2>
        <div className='clearfix'></div>
        <div>
          <div className='students-buttons'>
            <div className='search-button' onClick={this.handleSearch}><img className='search-img' src='http://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/256/search-icon.png' /></div>
            <div className='add-student-button' onClick={this.handleAddButton}><img className='add-student-img' src='http://icons.iconarchive.com/icons/icons8/windows-8/256/Users-Add-User-icon.png' /></div>
          </div>
          {this.state.search ? 
            (<div>
              <FilterInput
                handleChange={this.handleChange}
                inputValue={inputValue}
              />
            </div>
             ) : (
            <div></div>)
          }

          {this.state.addStudent ? 
            (<div>
              <AddStudent
                
                campuses={this.props.campuses}
              />
            </div>
             ) : (
            <div></div>)
          }
          <div className='clearfix' />
          <Students students={filteredStudents} handleDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(StudentsContainer);
