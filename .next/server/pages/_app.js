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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/loading.module.css":
/*!***********************************!*\
  !*** ./styles/loading.module.css ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvbG9hZGluZy5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vb3VzaC8uL3N0eWxlcy9sb2FkaW5nLm1vZHVsZS5jc3M/ZDcxYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/loading.module.css\n");

/***/ }),

/***/ "./auth/AuthContexts.js":
/*!******************************!*\
  !*** ./auth/AuthContexts.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"ProtectRoute\": () => (/* binding */ ProtectRoute),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var _pages_loading_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/loading/loading */ \"./pages/loading/loading.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _service_auth_authService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/authService */ \"./service/auth/authService.ts\");\n/* harmony import */ var _service_storage_storageService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/storage/storageService */ \"./service/storage/storageService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n});\nconst AuthProvider = ({ children  })=>{\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadUserFromCookies() {\n            const token = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('token');\n            let user = {\n            };\n            (0,_service_auth_authService__WEBPACK_IMPORTED_MODULE_5__.verify)(token).then((response)=>{\n                if (!response.success) {\n                    router.push('login');\n                } else {\n                    user = response;\n                    if (user) {\n                        setUser(user);\n                    }\n                }\n            }).catch((error)=>{\n                console.error(error);\n            });\n            setLoading(false);\n        }\n        loadUserFromCookies();\n    }, []);\n    const saveUserTokenAndUser = (user)=>{\n        setUser(user);\n        const token = user.token;\n        _service_storage_storageService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].saveToken(token);\n        if (token) {\n            js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set('token', token, {\n                expires: 60\n            });\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AuthContext.Provider, {\n        value: {\n            isAuthenticated: !!user1,\n            user: user1,\n            loading,\n            saveUserTokenAndUser\n        },\n        __source: {\n            fileName: \"C:\\\\ooush-ui\\\\auth\\\\AuthContexts.js\",\n            lineNumber: 50,\n            columnNumber: 3\n        },\n        __self: undefined,\n        children: children\n    }));\n};\nconst isAuthenticatedOnAuthRequiredPage = ()=>{\n    const { isAuthenticated  } = useAuth();\n    if (false) {}\n    return false;\n};\nconst ProtectRoute = ({ children  })=>{\n    const { loading  } = useAuth();\n    if (loading || !isAuthenticatedOnAuthRequiredPage) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_loading_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            __source: {\n                fileName: \"C:\\\\ooush-ui\\\\auth\\\\AuthContexts.js\",\n                lineNumber: 68,\n                columnNumber: 10\n            },\n            __self: undefined\n        }));\n    }\n    return children;\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext)\n;\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL29vdXNoLy4vYXV0aC9BdXRoQ29udGV4dHMuanM/ZjQ4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tICcuLi9wYWdlcy9sb2FkaW5nL2xvYWRpbmcnXHJcblxyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge2xvZ2luLCB2ZXJpZnl9IGZyb20gXCIuLi9zZXJ2aWNlL2F1dGgvYXV0aFNlcnZpY2VcIjtcclxuaW1wb3J0IHN0b3JhZ2VTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlL3N0b3JhZ2Uvc3RvcmFnZVNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcblx0Y29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJGcm9tQ29va2llcygpIHtcclxuXHRcdFx0Y29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcclxuXHRcdFx0bGV0IHVzZXIgPSB7fTtcclxuXHRcdFx0dmVyaWZ5KHRva2VuKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuXHRcdFx0XHRcdHJvdXRlci5wdXNoKCdsb2dpbicpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1c2VyID0gcmVzcG9uc2U7XHJcblx0XHRcdFx0XHRpZiAodXNlcikge1xyXG5cdFx0XHRcdFx0XHRzZXRVc2VyKHVzZXIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkuY2F0Y2goZXJyb3IgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHR9XHJcblx0XHRsb2FkVXNlckZyb21Db29raWVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBzYXZlVXNlclRva2VuQW5kVXNlciA9ICh1c2VyKSA9PiB7XHJcblx0XHRzZXRVc2VyKHVzZXIpXHJcblx0XHRjb25zdCB0b2tlbiA9IHVzZXIudG9rZW47XHJcblx0XHRzdG9yYWdlU2VydmljZS5zYXZlVG9rZW4odG9rZW4pO1xyXG5cdFx0aWYgKHRva2VuKSB7XHJcblx0XHRcdENvb2tpZXMuc2V0KCd0b2tlbicsIHRva2VuLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc0F1dGhlbnRpY2F0ZWQ6ICEhdXNlciwgdXNlciwgbG9hZGluZywgc2F2ZVVzZXJUb2tlbkFuZFVzZXJ9fT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuXHQpXHJcblxyXG59XHJcblxyXG5jb25zdCBpc0F1dGhlbnRpY2F0ZWRPbkF1dGhSZXF1aXJlZFBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUF1dGgoKTtcclxuXHRpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRyZXR1cm4gKCFpc0F1dGhlbnRpY2F0ZWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnL2xvZ2luJyk7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb3RlY3RSb3V0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuXHRpZiAobG9hZGluZyB8fCAhaXNBdXRoZW50aWNhdGVkT25BdXRoUmVxdWlyZWRQYWdlKXtcclxuXHRcdHJldHVybiA8TG9hZGluZ1BhZ2UgLz47XHJcblx0fVxyXG5cdHJldHVybiBjaGlsZHJlbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkNvb2tpZXMiLCJMb2FkaW5nUGFnZSIsIlJvdXRlciIsInVzZVJvdXRlciIsImxvZ2luIiwidmVyaWZ5Iiwic3RvcmFnZVNlcnZpY2UiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImxvYWRVc2VyRnJvbUNvb2tpZXMiLCJ0b2tlbiIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJzYXZlVXNlclRva2VuQW5kVXNlciIsInNhdmVUb2tlbiIsInNldCIsImV4cGlyZXMiLCJQcm92aWRlciIsInZhbHVlIiwiaXNBdXRoZW50aWNhdGVkIiwiaXNBdXRoZW50aWNhdGVkT25BdXRoUmVxdWlyZWRQYWdlIiwidXNlQXV0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJQcm90ZWN0Um91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./auth/AuthContexts.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_AuthContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/AuthContexts */ \"./auth/AuthContexts.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_AuthContexts__WEBPACK_IMPORTED_MODULE_2__]);\n_auth_AuthContexts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_auth_AuthContexts__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        __source: {\n            fileName: \"C:\\\\ooush-ui\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_auth_AuthContexts__WEBPACK_IMPORTED_MODULE_2__.ProtectRoute, {\n            __source: {\n                fileName: \"C:\\\\ooush-ui\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 14\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"C:\\\\ooush-ui\\\\pages\\\\_app.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                },\n                __self: this\n            })\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\nlet nestedArr = [\n    'level1',\n    [\n        'level2',\n        [\n            'level3',\n            'level4',\n            'level5', \n        ]\n    ]\n];\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThCO0FBRXFCO0FBQ0E7U0FFMUNFLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2hELE1BQU0sc0VBQ0RKLDREQUFZOzs7Ozs7O3VGQUNQQyw0REFBWTs7Ozs7OzsyRkFDVEUsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7OztBQUl4QyxDQUFDO0FBRUQsaUVBQWVGLEtBQUs7QUFVcEIsR0FBRyxDQUFDRyxTQUFTLEdBQUcsQ0FBQztJQUNmLENBQVE7SUFDUixDQUFDO1FBQ0MsQ0FBUTtRQUNWLENBQUM7WUFBQSxDQUFRO1lBQ1QsQ0FBUTtZQUNSLENBQVE7UUFBQyxDQUFDO0lBQ1osQ0FBQztBQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vb3VzaC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vYXV0aC9BdXRoQ29udGV4dHMnO1xyXG5pbXBvcnQgeyBQcm90ZWN0Um91dGUgfSBmcm9tICcuLi9hdXRoL0F1dGhDb250ZXh0cyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICA8UHJvdGVjdFJvdXRlPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgPC9Qcm90ZWN0Um91dGU+XHJcbiAgICAgICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmxldCBuZXN0ZWRBcnIgPSBbXHJcbiAgJ2xldmVsMScsXHJcbiAgW1xyXG4gICAgJ2xldmVsMicsXHJcbiAgWydsZXZlbDMnLFxyXG4gICdsZXZlbDQnLFxyXG4gICdsZXZlbDUnLF1cclxuXVxyXG5dIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIlByb3RlY3RSb3V0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibmVzdGVkQXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/loading/loading.tsx":
/*!***********************************!*\
  !*** ./pages/loading/loading.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoadingPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_loading_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/loading.module.css */ \"./styles/loading.module.css\");\n/* harmony import */ var _styles_loading_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_loading_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction LoadingPage() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_loading_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginContainer),\n        id: \"loading\",\n        __source: {\n            fileName: \"C:\\\\ooush-ui\\\\pages\\\\loading\\\\loading.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        },\n        __self: this,\n        children: \"WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh\"\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2FkaW5nL2xvYWRpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVEO0FBRUg7QUFFckMsUUFBUSxDQUFDRSxXQUFXLEdBQUcsQ0FBQztJQUVuQyxNQUFNLHNFQUNEQyxDQUFHO1FBQUNDLFNBQVMsRUFBRUgsa0ZBQXFCO1FBQUVLLEVBQUUsRUFBQyxDQUFTOzs7Ozs7O2tCQUFDLENBRXBEOztBQUdSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vb3VzaC8uL3BhZ2VzL2xvYWRpbmcvbG9hZGluZy50c3g/OTUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wcywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvbG9hZGluZy5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nUGFnZSgpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Db250YWluZXJ9IGlkPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgICBXQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIaFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkxvYWRpbmdQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9naW5Db250YWluZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/loading/loading.tsx\n");

/***/ }),

/***/ "./service/auth/authEndpointUrls.js":
/*!******************************************!*\
  !*** ./service/auth/authEndpointUrls.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOGIN\": () => (/* binding */ LOGIN),\n/* harmony export */   \"VERIFY\": () => (/* binding */ VERIFY)\n/* harmony export */ });\nconst LOGIN = 'auth/login';\nconst VERIFY = 'auth/verify';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlL2F1dGgvYXV0aEVuZHBvaW50VXJscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLEtBQUssQ0FBQ0EsS0FBSyxHQUFHLENBQVk7QUFDMUIsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBYSIsInNvdXJjZXMiOlsid2VicGFjazovL29vdXNoLy4vc2VydmljZS9hdXRoL2F1dGhFbmRwb2ludFVybHMuanM/M2I1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTE9HSU4gPSAnYXV0aC9sb2dpbic7XHJcbmV4cG9ydCBjb25zdCBWRVJJRlkgPSAnYXV0aC92ZXJpZnknOyJdLCJuYW1lcyI6WyJMT0dJTiIsIlZFUklGWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./service/auth/authEndpointUrls.js\n");

/***/ }),

/***/ "./service/auth/authService.ts":
/*!*************************************!*\
  !*** ./service/auth/authService.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"verify\": () => (/* binding */ verify)\n/* harmony export */ });\n/* harmony import */ var _utils_api_helpers_apiPostHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/api-helpers/apiPostHelper */ \"./utils/api-helpers/apiPostHelper.js\");\n/* harmony import */ var _utils_api_helpers_apiGetHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api-helpers/apiGetHelper */ \"./utils/api-helpers/apiGetHelper.js\");\n/* harmony import */ var _authEndpointUrls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authEndpointUrls */ \"./service/auth/authEndpointUrls.js\");\n\n\n\nconst login = (data1)=>{\n    return (0,_utils_api_helpers_apiPostHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_authEndpointUrls__WEBPACK_IMPORTED_MODULE_2__.LOGIN, data1).then((response)=>response.json()\n    ).then((data)=>{\n        return data.data;\n    });\n};\nconst verify = (token)=>{\n    return (0,_utils_api_helpers_apiGetHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_authEndpointUrls__WEBPACK_IMPORTED_MODULE_2__.VERIFY).then((response)=>response.json()\n    ).then((data)=>{\n        return data.data;\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlL2F1dGgvYXV0aFNlcnZpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUU7QUFFRjtBQUViO0FBRTNDLEtBQUssQ0FBQ0ksS0FBSyxJQUFJQyxLQUFZLEdBQVUsQ0FBQztJQUN6QyxNQUFNLENBQUNMLDRFQUFhLENBQUNFLG9EQUFLLEVBQUVHLEtBQUksRUFDdkJDLElBQUksRUFBQ0MsUUFBUSxHQUFJQSxRQUFRLENBQUNDLElBQUk7TUFDOUJGLElBQUksRUFBQ0QsSUFBSSxHQUFJLENBQUM7UUFDWCxNQUFNLENBQUNBLElBQUksQ0FBQ0EsSUFBSTtJQUNwQixDQUFDO0FBQ2IsQ0FBQztBQUVNLEtBQUssQ0FBQ0ksTUFBTSxJQUFJQyxLQUFhLEdBQUssQ0FBQztJQUN0QyxNQUFNLENBQUNULDJFQUFZLENBQUNFLHFEQUFNLEVBQ2pCRyxJQUFJLEVBQUNDLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxJQUFJO01BQzlCRixJQUFJLEVBQUNELElBQUksR0FBSSxDQUFDO1FBQ1gsTUFBTSxDQUFDQSxJQUFJLENBQUNBLElBQUk7SUFDcEIsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vb3VzaC8uL3NlcnZpY2UvYXV0aC9hdXRoU2VydmljZS50cz8wNTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGlQb3N0SGVscGVyIGZyb20gXCIuLi8uLi91dGlscy9hcGktaGVscGVycy9hcGlQb3N0SGVscGVyXCI7XHJcblxyXG5pbXBvcnQgYXBpR2V0SGVscGVyIGZyb20gXCIuLi8uLi91dGlscy9hcGktaGVscGVycy9hcGlHZXRIZWxwZXJcIjtcclxuXHJcbmltcG9ydCB7IExPR0lOLCBWRVJJRlkgfSBmcm9tIFwiLi9hdXRoRW5kcG9pbnRVcmxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoZGF0YTogb2JqZWN0KTogYW55ID0+IHtcclxuICAgIHJldHVybiBhcGlQb3N0SGVscGVyKExPR0lOLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB2ZXJpZnkgPSAodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGFwaUdldEhlbHBlcihWRVJJRlkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxufSJdLCJuYW1lcyI6WyJhcGlQb3N0SGVscGVyIiwiYXBpR2V0SGVscGVyIiwiTE9HSU4iLCJWRVJJRlkiLCJsb2dpbiIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidmVyaWZ5IiwidG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./service/auth/authService.ts\n");

/***/ }),

/***/ "./service/storage/storageService.js":
/*!*******************************************!*\
  !*** ./service/storage/storageService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// @flow\nclass StorageService {\n    saveToken = (token)=>localStorage.setItem(\"Token\", token)\n    ;\n    tokenExists = ()=>!!this.getToken()\n    ;\n    getToken = ()=>localStorage.getItem(\"Token\")\n    ;\n    clearToken = ()=>localStorage.removeItem(\"Token\")\n    ;\n    clearAll = ()=>localStorage.clear()\n    ;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new StorageService());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlL3N0b3JhZ2Uvc3RvcmFnZVNlcnZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEVBQVE7TUFDRkEsY0FBYztJQUNuQkMsU0FBUyxJQUFHQyxLQUFLLEdBQUlDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU8sUUFBRUYsS0FBSzs7SUFFeERHLFdBQVcsU0FBVyxJQUFJLENBQUNDLFFBQVE7O0lBRW5DQSxRQUFRLE9BQVNILFlBQVksQ0FBQ0ksT0FBTyxDQUFDLENBQU87O0lBRTdDQyxVQUFVLE9BQVNMLFlBQVksQ0FBQ00sVUFBVSxDQUFDLENBQU87O0lBRWxEQyxRQUFRLE9BQVNQLFlBQVksQ0FBQ1EsS0FBSzs7O0FBSXBDLGlFQUFlLEdBQUcsQ0FBQ1gsY0FBYyxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vb3VzaC8uL3NlcnZpY2Uvc3RvcmFnZS9zdG9yYWdlU2VydmljZS5qcz8xOGQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcclxuXHRzYXZlVG9rZW4gPSB0b2tlbiA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRva2VuXCIsIHRva2VuKTtcclxuXHJcblx0dG9rZW5FeGlzdHMgPSAoKSA9PiAhIXRoaXMuZ2V0VG9rZW4oKTtcclxuXHJcblx0Z2V0VG9rZW4gPSAoKSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpO1xyXG5cclxuXHRjbGVhclRva2VuID0gKCkgPT4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUb2tlblwiKTtcclxuXHJcblx0Y2xlYXJBbGwgPSAoKSA9PiBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTdG9yYWdlU2VydmljZSgpOyJdLCJuYW1lcyI6WyJTdG9yYWdlU2VydmljZSIsInNhdmVUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuRXhpc3RzIiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwiY2xlYXJUb2tlbiIsInJlbW92ZUl0ZW0iLCJjbGVhckFsbCIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./service/storage/storageService.js\n");

/***/ }),

/***/ "./utils/api-helpers/apiGetHelper.js":
/*!*******************************************!*\
  !*** ./utils/api-helpers/apiGetHelper.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _service_storage_storageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/storage/storageService */ \"./service/storage/storageService.js\");\n\nconst apiGetHelper = (url)=>{\n    return fetch('http://localhost:8080/' + url, {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            ..._service_storage_storageService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToken() && {\n                'X-Auth-Token': _service_storage_storageService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToken()\n            }\n        }\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiGetHelper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcGktaGVscGVycy9hcGlHZXRIZWxwZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUU7QUFFakUsS0FBSyxDQUFDQyxZQUFZLElBQUlDLEdBQUcsR0FBSyxDQUFDO0lBQzNCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQXdCLDBCQUFHRCxHQUFHLEVBQUUsQ0FBQztRQUMxQ0UsTUFBTSxFQUFFLENBQUs7UUFDYkMsT0FBTyxFQUFFLENBQUM7WUFDTixDQUFjLGVBQUUsQ0FBa0I7ZUFDdkNMLGdGQUF1QixNQUFNLENBQUM7Z0JBQUMsQ0FBYyxlQUFFQSxnRkFBdUI7WUFBRyxDQUFDO1FBQ3pFLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlQyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vb3VzaC8uL3V0aWxzL2FwaS1oZWxwZXJzL2FwaUdldEhlbHBlci5qcz9mY2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yYWdlU2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZS9zdG9yYWdlL3N0b3JhZ2VTZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBhcGlHZXRIZWxwZXIgPSAodXJsKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nICsgdXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdC4uLihzdG9yYWdlU2VydmljZS5nZXRUb2tlbigpICYmIHsgJ1gtQXV0aC1Ub2tlbic6IHN0b3JhZ2VTZXJ2aWNlLmdldFRva2VuKCkgfSksXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaUdldEhlbHBlcjsiXSwibmFtZXMiOlsic3RvcmFnZVNlcnZpY2UiLCJhcGlHZXRIZWxwZXIiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/api-helpers/apiGetHelper.js\n");

/***/ }),

/***/ "./utils/api-helpers/apiPostHelper.js":
/*!********************************************!*\
  !*** ./utils/api-helpers/apiPostHelper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _service_storage_storageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/storage/storageService */ \"./service/storage/storageService.js\");\n\nconst apiPostHelper = (url, data)=>{\n    return fetch('http://localhost:8080/' + url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            ..._service_storage_storageService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToken() && {\n                'X-Auth-Token': _service_storage_storageService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToken()\n            }\n        },\n        body: JSON.stringify(data)\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiPostHelper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcGktaGVscGVycy9hcGlQb3N0SGVscGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlFO0FBRWpFLEtBQUssQ0FBQ0MsYUFBYSxJQUFJQyxHQUFHLEVBQUVDLElBQUksR0FBSyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQXdCLDBCQUFHRixHQUFHLEVBQUUsQ0FBQztRQUMxQ0csTUFBTSxFQUFFLENBQU07UUFDZEMsT0FBTyxFQUFFLENBQUM7WUFDTixDQUFjLGVBQUUsQ0FBa0I7ZUFDOUJOLGdGQUF1QixNQUFNLENBQUM7Z0JBQUMsQ0FBYyxlQUFFQSxnRkFBdUI7WUFBRyxDQUFDO1FBQ2xGLENBQUM7UUFDRFEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsSUFBSTtJQUM3QixDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlRixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vb3VzaC8uL3V0aWxzL2FwaS1oZWxwZXJzL2FwaVBvc3RIZWxwZXIuanM/M2Y1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmFnZVNlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2Uvc3RvcmFnZS9zdG9yYWdlU2VydmljZVwiO1xyXG5cclxuY29uc3QgYXBpUG9zdEhlbHBlciA9ICh1cmwsIGRhdGEpID0+IHtcclxuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwLycgKyB1cmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIC4uLihzdG9yYWdlU2VydmljZS5nZXRUb2tlbigpICYmIHsgJ1gtQXV0aC1Ub2tlbic6IHN0b3JhZ2VTZXJ2aWNlLmdldFRva2VuKCkgfSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpUG9zdEhlbHBlcjsiXSwibmFtZXMiOlsic3RvcmFnZVNlcnZpY2UiLCJhcGlQb3N0SGVscGVyIiwidXJsIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImdldFRva2VuIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/api-helpers/apiPostHelper.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();