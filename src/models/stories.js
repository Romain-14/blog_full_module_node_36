import jsonfile from "jsonfile";
import path from "path";

const file = path.join(process.cwd(), "/src/data/stories.json");

class Stories {
	static getAll() {
		const stories = jsonfile.readFileSync(file);
		return stories;
	}

	static getById(id) {
		const stories = this.getAll();
		return stories.find((story) => story.id === id);
	}

	static add(story) {
		const stories = this.getAll();
		stories.push(story);
        
		jsonfile.writeFileSync(file, stories, { spaces: 4, EOL: "\r\n" });
	}
}

export default Stories;
