import { uid } from 'uid';

export default class Education {
	constructor() {
		this.id = uid();
		this.schoolName = '';
		this.location = '';
		this.qualification = '';
		this.fieldOfStudy = '';
		this.startDate = '';
		this.endDate = '';
		this.currently = false;
	}
}
