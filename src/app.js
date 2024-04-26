import express from "express";
import path from "path";

import router from "./Router/index.routes.js";

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "/src/views"));

app.use(express.static(path.join(process.cwd(), "/public")));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(router);

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
