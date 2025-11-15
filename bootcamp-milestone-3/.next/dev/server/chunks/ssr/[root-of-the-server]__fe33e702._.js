module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/bootcamp-project-2025/bootcamp-milestone-3/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/resume.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "entry": "resume-module__NNrKUq__entry",
  "gradientContainer": "resume-module__NNrKUq__gradientContainer",
  "outerContainer": "resume-module__NNrKUq__outerContainer",
  "pageTitle": "resume-module__NNrKUq__pageTitle",
  "resumeButton": "resume-module__NNrKUq__resumeButton",
  "resumeButtonContainer": "resume-module__NNrKUq__resumeButtonContainer",
  "resumeInfoContainer": "resume-module__NNrKUq__resumeInfoContainer",
  "schoolContainer": "resume-module__NNrKUq__schoolContainer",
  "schoolDescription": "resume-module__NNrKUq__schoolDescription",
  "schoolDetails": "resume-module__NNrKUq__schoolDetails",
  "schoolName": "resume-module__NNrKUq__schoolName",
  "schools": "resume-module__NNrKUq__schools",
  "sectionTitle": "resume-module__NNrKUq__sectionTitle",
  "skill": "resume-module__NNrKUq__skill",
  "skillSectionTitle": "resume-module__NNrKUq__skillSectionTitle",
  "skills": "resume-module__NNrKUq__skills",
});
}),
"[project]/bootcamp-project-2025/bootcamp-milestone-3/components/skill.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "skill": "skill-module__J4jRqG__skill",
});
}),
"[project]/bootcamp-project-2025/bootcamp-milestone-3/components/skill.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$components$2f$skill$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/components/skill.module.css [app-rsc] (css module)");
;
;
function Skill({ name, img, imgAlt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$components$2f$skill$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skill,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: img,
                width: 100,
                alt: imgAlt
            }, void 0, false, {
                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/components/skill.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this),
            name
        ]
    }, void 0, true, {
        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/components/skill.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resumeData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backEnd",
    ()=>backEnd,
    "certifications",
    ()=>certifications,
    "frontEnd",
    ()=>frontEnd,
    "other",
    ()=>other,
    "programmingLanguages",
    ()=>programmingLanguages
]);
const programmingLanguages = [
    {
        name: 'Python',
        img: 'assets/logos/python-logo-only.png',
        imgAlt: 'Python Logo',
        key: 0
    },
    {
        name: 'Java',
        img: 'assets/logos/javaLogo.png',
        imgAlt: 'Java Logo',
        key: 1
    },
    {
        name: 'C',
        img: 'assets/logos/cLogo.png',
        imgAlt: 'C Logo',
        key: 2
    },
    {
        name: 'JavaScript',
        img: 'assets/logos/javascriptLogo.png',
        imgAlt: 'JavaScript Logo',
        key: 3
    },
    {
        name: 'TypeScript',
        img: 'assets/logos/typescriptLogo.png',
        imgAlt: 'TypeScript Logo',
        key: 4
    }
];
const frontEnd = [
    {
        name: 'React Native',
        img: 'assets/logos/reactNativeIcon.png',
        imgAlt: 'React Native Logo',
        key: 0
    },
    {
        name: 'React',
        img: 'assets/logos/reactNativeIcon.png',
        imgAlt: 'React Logo',
        key: 1
    },
    {
        name: 'Vite',
        img: 'assets/logos/viteLogo.png',
        imgAlt: 'Vite Logo',
        key: 2
    },
    {
        name: 'HTML',
        img: 'assets/logos/htmlIcon.png',
        imgAlt: 'HTML Logo',
        key: 3
    },
    {
        name: 'CSS',
        img: 'assets/logos/cssIcon.png',
        imgAlt: 'CSS Logo',
        key: 4
    },
    {
        name: 'Figma',
        img: 'assets/logos/figmaIcon.png',
        imgAlt: 'Figma Logo',
        key: 5
    }
];
const backEnd = [
    {
        name: 'Supabase',
        img: 'assets/logos/supabase-logo-icon.png',
        imgAlt: 'Supabase Logo',
        key: 0
    },
    {
        name: 'PostgreSQL',
        img: 'assets/logos/postgresqlLogo.png',
        imgAlt: 'PostgreSQL Logo',
        key: 1
    },
    {
        name: 'MongoDB',
        img: 'assets/logos/mongoDBLogo.png',
        imgAlt: 'MongoDB Logo',
        key: 2
    }
];
const other = [
    {
        name: 'Git',
        img: 'assets/logos/gitLogo.png',
        imgAlt: 'Git Logo',
        key: 0
    },
    {
        name: 'GitHub',
        img: 'assets/logos/github-mark.png',
        imgAlt: 'GitHub Logo',
        key: 1
    }
];
const certifications = [
    {
        name: 'AWS Certified Cloud Practitioner',
        img: 'assets/logos/awsIcon.png',
        imgAlt: 'AWS Logo',
        key: 0
    }
];
}),
"[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Resume
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/resume.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$components$2f$skill$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/components/skill.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resumeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resumeData.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function Resume() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].resume,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].gradientContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].pageTitle,
                    children: "Resume"
                }, void 0, false, {
                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].resumeInfoContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].resumeButtonContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].resumeButton,
                            href: "assets/resume.pdf",
                            children: "Download Resume"
                        }, void 0, false, {
                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].entry,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Education"
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schools,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].outerContainer,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "assets/logos/calPolyLogo.jpg",
                                                    alt: "Cal Poly Logo",
                                                    width: 300
                                                }, void 0, false, {
                                                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolDetails,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolName,
                                                            children: "California Polytechnic State University San Luis Obispo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                            lineNumber: 31,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolDescription,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Concentration: "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                                    lineNumber: 35,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Bachelor of Science Computer Science"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                            lineNumber: 34,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolDescription,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Expected Graduation Date: "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                                    lineNumber: 39,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "May 2027"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolDescription,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Coursework: "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                                    lineNumber: 42,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Data Structures, Introduction to Computer Organization, Object Oriented Programming, Discrete Structures, Systems Programming, Design and Analysis of Algorithms, Intro to Database Systems"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolDescription,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Relevant Projects: "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                                    lineNumber: 48,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Adventure game made in Java including polymorphism and class inheritance and rental review app made with React, Express, and MongoDB"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                            lineNumber: 47,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].outerContainer,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "assets/logos/ntuLogo.jpeg",
                                                    alt: "NTU Logo",
                                                    width: 300
                                                }, void 0, false, {
                                                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolDetails,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolName,
                                                            children: "Nanyang Technological University"
                                                        }, void 0, false, {
                                                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolDescription,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Term: "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                                    lineNumber: 68,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Summer 2025 Study Abroad"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].schoolDescription,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Coursework: "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                                    lineNumber: 71,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Cybersecurity (learned about cyberattacks and encryption algorithms)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].entry,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Skills"
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skillSectionTitle,
                                children: "Programming Languages"
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skills,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resumeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["programmingLanguages"].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$components$2f$skill$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        name: skill.name,
                                        img: skill.img,
                                        imgAlt: skill.imgAlt
                                    }, skill.key, false, {
                                        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skillSectionTitle,
                                children: "Front-End"
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skills,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resumeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["frontEnd"].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$components$2f$skill$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        name: skill.name,
                                        img: skill.img,
                                        imgAlt: skill.imgAlt
                                    }, skill.key, false, {
                                        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skillSectionTitle,
                                children: "Back-End"
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skills,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resumeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["backEnd"].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$components$2f$skill$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        name: skill.name,
                                        img: skill.img,
                                        imgAlt: skill.imgAlt
                                    }, skill.key, false, {
                                        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skillSectionTitle,
                                children: "Other"
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skills,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resumeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["other"].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$components$2f$skill$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        name: skill.name,
                                        img: skill.img,
                                        imgAlt: skill.imgAlt
                                    }, skill.key, false, {
                                        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skillSectionTitle,
                                children: "Certifications"
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resume$2f$resume$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].skills,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$app$2f$resumeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["certifications"].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$components$2f$skill$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        name: skill.name,
                                        img: skill.img,
                                        imgAlt: skill.imgAlt
                                    }, skill.key, false, {
                                        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/app/resume/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fe33e702._.js.map