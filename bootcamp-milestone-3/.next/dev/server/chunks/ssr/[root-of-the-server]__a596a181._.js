module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/bootcamp-project-2025/bootcamp-milestone-3/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/bootcamp-project-2025/bootcamp-milestone-3/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Blog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
async function getBlog(slug) {
    try {
        // This fetches the blog from an api endpoint that would GET the blog
        const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
            cache: "no-store"
        });
        // This checks that the GET request was successful
        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }
        return res.json();
    } catch (err) {
        console.log(`error: ${err}`);
        return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "error: " + err, we can just do the above
    // it is simular to formated strings in python --> f"{err}"
    }
}
async function Blog({ params: { slug } }) {
    const blog = await getBlog(slug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2d$project$2d$2025$2f$bootcamp$2d$milestone$2d$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: "blog.title"
    }, void 0, false, {
        fileName: "[project]/bootcamp-project-2025/bootcamp-milestone-3/app/blog/[slug]/page.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
}),
"[project]/bootcamp-project-2025/bootcamp-milestone-3/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/bootcamp-project-2025/bootcamp-milestone-3/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a596a181._.js.map