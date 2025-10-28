var blogs = [
    {
        title: "Mid Autumn Festival",
        date: "October 6th, 2025",
        description: "Today is the mid autumn festival, and to celebrate I am eating mooncakes. ",
        image: "assets/mooncake.jpeg",
        imageAlt: "Mooncake Photo",
        slug: "midAutumnFestival.html"
    },
    {
        title: "First Week of School",
        date: "September 24th, 2025",
        description: "My first week went well! I'm not used to living off campus, but it's not too bad. The bus comes really often and is pretty consistent. Even if I do miss the bus, I can also always walk to school because the walk to school is only thirty minutes.",
        image: "assets/blog1.jpeg",
        imageAlt: "Blog Photo",
        slug: "firstWeekOfSchool.html"
    }
];
// BLOG PAGE
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    blogDiv.className = "blog";
    var blogInfo = document.createElement("a");
    blogInfo.href = blog.slug;
    blogInfo.className = "blog-info";
    var blogTitle = document.createElement("h1");
    blogTitle.className = "blog-title";
    blogTitle.textContent = blog.title;
    var blogImage = document.createElement("img");
    blogImage.className = "blog-image";
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogImage.width = 200;
    blogInfo.appendChild(blogTitle);
    blogInfo.appendChild(blogImage);
    if (blogContainer) {
        blogContainer.appendChild(blogDiv);
        blogDiv.appendChild(blogInfo);
    }
});
// MID AUTUMN FESTIVAL PAGE
var blog1Container = document.getElementById('blog1Container');
var blog1 = blogs[0];
var blog1Div = document.createElement("div");
blog1Div.className = "blog";
var blog1Info = document.createElement("div");
blog1Info.className = "blog-info";
var blog1Title = document.createElement("h1");
blog1Title.className = "blog-title";
blog1Title.textContent = blog1.title;
var blog1Date = document.createElement("p");
blog1Date.className = "blog-date";
blog1Date.textContent = blog1.date;
var blog1Description = document.createElement("p");
blog1Description.className = 'blog-description';
blog1Description.textContent = blog1.description;
var blog1Image = document.createElement("img");
blog1Image.className = "blog-image";
blog1Image.src = blog1.image;
blog1Image.alt = blog1.imageAlt;
blog1Image.width = 200;
blog1Info.appendChild(blog1Title);
blog1Info.appendChild(blog1Date);
blog1Info.appendChild(blog1Description);
blog1Info.appendChild(blog1Image);
if (blog1Container) {
    blog1Container.appendChild(blog1Div);
    blog1Div.appendChild(blog1Info);
}
// FIRST WEEK PAGE
var blog2Container = document.getElementById('blog2Container');
var blog2 = blogs[1];
var blog2Div = document.createElement("div");
blog2Div.className = "blog";
var blog2Info = document.createElement("div");
blog2Info.className = "blog-info";
var blog2Title = document.createElement("h1");
blog2Title.className = "blog-title";
blog2Title.textContent = blog2.title;
var blog2Date = document.createElement("p");
blog2Date.className = "blog-date";
blog2Date.textContent = blog2.date;
var blog2Description = document.createElement("p");
blog2Description.className = 'blog-description';
blog2Description.textContent = blog2.description;
var blog2Image = document.createElement("img");
blog2Image.className = "blog-image";
blog2Image.src = blog2.image;
blog2Image.alt = blog2.imageAlt;
blog2Image.width = 200;
blog2Info.appendChild(blog2Title);
blog2Info.appendChild(blog2Date);
blog2Info.appendChild(blog2Description);
blog2Info.appendChild(blog2Image);
if (blog2Container) {
    blog2Container.appendChild(blog2Div);
    blog2Div.appendChild(blog2Info);
}
