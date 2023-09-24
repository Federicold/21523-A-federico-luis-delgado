const router = require('express').Router();
const {
    updatePost,
    newPost,
    deletePost,
    getPosts,
    obtenerPublicaciones,
} = require('../controllers/blog.controllers');

// ====================================================
//          Rutas para manejar Vistas (views)
// ====================================================
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})


// ====================================================
//              Rutas para manejar Datos
// ====================================================
// Ruta para obtener todas las publicaciones
router.get('/publicaciones/', obtenerPublicaciones);

// Ruta para obtener una publicación
router.get('/publicacion/:id', getPosts);

// Ruta para crear nueva publicación
router.post('/publicacion/', newPost);

// Ruta para actualizar publicación
router.put('/publicacion/:id', updatePost);

// Ruta para eliminar publicación
router.delete('/publicacion/:id', deletePost);



module.exports = router;