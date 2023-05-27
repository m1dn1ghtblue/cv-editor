import Education from './Education';
import WorkExperience from './WorkExperience';

export default class CV {
	constructor() {
		this.personal = {
			firstName: 'firstName',
			lastName: 'lastName',
			address: '',
			postcode: '',
			city: '',
			phone: '',
			email: '',
		};
		this.education = [new Education()];
		this.work = [new WorkExperience()];
		this.skills = ['skill 1'];
		this.summary = ['summary'];
	}
}
