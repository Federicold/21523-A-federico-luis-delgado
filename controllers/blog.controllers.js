const ctrl = {};
const Publicacion = require('../models/Publicacion');

// Controlador para crear nueva publicación
ctrl.newPost = async (req, res) => {

    // const { titulo, detalle, url_imagen, fecha, autor } = req.body

    try {
        const publicacion = await Publicacion.create(req.body)
        await publicacion.save()

        return res.json({
            msg: 'Fantástico publicación creada con éxito!',
            publicacion
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "Error al crear la Publicación!"
        })
    }

};

// Controlador para obtener todas las publicaciones
ctrl.obtenerPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll();
        return res.json(publicaciones)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "Error al consultar las publicaciones!"
        })
    }
};

// Controlador para obtener una publicación
ctrl.getPosts = async (req, res) => {
    try {
        const { id } = req.params;
        const publicacion = await Publicacion.findByPk(id);
        return res.json(publicacion)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al obtener Publicación!"
        })
    }

};

// Controlador para actualizar una publicación
ctrl.updatePost = async (req, res) => {
    const { id } = req.params;
    
    try {
        const publicacion = await Publicacion.findByPk(id);
        publicacion.set(req.body)
        await publicacion.save();
        return res.json({
            msg: 'Publicación actualizada con éxito!'
        })  
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al actualizar Publicación!"
        })
    }
};

// Controlador para eliminar una publicación
ctrl.deletePost = async (req, res) => {

};


module.exports = ctrl;