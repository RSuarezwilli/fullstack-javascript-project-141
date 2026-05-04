/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@fastify/cookie"
/*!**********************************!*\
  !*** external "@fastify/cookie" ***!
  \**********************************/
(module) {

module.exports = require("@fastify/cookie");

/***/ },

/***/ "@fastify/flash"
/*!*********************************!*\
  !*** external "@fastify/flash" ***!
  \*********************************/
(module) {

module.exports = require("@fastify/flash");

/***/ },

/***/ "@fastify/session"
/*!***********************************!*\
  !*** external "@fastify/session" ***!
  \***********************************/
(module) {

module.exports = require("@fastify/session");

/***/ },

/***/ "@fastify/view"
/*!********************************!*\
  !*** external "@fastify/view" ***!
  \********************************/
(module) {

module.exports = require("@fastify/view");

/***/ },

/***/ "dotenv/config"
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
(module) {

module.exports = require("dotenv/config");

/***/ },

/***/ "fastify-reverse-routes"
/*!*****************************************!*\
  !*** external "fastify-reverse-routes" ***!
  \*****************************************/
(module) {

module.exports = require("fastify-reverse-routes");

/***/ },

/***/ "i18next"
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
(module) {

module.exports = require("i18next");

/***/ },

/***/ "knex"
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
(module) {

module.exports = require("knex");

/***/ },

/***/ "objection"
/*!****************************!*\
  !*** external "objection" ***!
  \****************************/
(module) {

module.exports = require("objection");

/***/ },

/***/ "pug"
/*!**********************!*\
  !*** external "pug" ***!
  \**********************/
(module) {

module.exports = require("pug");

/***/ },

/***/ "rollbar"
/*!**************************!*\
  !*** external "rollbar" ***!
  \**************************/
(module) {

module.exports = require("rollbar");

/***/ },

/***/ "crypto"
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
(module) {

module.exports = require("crypto");

/***/ },

/***/ "path"
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
(module) {

module.exports = require("path");

/***/ },

/***/ "url"
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
(module) {

module.exports = require("url");

/***/ },

/***/ "./knexfile.js"
/*!*********************!*\
  !*** ./knexfile.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n\r\n\r\n\r\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_1__.dirname((0,url__WEBPACK_IMPORTED_MODULE_0__.fileURLToPath)(\"file:///root/documents/fullstack-javascript-project-141/knexfile.js\"));\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  development: {\r\n    client: 'sqlite3',\r\n    connection: {\r\n      filename: path__WEBPACK_IMPORTED_MODULE_1__.resolve(__dirname, 'database.sqlite'),\r\n    },\r\n    useNullAsDefault: true,\r\n    migrations: {\r\n      directory: path__WEBPACK_IMPORTED_MODULE_1__.resolve(__dirname, 'migrations'),\r\n    },\r\n  },\r\n  // NUEVA CONFIGURACIÓN PARA TESTS\r\n  test: {\r\n    client: 'sqlite3',\r\n    connection: ':memory:', // Base de datos en memoria para que sea limpia y rápida\r\n    useNullAsDefault: true,\r\n    migrations: {\r\n      directory: path__WEBPACK_IMPORTED_MODULE_1__.resolve(__dirname, 'migrations'),\r\n    },\r\n  },\r\n});\n\n//# sourceURL=webpack://@hexlet/code/./knexfile.js?\n}");

/***/ },

/***/ "./src/init.js"
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var _fastify_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fastify/view */ \"@fastify/view\");\n/* harmony import */ var pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pug */ \"pug\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! objection */ \"objection\");\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! knex */ \"knex\");\n/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rollbar */ \"rollbar\");\n/* harmony import */ var _models_Label_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/Label.js */ \"./src/models/Label.js\");\n/* harmony import */ var _models_TaskStatus_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/TaskStatus.js */ \"./src/models/TaskStatus.js\");\n/* harmony import */ var _models_Task_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/Task.js */ \"./src/models/Task.js\");\n/* harmony import */ var _models_users_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/users.js */ \"./src/models/users.js\");\n/* harmony import */ var _routes_sessions_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/sessions.js */ \"./src/routes/sessions.js\");\n/* harmony import */ var _routes_users_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/users.js */ \"./src/routes/users.js\");\n/* harmony import */ var _routes_statuses_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/statuses.js */ \"./src/routes/statuses.js\");\n/* harmony import */ var _routes_tasks_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/tasks.js */ \"./src/routes/tasks.js\");\n/* harmony import */ var _routes_labels_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/labels.js */ \"./src/routes/labels.js\");\n/* harmony import */ var fastify_reverse_routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! fastify-reverse-routes */ \"fastify-reverse-routes\");\n/* harmony import */ var _fastify_cookie__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fastify/cookie */ \"@fastify/cookie\");\n/* harmony import */ var _fastify_session__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fastify/session */ \"@fastify/session\");\n/* harmony import */ var _fastify_flash__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fastify/flash */ \"@fastify/flash\");\n/* harmony import */ var _knexfile_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../knexfile.js */ \"./knexfile.js\");\n//#!/usr/bin/env node\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Importación de Modelos\r\n\r\n\r\n\r\n\r\n\r\n// Importación de rutas\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Importación de plugins\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst __filename = (0,url__WEBPACK_IMPORTED_MODULE_5__.fileURLToPath)(\"file:///root/documents/fullstack-javascript-project-141/src/init.js\");\r\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_4__.dirname(__filename);\r\n\r\n// Configuración de Rollbar (Fuera de la función para que sea global)\r\nconst rollbar = new rollbar__WEBPACK_IMPORTED_MODULE_8__({\r\n  accessToken: process.env.ROLLBAR_TOKEN,\r\n  captureUncaught: true,\r\n  captureUnhandledRejections: true,\r\n  environment: \"development\" || 0,\r\n});\r\n\r\n// EXPORTACIÓN PRINCIPAL: Recibe exactamente 2 argumentos (app, options)\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (app, options) => {\r\n  \r\n  // 1. CONFIGURACIÓN DE BASE DE DATOS\r\n  const env = \"development\" || 0;\r\n  const knex = knex__WEBPACK_IMPORTED_MODULE_7__(_knexfile_js__WEBPACK_IMPORTED_MODULE_22__[\"default\"][env]);\r\n  objection__WEBPACK_IMPORTED_MODULE_6__.Model.knex(knex);\r\n\r\n  // 2. MANEJADOR DE ERRORES GLOBAL (Rollbar)\r\n  app.setErrorHandler((error, request, reply) => {\r\n    rollbar.error(error, request.raw);\r\n    app.log.error(error);\r\n    reply.status(error.statusCode || 500).send(error);\r\n  });\r\n\r\n  // 3. DECORADORES PARA OBJECTION\r\n  app.decorate('objection', {\r\n    models: {\r\n      user: _models_users_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\r\n      taskStatus: _models_TaskStatus_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\r\n      task: _models_Task_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\r\n      label: _models_Label_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\r\n    },\r\n  });\r\n\r\n  // 4. INICIALIZAR TRADUCCIONES\r\n  await i18next__WEBPACK_IMPORTED_MODULE_3__.init({\r\n    lng: 'es',\r\n    resources: {\r\n      es: {\r\n        translation: {\r\n          layouts: {\r\n            main: {\r\n              title: 'Mi Aplicación Hexlet',\r\n              brand: 'Hexlet Proyecto',\r\n              users: 'Usuarios',\r\n              statuses: 'Estados',\r\n              tasks: 'Tareas',\r\n              labels: 'Etiquetas',\r\n              footer_text: '© 2026 William Suarez - Estudiante de Software'\r\n            }\r\n          },\r\n          views: {\r\n            welcome: {\r\n              index: {\r\n                hello: '¡Hola desde el Jumbotron!',\r\n                description: 'Este es un ejemplo funcional usando Fastify, Pug y Bootstrap.',\r\n                more: 'Saber más'\r\n              }\r\n            }\r\n            // Agrega aquí el resto de tus traducciones si las necesitas\r\n          }\r\n        }\r\n      }\r\n    }\r\n  });\r\n\r\n  // 5. REGISTRO DE PLUGINS\r\n  await app.register(_fastify_cookie__WEBPACK_IMPORTED_MODULE_19__);\r\n  await app.register(_fastify_session__WEBPACK_IMPORTED_MODULE_20__, {\r\n    secret: process.env.SESSION_SECRET || 'a-very-long-secret-key-at-least-32-chars-long',\r\n    cookie: { secure: false },\r\n  });\r\n  await app.register(_fastify_flash__WEBPACK_IMPORTED_MODULE_21__);\r\n  await app.register(fastify_reverse_routes__WEBPACK_IMPORTED_MODULE_18__);\r\n\r\n  // 6. MOTOR DE PLANTILLAS\r\n  await app.register(_fastify_view__WEBPACK_IMPORTED_MODULE_1__, {\r\n    engine: { pug: pug__WEBPACK_IMPORTED_MODULE_2__ },\r\n    root: path__WEBPACK_IMPORTED_MODULE_4__.join(__dirname, 'views'),\r\n    defaultContext(reply) {\r\n      return {\r\n        route: (name, params = {}, query = {}) => {\r\n          try {\r\n            return app.reverse(name, params, query);\r\n          } catch (err) {\r\n            return '#';\r\n          }\r\n        },\r\n        t: (key) => i18next__WEBPACK_IMPORTED_MODULE_3__.t(key),\r\n        getMessages: () => (reply.flash ? reply.flash() : {}),\r\n        formatDate: (date) => (date ? new Date(date).toLocaleString() : ''),\r\n      };\r\n    },\r\n  });\r\n\r\n  // 7. REGISTRO DE RUTAS\r\n  (0,_routes_users_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(app);\r\n  (0,_routes_sessions_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(app);\r\n  (0,_routes_statuses_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(app);\r\n  (0,_routes_tasks_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(app);\r\n  (0,_routes_labels_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"])(app);\r\n\r\n  app.get('/', { name: 'root' }, async (request, reply) => {\r\n    return reply.view('index.pug');\r\n  });\r\n\r\n  // 8. CIERRE LIMPIO DE CONEXIONES\r\n  app.addHook('onClose', async () => {\r\n    await knex.destroy();\r\n  });\r\n\r\n  // Nota: No llamamos a app.listen(), de eso se encarga fastify-cli\r\n});\n(Object.getOwnPropertyDescriptor(__WEBPACK_DEFAULT_EXPORT__, \"name\") || {}).writable || Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, \"name\", { value: \"default\", configurable: true });\n\n//# sourceURL=webpack://@hexlet/code/./src/init.js?\n}");

/***/ },

/***/ "./src/lib/secure.js"
/*!***************************!*\
  !*** ./src/lib/secure.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   encrypt: () => (/* binding */ encrypt)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n\r\n\r\n// Usamos export const para que coincida con la importación { encrypt }\r\nconst encrypt = (password) => crypto__WEBPACK_IMPORTED_MODULE_0__.createHash('sha256')\r\n  .update(password)\r\n  .digest('hex'); \n\n//# sourceURL=webpack://@hexlet/code/./src/lib/secure.js?\n}");

/***/ },

/***/ "./src/models/Label.js"
/*!*****************************!*\
  !*** ./src/models/Label.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Label)\n/* harmony export */ });\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! objection */ \"objection\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n\r\n\r\n\r\n\r\nconst __filename = (0,url__WEBPACK_IMPORTED_MODULE_2__.fileURLToPath)(\"file:///root/documents/fullstack-javascript-project-141/src/models/Label.js\");\r\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_1__.dirname(__filename);\r\n\r\n\r\nclass Label extends objection__WEBPACK_IMPORTED_MODULE_0__.Model {\r\n  static get tableName() {\r\n    return 'labels';\r\n  }\r\n\r\n  static get jsonSchema() {\r\n    return {\r\n      type: 'object',\r\n      required: ['name'],\r\n      properties: {\r\n        id: { type: 'integer' },\r\n        name: { type: 'string', minLength: 1 },\r\n      },\r\n    };\r\n  }\r\n\r\n  static get relationMappings() {\r\n    return {\r\n      tasks: {\r\n        relation: objection__WEBPACK_IMPORTED_MODULE_0__.Model.ManyToManyRelation,\r\n        modelClass: path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, 'Task.js'),\r\n        join: {\r\n          from: 'labels.id',\r\n          through: {\r\n            from: 'tasks_labels.label_id',\r\n            to: 'tasks_labels.task_id',\r\n          },\r\n          to: 'tasks.id',\r\n        },\r\n      },\r\n    };\r\n  }\r\n}\n\n//# sourceURL=webpack://@hexlet/code/./src/models/Label.js?\n}");

/***/ },

/***/ "./src/models/Task.js"
/*!****************************!*\
  !*** ./src/models/Task.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! objection */ \"objection\");\n/* harmony import */ var _users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.js */ \"./src/models/users.js\");\n/* harmony import */ var _TaskStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskStatus.js */ \"./src/models/TaskStatus.js\");\n/* harmony import */ var _Label_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label.js */ \"./src/models/Label.js\");\n\r\n // Asegúrate que el nombre coincida (users.js o User.js)\r\n\r\n\r\n\r\nclass Task extends objection__WEBPACK_IMPORTED_MODULE_0__.Model {\r\n  static get tableName() {\r\n    return 'tasks';\r\n  }\r\n  \r\nstatic get columnNameMappers() {\r\n    return (0,objection__WEBPACK_IMPORTED_MODULE_0__.snakeCaseMappers)();\r\n  }\r\n\r\n  static get relationMappings() {\r\n    return {\r\n\r\n      // Dentro de Task.js, añade a relationMappings:\r\nlabels: {\r\n  relation: objection__WEBPACK_IMPORTED_MODULE_0__.Model.ManyToManyRelation,\r\n  modelClass: _Label_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n  join: {\r\n    from: 'tasks.id',\r\n    through: {\r\n      from: 'tasks_labels.task_id',\r\n      to: 'tasks_labels.label_id',\r\n    },\r\n    to: 'labels.id',\r\n  },\r\n},\r\n\r\n      status: {\r\n        relation: objection__WEBPACK_IMPORTED_MODULE_0__.Model.BelongsToOneRelation,\r\n        modelClass: _TaskStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n        join: { from: 'tasks.status_id', to: 'task_statuses.id' }, // Usa guion bajo aquí\r\n      },\r\n      creator: {\r\n        relation: objection__WEBPACK_IMPORTED_MODULE_0__.Model.BelongsToOneRelation,\r\n        modelClass: _users_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n        join: { from: 'tasks.creator_id', to: 'users.id' }, // Usa guion bajo aquí\r\n      },\r\n      executor: {\r\n        relation: objection__WEBPACK_IMPORTED_MODULE_0__.Model.BelongsToOneRelation,\r\n        modelClass: _users_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n        join: { from: 'tasks.executor_id', to: 'users.id' }, // Usa guion bajo aquí\r\n      },\r\n    };\r\n  }\r\n  \r\n  }\r\n\n\n//# sourceURL=webpack://@hexlet/code/./src/models/Task.js?\n}");

/***/ },

/***/ "./src/models/TaskStatus.js"
/*!**********************************!*\
  !*** ./src/models/TaskStatus.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskStatus)\n/* harmony export */ });\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! objection */ \"objection\");\n\r\n\r\nclass TaskStatus extends objection__WEBPACK_IMPORTED_MODULE_0__.Model {\r\n  static get tableName() {\r\n    return 'task_statuses';\r\n  }\r\n\r\n  // Esto convierte automáticamente snake_case de la DB a camelCase en JS\r\n  static get columnNameMappers() {\r\n    return (0,objection__WEBPACK_IMPORTED_MODULE_0__.snakeCaseMappers)();\r\n  }\r\n\r\n  // Esto es para la validación de datos (lo que tenías en el segundo return)\r\n  static get jsonSchema() {\r\n    return {\r\n      type: 'object',\r\n      required: ['name'],\r\n      properties: {\r\n        id: { type: 'integer' },\r\n        name: { type: 'string', minLength: 1 },\r\n      },\r\n    };\r\n  }\r\n}\n\n//# sourceURL=webpack://@hexlet/code/./src/models/TaskStatus.js?\n}");

/***/ },

/***/ "./src/models/users.js"
/*!*****************************!*\
  !*** ./src/models/users.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var objection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! objection */ \"objection\");\n/* harmony import */ var _lib_secure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/secure.js */ \"./src/lib/secure.js\");\n\r\n// Asegúrate de importar tu función de encriptación (ej. desde un utils o lib)\r\n \r\n\r\nclass User extends objection__WEBPACK_IMPORTED_MODULE_0__.Model {\r\n  static get tableName() {\r\n    return 'users';\r\n  }\r\n\r\n  // 1. Mapeo de nombres (snake_case en DB -> camelCase en JS)\r\n  static get columnNameMappers() {\r\n    return (0,objection__WEBPACK_IMPORTED_MODULE_0__.snakeCaseMappers)();\r\n  }\r\n\r\n  // 2. Esquema de validación (Lo que tenías atrapado en el segundo return)\r\n  static get jsonSchema() {\r\n    return {\r\n      type: 'object',\r\n      required: ['firstName', 'lastName', 'email', 'password'],\r\n      properties: {\r\n        id: { type: 'integer' },\r\n        firstName: { type: 'string', minLength: 1 },\r\n        lastName: { type: 'string', minLength: 1 },\r\n        email: { type: 'string', format: 'email' },\r\n        password: { type: 'string', minLength: 3 },\r\n      },\r\n    };\r\n  }\r\n\r\n  // 3. Lógica de encriptación antes de guardar\r\n  async $beforeInsert(queryContext) {\r\n    await super.$beforeInsert(queryContext);\r\n    if (this.password) {\r\n      this.passwordDigest = (0,_lib_secure_js__WEBPACK_IMPORTED_MODULE_1__.encrypt)(this.password);\r\n    }\r\n  }\r\n\r\n  async $beforeUpdate(opt, queryContext) {\r\n    await super.$beforeUpdate(opt, queryContext);\r\n    if (this.password) {\r\n      this.passwordDigest = (0,_lib_secure_js__WEBPACK_IMPORTED_MODULE_1__.encrypt)(this.password);\r\n    }\r\n  }\r\n\r\n  // Método para verificar la contraseña en el Login\r\n  verifyPassword(password) {\r\n    return this.passwordDigest === (0,_lib_secure_js__WEBPACK_IMPORTED_MODULE_1__.encrypt)(password);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://@hexlet/code/./src/models/users.js?\n}");

/***/ },

/***/ "./src/routes/labels.js"
/*!******************************!*\
  !*** ./src/routes/labels.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Label_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Label.js */ \"./src/models/Label.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((app) => {\r\n  app\r\n    .get('/labels', { name: 'labels' }, async (req, reply) => {\r\n      const labels = await _models_Label_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query();\r\n      return reply.view('labels/index', { labels });\r\n    })\r\n    .get('/labels/new', { name: 'labels_new' }, async (req, reply) => {\r\n      const label = new _models_Label_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n      return reply.view('labels/new', { label });\r\n    })\r\n    .get('/labels/:id/edit', { name: 'labels_edit' }, async (req, reply) => {\r\n      const label = await _models_Label_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query().findById(req.params.id);\r\n      return reply.view('labels/edit', { label });\r\n    })\r\n    .post('/labels', { name: 'labels_create' }, async (req, reply) => {\r\n      try {\r\n        // Asumiendo que los datos vienen en req.body.data según tu estándar\r\n        const label = await _models_Label_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fromJson(req.body.data);\r\n        await _models_Label_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query().insert(label);\r\n        req.flash('info', 'Etiqueta creada con éxito');\r\n        return reply.redirect(app.reverse('labels'));\r\n      } catch ({ data }) {\r\n        req.flash('error', 'Fallo al crear');\r\n        return reply.view('labels/new', { label: req.body.data, errors: data });\r\n      }\r\n    })\r\n    .patch('/labels/:id', { name: 'labels_update' }, async (req, reply) => {\r\n      try {\r\n        const { id } = req.params;\r\n        const label = await _models_Label_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query().findById(id);\r\n        await label.$query().patch(req.body.data);\r\n        req.flash('info', 'Etiqueta actualizada correctamente');\r\n        return reply.redirect(app.reverse('labels'));\r\n      } catch ({ data }) {\r\n        req.flash('error', 'Fallo al actualizar');\r\n        const label = { ...req.body.data, id: req.params.id };\r\n        return reply.view('labels/edit', { label, errors: data });\r\n      }\r\n    })\r\n    .delete('/labels/:id', { name: 'labels_delete' }, async (req, reply) => {\r\n      const { id } = req.params;\r\n      const label = await _models_Label_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query().findById(id).withGraphFetched('tasks');\r\n\r\n      if (label.tasks && label.tasks.length > 0) {\r\n        req.flash('error', 'No se puede eliminar una etiqueta que tiene tareas asociadas');\r\n        return reply.redirect(app.reverse('labels'));\r\n      }\r\n\r\n      await _models_Label_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query().deleteById(id);\r\n      req.flash('info', 'Etiqueta eliminada con éxito');\r\n      return reply.redirect(app.reverse('labels'));\r\n    });\r\n});\n(Object.getOwnPropertyDescriptor(__WEBPACK_DEFAULT_EXPORT__, \"name\") || {}).writable || Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, \"name\", { value: \"default\", configurable: true });\n\n//# sourceURL=webpack://@hexlet/code/./src/routes/labels.js?\n}");

/***/ },

/***/ "./src/routes/sessions.js"
/*!********************************!*\
  !*** ./src/routes/sessions.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((app) => {\r\n  app\r\n    .get('/session/new', { name: 'newSession' }, (req, reply) => {\r\n      return reply.view('sessions/new.pug', { signInForm: {} });\r\n    })\r\n    .post('/session', { name: 'session' }, async (req, reply) => {\r\n      const { data } = req.body;\r\n      try {\r\n        const user = await app.objection.models.user.query().findOne({ email: data.email });\r\n\r\n        if (user && user.passwordDigest === data.password) {\r\n          req.session.set('userId', user.id);\r\n          req.flash('info', 'Bienvenido');\r\n          return reply.redirect(app.reverse('root'));\r\n        }\r\n\r\n        req.flash('error', 'Email o contraseña incorrectos.');\r\n        return reply.view('sessions/new.pug', { signInForm: data });\r\n      } catch (err) {\r\n        return reply.redirect(app.reverse('newSession'));\r\n      }\r\n    })\r\n    .delete('/session', { name: 'deleteSession' }, (req, reply) => {\r\n      req.session.delete();\r\n      return reply.redirect(app.reverse('root'));\r\n    });\r\n});\n(Object.getOwnPropertyDescriptor(__WEBPACK_DEFAULT_EXPORT__, \"name\") || {}).writable || Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, \"name\", { value: \"default\", configurable: true });\n\n//# sourceURL=webpack://@hexlet/code/./src/routes/sessions.js?\n}");

/***/ },

/***/ "./src/routes/statuses.js"
/*!********************************!*\
  !*** ./src/routes/statuses.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((app) => {\r\n  app\r\n    .get('/statuses', { name: 'statuses' }, async (req, reply) => {\r\n      const statuses = await app.objection.models.taskStatus.query();\r\n      return reply.view('statuses/index.pug', { statuses });\r\n    })\r\n    .get('/statuses/new', { name: 'newStatus' }, (req, reply) => {\r\n      return reply.view('statuses/new.pug', { status: {} });\r\n    }) \r\n    // AGREGAMOS EL NOMBRE AQUÍ: 'createStatus'\r\n    .post('/statuses', { name: 'createStatus' }, async (req, reply) => {\r\n      try {\r\n        const status = await app.objection.models.taskStatus.fromJson(req.body.data);\r\n        await app.objection.models.taskStatus.query().insert(status);\r\n        \r\n        req.flash('info', 'Estado creado correctamente');\r\n        return reply.redirect(app.reverse('statuses')); // Uso de reverse seguro\r\n      } catch (err) {\r\n        req.flash('error', 'Error al crear el estado');\r\n        return reply.view('statuses/new.pug', { \r\n          status: req.body.data, \r\n          errors: err.data \r\n        });\r\n      }\r\n    });\r\n});\n(Object.getOwnPropertyDescriptor(__WEBPACK_DEFAULT_EXPORT__, \"name\") || {}).writable || Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, \"name\", { value: \"default\", configurable: true });\n\n//# sourceURL=webpack://@hexlet/code/./src/routes/statuses.js?\n}");

/***/ },

/***/ "./src/routes/tasks.js"
/*!*****************************!*\
  !*** ./src/routes/tasks.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((app) => {\r\n  app\r\n    .get('/tasks', { name: 'tasks' }, async (req, reply) => {\r\n      // Nota: req.query contiene los parámetros. Si en el Pug usas name=\"query[status]\", \r\n      // Fastify lo parsea como un objeto anidado.\r\n      const { query } = req.query;\r\n\r\n      const tasksQuery = app.objection.models.task.query()\r\n        .withGraphJoined('[status, executor, creator, labels]')\r\n        .modify((qb) => {\r\n          if (query?.status) {\r\n            qb.where('statusId', query.status);\r\n          }\r\n          if (query?.executor) {\r\n            qb.where('executorId', query.executor);\r\n          }\r\n          if (query?.label) {\r\n            qb.whereExists(\r\n              app.objection.models.task.relatedQuery('labels').where('labels.id', query.label)\r\n            );\r\n          }\r\n          if (query?.isCreatorUser === 'on') {\r\n            const currentUserId = req.session.get('userId');\r\n            qb.where('creatorId', currentUserId);\r\n          }\r\n        });\r\n\r\n      const [tasks, statuses, users, labels] = await Promise.all([\r\n        tasksQuery,\r\n        app.objection.models.taskStatus.query(),\r\n        app.objection.models.user.query(),\r\n        app.objection.models.label.query(),\r\n      ]);\r\n\r\n      return reply.view('tasks/index.pug', { tasks, statuses, users, labels, query });\r\n    }) // Se eliminó el punto y coma extra aquí\r\n\r\n    .post('/tasks', { name: 'createTask' }, async (req, reply) => {\r\n      const { data } = req.body;\r\n      \r\n      // Manejo de etiquetas: convertir IDs a objetos para insertGraph\r\n      const labelIds = [data.labels].flat().filter(Boolean);\r\n      const labels = labelIds.map((id) => ({ id: Number(id) }));\r\n\r\n      try {\r\n        await app.objection.models.task.query().insertGraph({\r\n          name: data.name,\r\n          description: data.description,\r\n          executorId: data.executorId ? Number(data.executorId) : null,\r\n          statusId: Number(data.statusId),\r\n          creatorId: Number(req.session.get('userId')),\r\n          labels,\r\n        }, { relate: true });\r\n\r\n        req.flash('info', req.t('views.tasks.flash.create.success'));\r\n        return reply.redirect(app.reverse('tasks'));\r\n      } catch (err) {\r\n        const statuses = await app.objection.models.taskStatus.query();\r\n        const users = await app.objection.models.user.query();\r\n        const allLabels = await app.objection.models.label.query();\r\n        \r\n        req.flash('error', req.t('views.tasks.flash.create.error'));\r\n        return reply.view('tasks/new.pug', { \r\n          task: data, \r\n          statuses, \r\n          users, \r\n          labels: allLabels, \r\n          errors: err.data \r\n        });\r\n      }\r\n    })\r\n\r\n    .patch('/tasks/:id', { name: 'updateTask' }, async (req, reply) => {\r\n      const { data } = req.body;\r\n      const { id } = req.params;\r\n      \r\n      const labelIds = [data.labels].flat().filter(Boolean);\r\n      const labels = labelIds.map((lid) => ({ id: Number(lid) }));\r\n\r\n      try {\r\n        const task = await app.objection.models.task.query().findById(id);\r\n        await task.$query().upsertGraph({\r\n          ...data,\r\n          id: Number(id),\r\n          executorId: data.executorId ? Number(data.executorId) : null,\r\n          statusId: Number(data.statusId),\r\n          labels,\r\n        }, { relate: true, unrelate: true });\r\n\r\n        req.flash('info', req.t('views.tasks.flash.update.success'));\r\n        return reply.redirect(app.reverse('tasks'));\r\n      } catch (err) {\r\n        req.flash('error', req.t('views.tasks.flash.update.error'));\r\n        return reply.redirect(app.reverse('editTask', { id }));\r\n      }\r\n    })\r\n\r\n    .delete('/tasks/:id', { name: 'deleteTask' }, async (req, reply) => {\r\n      try {\r\n        const { id } = req.params;\r\n        const currentUserId = req.session.get('userId');\r\n        const task = await app.objection.models.task.query().findById(id);\r\n\r\n        // REQUISITO CRÍTICO: Solo el creador puede borrar la tarea\r\n        if (!task || Number(task.creatorId) !== Number(currentUserId)) {\r\n          req.flash('error', req.t('views.tasks.flash.delete.error'));\r\n          return reply.redirect(app.reverse('tasks'));\r\n        }\r\n\r\n        await app.objection.models.task.query().deleteById(id);\r\n        req.flash('info', req.t('views.tasks.flash.delete.success'));\r\n      } catch (err) {\r\n        req.flash('error', req.t('views.tasks.flash.delete.error'));\r\n      }\r\n      return reply.redirect(app.reverse('tasks'));\r\n    });\r\n});\n(Object.getOwnPropertyDescriptor(__WEBPACK_DEFAULT_EXPORT__, \"name\") || {}).writable || Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, \"name\", { value: \"default\", configurable: true });\n\n//# sourceURL=webpack://@hexlet/code/./src/routes/tasks.js?\n}");

/***/ },

/***/ "./src/routes/users.js"
/*!*****************************!*\
  !*** ./src/routes/users.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((app) => {\r\n  app\r\n    .get('/session/new', { name: 'newSession' }, (req, reply) => {\r\n      return reply.view('sessions/new.pug', { signInForm: {} });\r\n    })\r\n    .post('/session', { name: 'session' }, async (req, reply) => {\r\n      const { data } = req.body;\r\n      try {\r\n        const user = await app.objection.models.user.query().findOne({ email: data.email });\r\n\r\n        if (user && user.passwordDigest === data.password) {\r\n          req.session.set('userId', user.id);\r\n          req.flash('info', 'Bienvenido');\r\n          return reply.redirect(app.reverse('root'));\r\n        }\r\n\r\n        req.flash('error', 'Email o contraseña incorrectos.');\r\n        return reply.view('sessions/new.pug', { signInForm: data });\r\n      } catch (err) {\r\n        return reply.redirect(app.reverse('newSession'));\r\n      }\r\n    })\r\n    .delete('/session', { name: 'deleteSession' }, (req, reply) => {\r\n      req.session.delete();\r\n      return reply.redirect(app.reverse('root'));\r\n    });\r\n});\n(Object.getOwnPropertyDescriptor(__WEBPACK_DEFAULT_EXPORT__, \"name\") || {}).writable || Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, \"name\", { value: \"default\", configurable: true });\n\n//# sourceURL=webpack://@hexlet/code/./src/routes/users.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/init.js");
/******/ 	
/******/ })()
;