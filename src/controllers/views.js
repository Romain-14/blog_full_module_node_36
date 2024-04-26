import Stories from "../models/stories.js";
import Comments from "../models/comments.js";

const home_view = (req, res) => {
    const stories  = Stories.getAll();
    const comments = Comments.getAll();
    const commentsSortedByDate = comments.sort((a, b) => new Date(b.publishTime) - new Date(a.publishTime));
    const commentsLimited = commentsSortedByDate.slice(0, 3);
    
    res.render("index", {
        title: "Bienvenue sur mon blog, lisez de fantastiques récits sur mes voyages ! - Accueil",
        stories,
        commentsLimited
    });
}

const story_view = (req, res) => {
    const id = Number(req.params.id);
    const story = Stories.getById(id);
    const comments = Comments.getAllByStoryId(id);
    if(story){
        res.render("story", {
            title: `bienvenue sur l'article de mes vacances en ${story.title} - Page story`,
            story,
            comments
        });
    } else {
        res.redirect("/");
    }
}

const not_found_view = (req, res) => {
    res.render("not-found", {
        title: "Perdues au fin fond d'une prairie avec quelques moutons, il n'y a pas de document ici :(",
    });
}

const admin_view = (req, res) => {
    res.render("admin", {
        title: "Espace d'administration",
    });
}

export { home_view, story_view, not_found_view, admin_view};