'use strict'
import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

import App from './components/App';
import Home from './components/Home';
import CampusesContainer from './components/CampusesContainer';
import CampusContainer from './components/CampusContainer';
import StudentsContainer from './components/StudentsContainer';
import StudentContainer from './components/StudentContainer';

import { receiveCampuses, getCampus } from './action-creators/campuses';
import { receiveStudents, getStudent } from './action-creators/students';

// Add students after actions/reducer created
const onAppEnter = () => {
  const pCampuses = axios.get('/api/campuses');
  const pStudents = axios.get('/api/students');

  return Promise
    .all([pCampuses, pStudents])
    .then(responses => responses.map(r => r.data))
    .then(([campuses, students]) => {
      store.dispatch(receiveCampuses(campuses));
      store.dispatch(receiveStudents(students));
    })
}

const onCampusEnter = function(nextRouterState) {
  const campusId = nextRouterState.params.campusId;
  store.dispatch(getCampus(campusId));
}

const onStudentEnter = function(nextRouterState) {
  const studentId = nextRouterState.params.studentId;
  store.dispatch(getStudent(studentId));
}

export default function Root() {
  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
      	<Route path='/' component={ App } onEnter={onAppEnter} >
      		<Route path='/home' component={ Home } />
      		<Route path='/campuses' component={ CampusesContainer } />
      		<Route path='/campuses/:campusId' component={ CampusContainer } onEnter={onCampusEnter} />
      		<Route path='/students' component={ StudentsContainer } />
      		<Route path='/students/:studentId' component={ StudentContainer } onEnter={onStudentEnter} />
      		<IndexRedirect to='/home' />
      	</Route>
      </Router>
    </Provider>
  )
}