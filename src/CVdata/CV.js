import Education from './Education';
import Personal from './Personal';
import WorkExperience from './WorkExperience';

export default class CV {
	constructor() {
		this.personal = new Personal();
		this.education = [new Education()];
		this.work = [new WorkExperience()];
		this.skills = ['skill 1'];
		this.summary = ['summary'];
	}
}
