import jsonfile from "jsonfile";
import path from "path";

const file = path.join(process.cwd(), "/src/data/comments.json");

class Comments {
	static getAll() {
		const comments = jsonfile.readFileSync(file);
		return comments;
	}

	static getAllByStoryId(storyId) {
		const comments = this.getAll();
		return comments.filter((comment) => comment.story_id === storyId);
	}

	static add(comment) {
		const comments = this.getAll();
		comments.push(comment);
        
		jsonfile.writeFileSync(file, comments, { spaces: 4, EOL: "\r\n" });
	}
}

export default Comments;
