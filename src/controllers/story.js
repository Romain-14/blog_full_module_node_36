import Story from "../models/story.js";
import Stories from "../models/stories.js";
import Comment from "../models/comment.js";
import Comments from "../models/comments.js";

const add = (req, res) => {
	const newStory = new Story();
	newStory.setStory(req.body);

	Stories.add(newStory);
	res.redirect("/");
};

const addComment = (req, res) => {
    const newComment = new Comment();
    console.log(req.body);
    const data = {
        ...req.body,
        story_id: Number(req.params.id),
    } 
    newComment.setComment(data);

    Comments.add(newComment);
    res.redirect(`/story/${newComment.story_id}`);
};

export { add,addComment };