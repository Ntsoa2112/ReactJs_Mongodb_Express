var controller = require('../controller/controller'); 
// On injecte le router d'express, nous en avons besoin pour définir les routes 
module.exports = function(router) { 
    // cette route va appeler la méthode index() du contrôleur     
    router.get('/', controller.index); 
    router.get('/list', controller.list_users); 
};