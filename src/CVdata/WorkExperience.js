import { uid } from 'uid';

export default class WorkExperience {
	constructor() {
		this.id = uid();
		this.jobTitle = '';
		this.employer = '';
		this.location = '';
		this.startDate = '';
		this.endDate = '';
		this.currently = false;
		this.description = '';
	}
}
