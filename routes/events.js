
// Todas tienen que pasar por la validacion del JWT
// Obtener eventos
router.get('/', getEventos);


// Crear un nuevo evento
router.post('/', crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);


// Borrar evento
router.delete('/:id', eliminarEvento);
