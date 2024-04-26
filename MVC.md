parcours des fichiers pour la requête de la page d'accueil

1. server.js ( middleware app.use(router) )
2. router/index.routes.js ( get("/") )
3. controller/views.js ( fonction home_view)
4. models/stories.js ( méthode getAll() demandée)
5. controller/views.js ( réponse vue page d'accueil en envoyant les stories)
6. views/index.ejs ( rendu depuis le controller )