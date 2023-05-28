import { uid } from 'uid';

export default class Skill {
	constructor() {
		this.id = uid();
		this.title = '';
	}
}
