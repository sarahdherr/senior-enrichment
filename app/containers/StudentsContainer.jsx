import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import axios from 'axios';

import FilterInput from '../components/FilterInput';
import AddStudent from '../components/AddStudent';
import Students from '../components/Students';

import { addStudent, deleteStudent } from '../action-creators/students';

class StudentsContainer extends React.Component {

  constructor (props) {
    super(props);

    // local states to toggle buttons and save search input value
    this.state = {
      search: false,
      inputValue: '',
      addStudent: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // function to handle inputs in the search bar, updating the local state
  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  // function to toggle if the search bar is displayed based on clicking the search button
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

  // function to toggle if the add form is displayed based on clicking the add button
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

  // If delete button is clicked, the delete express route is called and the page is reloaded
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

// Adds list of students and list of campuses to the <StudentsContainer /> props
const mapStateToProps = (state) => {
  return {
    students: state.students.list,
    campuses: state.campuses.list
  }
}

export default connect(mapStateToProps)(StudentsContainer);