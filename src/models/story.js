import Stories from "./stories.js";

class Story{
    constructor(){
        this.id = Stories.getAll().length + 1;
        this.title = "";
        this.content = "";
        this.publishTime = new Date();
        this.author = "Admin";
        this.img_src = "kebab-paysage.webp";
    }

    setStory(data){
        const { title, content, author } = data;

        this.title   = title;
        this.content = content;
        this.author  = author;
    }

}

export default Story;