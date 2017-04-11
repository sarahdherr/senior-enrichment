import { connect } from 'react-redux';
import Student from './Student';

const mapStateToProps = (state) => {
	return {
		selectedStudent: state.students.selected,
		selectedCampus: state.students.campus
	}
}

const StudentContainer = connect(mapStateToProps)(Student);

export default StudentContainer;