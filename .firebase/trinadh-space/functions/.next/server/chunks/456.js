"use strict";
exports.id = 456;
exports.ids = [456];
exports.modules = {

/***/ 5542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9954);




const Button = ({ children , type , onClick , classes  })=>{
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    if (type === "primary") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onClick,
            type: "button",
            className: `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.showCursor && "cursor-none"}  ${classes}`,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        type: "button",
        className: `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${theme === "dark" ? "hover:bg-slate-600 text-white" : "hover:bg-slate-100"} hover:scale-105 active:scale-100  tablet:first:ml-0  ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.showCursor && "cursor-none"} ${classes} link`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 1301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Cursor)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Cursor/useMousePosition.js

function useMousePosition() {
    const { 0: mousePosition , 1: setMousePosition  } = (0,external_react_.useState)({
        x: null,
        y: null
    });
    (0,external_react_.useEffect)(()=>{
        const mouseMoveHandler = (event)=>{
            const { clientX , clientY  } = event;
            setMousePosition({
                x: clientX,
                y: clientY
            });
        };
        document.addEventListener("mousemove", mouseMoveHandler);
        return ()=>{
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);
    return mousePosition;
};

;// CONCATENATED MODULE: ./components/Cursor/index.js


const DotRing = ()=>{
    // 1.
    const { x , y  } = useMousePosition();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    left: `${x}px`,
                    top: `${y}px`
                },
                className: "ring"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "dot",
                style: {
                    left: `${x}px`,
                    top: `${y}px`
                }
            })
        ]
    });
};
/* harmony default export */ const Cursor = (DotRing);


/***/ }),

/***/ 2665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5542);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// Local Data

const Header = ({ handleWorkScroll , handleAboutScroll , isBlog  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { name , showBlog , showResume  } = _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                className: "block tablet:hidden mt-5",
                children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between p-2 laptop:p-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        onClick: ()=>router.push("/")
                                        ,
                                        className: "font-medium p-2 laptop:p-0 link",
                                        children: [
                                            name,
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                                ,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-6",
                                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-5",
                                                    src: `/images/${!open ? theme === "dark" ? "menu-white.svg" : "menu.svg" : theme === "light" ? "cancel.svg" : "cancel-white.svg"}`
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
                                className: `absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"} shadow-md rounded-md`,
                                children: !isBlog ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: handleWorkScroll,
                                            children: "Work"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: handleAboutScroll,
                                            children: "About"
                                        }),
                                        showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/blog")
                                            ,
                                            children: "Blog"
                                        }),
                                        showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("/trinadh_thatakula_resume.pdf")
                                            ,
                                            children: "Resume"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("mailto:trinadh.thatakula@gmail.com")
                                            ,
                                            children: "Contact"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/")
                                            ,
                                            classes: "first:ml-1",
                                            children: "Home"
                                        }),
                                        showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>router.push("/blog")
                                            ,
                                            children: "Blog"
                                        }),
                                        showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("/public/trinadh_thatakula_resume.pdf")
                                            ,
                                            children: "Resume"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            onClick: ()=>window.open("mailto:trinadh.thatakula@gmail.com")
                                            ,
                                            children: "Contact"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `mt-10 hidden flex-row items-center justify-between sticky ${theme === "light" && "bg-white"} dark:text-white top-0 z-10 tablet:flex`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        onClick: ()=>router.push("/")
                        ,
                        className: "font-medium cursor-pointer mob:p-2 laptop:p-0",
                        children: [
                            name,
                            "."
                        ]
                    }),
                    !isBlog ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: handleWorkScroll,
                                children: "Work"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: handleAboutScroll,
                                children: "About"
                            }),
                            showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/blog")
                                ,
                                children: "Blog"
                            }),
                            showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>window.open("/trinadh_thatakula_resume.pdf")
                                ,
                                children: "Resume"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>window.open("mailto:trinadh.thatakula@gmail.com")
                                ,
                                children: "Contact"
                            }),
                            mounted && theme && _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-6",
                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/")
                                ,
                                children: "Home"
                            }),
                            showBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/blog")
                                ,
                                children: "Blog"
                            }),
                            showResume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>router.push("/resume")
                                ,
                                classes: "first:ml-1",
                                children: "Resume"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>window.open("mailto:trinadh.thatakula@gmail.com")
                                ,
                                children: "Contact"
                            }),
                            mounted && theme && _data_portfolio_json__WEBPACK_IMPORTED_MODULE_6__.darkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-6",
                                    src: `/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9954:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Trinadh","headerTaglineOne":"Hello 👋","headerTaglineTwo":"I\'m  Trinadh Thatakula","headerTaglineThree":"Mobile App Devloper","headerTaglineFour":"from Hyderabad, India","showCursor":true,"showBlog":false,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/trinadhthatakula"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/trinadh.thatakula/"},{"id":"3","title":"Blog","link":"https://3nadh.dev/"},{"id":"4","title":"Email","link":"mailto:trinadh.thatakula@gmail.com"}],"projects":[{"id":"1","title":"GPS Navigations Traffic Alerts","description":"GPS based Utility App with 10M+ downloads","imageSrc":"https://play-lh.googleusercontent.com/pYKJ4W4SkNY1C2cIUziaxa0V9IIICNfIzhgxfhADYfP96f8pgPHZDOI25uJ06L6wlgyL=w2560-h1440-rw","url":"https://play.google.com/store/apps/details?id=com.rms.gps.maps.gpsroutefind.tracklocation.nearplaces.directions.compass.navigation.maps.tracker"},{"id":"2","title":"Mobile Number Locator","description":"A Utility app for Mobile users, 10M+ downloads","imageSrc":"https://play-lh.googleusercontent.com/USCL7w_tbbiVmVHZob5Ybh1avrcvJM5lpis3vdOW_Tt8XGz6jCp_qfx5gG54qjNPyg=w2560-h1440-rw","url":"https://play.google.com/store/apps/details?id=com.ram.itsl"},{"id":"3","title":"All Village Maps","description":"A sort of repository for Villages, 5M+ downloads","imageSrc":"https://play-lh.googleusercontent.com/BV2LKto2rsS7ulyoCXlmQYffr-G5HbnfARUTBnFd0hy4qQYEXDuJ8yjEgutGGT400wU=w2560-h1440-rw","url":"https://play.google.com/store/apps/details?id=com.gpsmaps.villagemaps.directions.whereami.navigation.gpsarea.location.tracker"},{"id":"4","title":"Photo Editor & Image Filters","description":"A Photo Editing app, 100k+ downloads","imageSrc":"https://play-lh.googleusercontent.com/eJx8jQ2_TWtLO-oTEnW1aHDV-bkjU4buN6TKhVC_nTqwQkIzU7ghmYoiE6guuDzFLBI=w416-h235-rw","url":"https://play.google.com/store/apps/details?id=com.rstech.photo.editor.filters.fun.editpicture.effects.photoblend.blurphoto&hl=en_US"},{"id":"5","title":"My Music Player - MP3 Player","description":"A Music Player app, 50k+ downloads","imageSrc":"https://play-lh.googleusercontent.com/w65yByoJFdMsFDOByhYWf0r3-uStfh8bOqQEIowJB_WqbmAdsnOuVm-yIS4a4471ImI=w2560-h1440-rw","url":"https://play.google.com/store/apps/details?id=com.rms.musicplayer.music.audio.songs.media.mp3player"},{"id":"6","title":"Transparent Live Wallpaper","description":"Camera as Live wallpaper app with 10M+ downloads","imageSrc":"https://play-lh.googleusercontent.com/uYUfogZSn0HH6eCcPa-ndVctf1qrIj_rVG5UzLMFFIwx5TIlFF--hlNrJOrxJyPZFc8=w2560-h1440-rw","url":"https://play.google.com/store/apps/details?id=com.ram.transparentlivewallpaper"},{"id":"7","title":"GPS Route Maps & Navigation","description":"A Modern UI with GPS based features, 100k+ downloads","imageSrc":"https://play-lh.googleusercontent.com/kKzIDr6U08sc-nibDzYXTcEmXx2CnMN7mAb3drxDvn2XSjiAKahmBdBPV3eDZFeEFw=w2560-h1440-rw","url":"https://play.google.com/store/apps/details?id=com.raa.gps.maps.voice.navigation.location.traffic.route.driving.directions"},{"id":"8","title":"MP3 Cutter","description":"Audio Tools App, 100k+ downloads","imageSrc":"https://play-lh.googleusercontent.com/eXFKHJIJ_JiTZTAuGyj6b1T3Z8QD5QZAOSgfhemlbAmUJgFALdMjDRgypH1Fm9VRYw=w2560-h1440-rw","url":"https://play.google.com/store/apps/details?id=com.gm.mp3cutter.ringtonemaker.music.trimmer.edit.best.mp3.ringtones.cutter&gl=US"},{"id":"9","title":"GPS Navigator- Traffic Weather","description":"GPS based Utility App with simple UI","imageSrc":"https://play-lh.googleusercontent.com/0dwxqxJRPb2Ix5NoRri-7ibxTqIFGfIfXe5gwJjmoiGboics4H4q7hF5IMt8cu17dw=w2560-h1440-rw","url":"https://play.google.com/store/apps/details?id=com.spectra.gps.navigator.address.offline.maps"},{"id":"10","title":"Wall Space - HD Wallpapers","description":"A never ending Space filled with wallpapers","imageSrc":"https://play-lh.googleusercontent.com/U786grU9GyTFdojhHH4Wls6oWuJounILiTWZR8vlp8FcwF9tG5JbOxS3wcVKpUhp6ZCa=w2560-h1440-rw","url":"https://play.google.com/store/apps/details?id=com.spectra.wallspace"}],"services":[{"id":"1","title":"App Development","description":"Developing fucntional Applications with particular focus on their visual appearance for better usability."},{"id":"2","title":"UI/UX Design","description":"Design & Develop UI so as to facilitate user with a better UX, A better UX for better User Retension"},{"id":"3","title":"Multi-Platform Apps","description":"Still in learning phase but with a wider scope, started developing apps using Kotlin MultiPlatform for Android & iOS"},{"id":"4","title":"App Maintainance","description":"Maintainance is a key area where we can gain or loose more users, with experience in fixing bugs I can do regular maintainance for Applications"}],"aboutpara":"I define myself as a hard-working and experienced mobile application developer with nearly 6 years of experience in the industry. I am proficient in a variety of programming languages and technologies, including Java, Kotlin, Jetpack Compose and Javascript, while learning Kotlin MultiPlatform, Swift and SwiftUI to develop MultiPlatform Apps. I am also a quick learner and am always eager to take on new challenges. In my spare time, I enjoy reading books and playing chess. I believe that these hobbies help me to stay sharp and creative.","resume":{"tagline":"👋  I\'m an App Developer, Freelancer.","description":"I have delivered world-class user experiences to millions of people. Well-versed with Kotlin, java, Compose and many others","experiences":[{"id":"1","dates":"November 2017 - Present","type":"Full Time","position":"Senior Android Developer","bullets":"at Ramson Softech Private Limited"}],"education":{"universityName":"Acharya Nagarjuna University","universityDate":"2013-2016","universityPara":"Graduated in the fields of Finance & Accounting"},"languages":["Java","Kotlin","Javascript","HTML5","CSS","Python"],"frameworks":["Android","React","NodeJs"],"others":["Jetpack Compose","Kotlin Multi Platform","Figma","AdobeXD","AWS"]}}');

/***/ })

};
;