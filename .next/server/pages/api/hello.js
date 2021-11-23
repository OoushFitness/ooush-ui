"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "./pages/api/hello.ts":
/*!****************************!*\
  !*** ./pages/api/hello.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    return new Promise((resolve, reject)=>{\n        req.method;\n        fetch('http://localhost:8080/auth/login/pete@ooushfitness.com/Liverpool1').then((response)=>response.json()\n        ).then((data)=>{\n            return res.json({\n                ...data\n            });\n        }).catch((error)=>{\n            res.json(error);\n            res.status(405).end();\n            return resolve();\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaGVsbG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQU1lLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBMEIsRUFBRSxDQUFDO0lBQ3RGLE1BQU0sQ0FBQyxHQUFHLENBQUNDLE9BQU8sRUFBUUMsT0FBTyxFQUFFQyxNQUFNLEdBQUssQ0FBQztRQUM3Q0osR0FBRyxDQUFDSyxNQUFNO1FBQ1ZDLEtBQUssQ0FBQyxDQUFtRSxvRUFDeEVDLElBQUksRUFBQ0MsUUFBUSxHQUFJQSxRQUFRLENBQUNDLElBQUk7VUFDOUJGLElBQUksRUFBQ0csSUFBSSxHQUFJLENBQUM7WUFDYixNQUFNLENBQUNULEdBQUcsQ0FBQ1EsSUFBSSxDQUFDLENBQUM7bUJBQUdDLElBQUk7WUFBQSxDQUFDO1FBQzNCLENBQUMsRUFDQUMsS0FBSyxFQUFDQyxLQUFLLEdBQUksQ0FBQztZQUNmWCxHQUFHLENBQUNRLElBQUksQ0FBQ0csS0FBSztZQUNkWCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLEdBQUc7WUFDbkIsTUFBTSxDQUFDWCxPQUFPO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29vdXNoLy4vcGFnZXMvYXBpL2hlbGxvLnRzPzY1N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxudHlwZSBEYXRhID0ge1xuICBuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPikge1xuICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlcS5tZXRob2Q7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hdXRoL2xvZ2luL3BldGVAb291c2hmaXRuZXNzLmNvbS9MaXZlcnBvb2wxJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oey4uLmRhdGF9KVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHJlcy5qc29uKGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSlcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtZXRob2QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInN0YXR1cyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/hello.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/hello.ts"));
module.exports = __webpack_exports__;

})();