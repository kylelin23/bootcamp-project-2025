var blogs = [
    {
        title: "Mid Autumn Festival",
        date: "October 6th, 2025",
        description: "Today is the mid autumn festival, and to celebrate I am eating mooncakes. ",
        image: "assets/mooncake.jpeg",
        imageAlt: "Mooncake Photo",
        slug: ""
    },
    {
        title: "First Week of School",
        date: "September 24th, 2025",
        description: "My first week went well! I'm not used to living off campus, but it's not too bad. The bus comes really often and is pretty consistent. Even if I do miss the bus, I can also always walk to school because the walk to school is only thirty minutes.",
        image: "assets/blog1.jpeg",
        imageAlt: "Blog Photo",
        slug: ""
    }
];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    blogDiv.className = "blog";
    var blogInfo = document.createElement("div");
    blogInfo.className = "blog-info";
    var blogTitle = document.createElement("h1");
    blogTitle.className = "blog-title";
    blogTitle.textContent = blog.title;
    var blogDate = document.createElement("p");
    blogDate.className = "blog-date";
    blogDate.textContent = blog.date;
    var blogDescription = document.createElement("p");
    blogDescription.className = 'blog-description';
    blogDescription.textContent = blog.description;
    var blogImage = document.createElement("img");
    blogImage.className = "blog-image";
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogImage.width = 200;
    blogInfo.appendChild(blogTitle);
    blogInfo.appendChild(blogDate);
    blogInfo.appendChild(blogDescription);
    blogInfo.appendChild(blogImage);
    if (blogContainer) {
        blogContainer.appendChild(blogDiv);
        blogDiv.appendChild(blogInfo);
    }
});
