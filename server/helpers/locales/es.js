export default {
  translation: {
    appName: 'Gestor de Tareas',
    flash: {
      session: {
        create: {
          success: 'Has iniciado sesión',
          error: 'Correo electrónico o contraseña incorrectos',
        },
        delete: {
          success: 'Has cerrado sesión',
        },
      },
      user: {
        create: {
          error: 'No se pudo registrar el usuario',
          success: 'Usuario registrado con éxito',
        },
        edit: {
          error: 'No se pudo actualizar el usuario',
          success: 'Usuario actualizado con éxito',
        },
        delete: {
          error: 'No se pudo eliminar el usuario',
          success: 'Usuario eliminado con éxito',
        },
        accessError: 'No puedes editar o eliminar a otro usuario',
      },
      taskStatus: {
        create: {
          error: 'No se pudo crear el estado',
          success: 'Estado creado con éxito',
        },
        edit: {
          error: 'No se pudo actualizar el estado',
          success: 'Estado actualizado con éxito',
        },
        delete: {
          error: 'No se pudo eliminar el estado',
          success: 'Estado eliminado con éxito',
        },
      },
      label: {
        create: {
          error: 'No se pudo crear la etiqueta',
          success: 'Etiqueta creada con éxito',
        },
        edit: {
          error: 'No se pudo actualizar la etiqueta',
          success: 'Etiqueta actualizada con éxito',
        },
        delete: {
          error: 'No se pudo eliminar la etiqueta',
          success: 'Etiqueta eliminada con éxito',
        },
      },
      task: {
        create: {
          error: 'No se pudo crear la tarea',
          success: 'Tarea creada con éxito',
        },
        edit: {
          error: 'No se pudo actualizar la tarea',
          success: 'Tarea actualizada con éxito',
        },
        delete: {
          error: 'Solo el autor puede eliminar esta tarea',
          success: 'Tarea eliminada con éxito',
        },
      },
      authError: '¡Acceso denegado! Por favor, inicia sesión.',
    },
    layouts: {
      application: {
        title: 'Gestor de Tareas',
        users: 'Usuarios',
        taskStatuses: 'Estados',
        labels: 'Etiquetas',
        tasks: 'Tareas',
        signIn: 'Iniciar sesión',
        signUp: 'Registrarse',
        signOut: 'Cerrar sesión',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Iniciar sesión',
          submit: 'Entrar',
        },
      },
      user: {
        id: 'ID',
        name: 'Nombre completo',
        firstName: 'Nombre',
        lastName: 'Apellido',
        password: 'Contraseña',
        email: 'Correo electrónico',
        createdAt: 'Fecha de creación',
        new: {
          submit: 'Guardar',
          signUp: 'Registrarse',
        },
        edit: {
          title: 'Editar usuario',
          submit: 'Actualizar',
        },
        delete: {
          submit: 'Eliminar',
        },
      },
      welcome: {
        index: {
          hello: '¡Hola!',
          description: 'Cursos prácticos de programación',
          more: 'Saber más',
        },
      },
      taskStatus: {
        create: 'Crear estado',
        id: 'ID',
        name: 'Nombre',
        createdAt: 'Fecha de creación',
        new: {
          title: 'Crear estado',
          submit: 'Crear',
        },
        edit: {
          title: 'Editar estado',
          submit: 'Actualizar',
        },
        delete: {
          submit: 'Eliminar',
        },
      },
      label: {
        create: 'Crear etiqueta',
        id: 'ID',
        name: 'Nombre',
        createdAt: 'Fecha de creación',
        new: {
          title: 'Crear etiqueta',
          submit: 'Crear',
        },
        edit: {
          title: 'Editar etiqueta',
          submit: 'Actualizar',
        },
        delete: {
          submit: 'Eliminar',
        },
      },
      task: {
        create: 'Crear tarea',
        id: 'ID',
        name: 'Nombre',
        description: 'Descripción',
        statusId: 'Estado',
        status: 'Estado',
        creatorId: 'Autor',
        creator: 'Autor',
        executorId: 'Ejecutor',
        executor: 'Ejecutor',
        labels: 'Etiquetas',
        createdAt: 'Fecha de creación',
        new: {
          title: 'Crear tarea',
          submit: 'Crear',
        },
        edit: {
          title: 'Editar tarea',
          submit: 'Actualizar',
        },
        delete: {
          submit: 'Eliminar',
        },
        filter: {
          status: 'Estado',
          executor: 'Ejecutor',
          label: 'Etiqueta',
          isCreatorUser: 'Solo mis tareas',
          submit: 'Mostrar',
        },
      },
    },
  },
};
