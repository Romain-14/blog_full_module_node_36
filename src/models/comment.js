import Comments from "./comments.js";

class Comment{
    constructor(){
        this.id = Comments.getAll().length + 1;
        this.nickname = "";
        this.message = "";
        this.publishTime = new Date();
        this.story_id = null;
    }

    setComment(data){
        const { nickname, message, story_id } = data;

        this.nickname   = nickname;
        this.message = message;
        this.story_id  = story_id;
    }

}

export default Comment;