import Campus from './Campus';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		selectedCampus: state.campuses.selected,
		students: state.campuses.filteredStudents
	}
}

const CampusContainer = connect(mapStateToProps)(Campus)

export default CampusContainer