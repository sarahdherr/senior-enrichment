'use strict'
import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

import AppContainer from './containers/AppContainer';
import Home from './components/Home';
import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import StudentsContainer from './containers/StudentsContainer';
import StudentContainer from './containers/StudentContainer';

import { receiveCampuses, getCampus } from './action-creators/campuses';
import { receiveStudents, getStudent } from './action-creators/students';

// Loads all students and campuses when first arriving to site
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

// Loads correct campus when going to a single campus view
const onCampusEnter = function(nextRouterState) {
  const campusId = nextRouterState.params.campusId;
  store.dispatch(getCampus(campusId));
}

// Loads correct student when going to a single student view
const onStudentEnter = function(nextRouterState) {
  const studentId = nextRouterState.params.studentId;
  store.dispatch(getStudent(studentId));
}

// Root component with all route paths
export default function Root() {
  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
      	<Route path='/' component={ AppContainer } onEnter={onAppEnter} >
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