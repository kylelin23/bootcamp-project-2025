type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
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
]

const blogContainer = document.getElementById('blog-container');

blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.className = "blog";

    const blogInfo = document.createElement("div");
    blogInfo.className = "blog-info";

    const blogTitle = document.createElement("h1");
    blogTitle.className = "blog-title";
    blogTitle.textContent = blog.title;

    const blogDate = document.createElement("p");
    blogDate.className = "blog-date";
    blogDate.textContent = blog.date;

    const blogDescription = document.createElement("p");
    blogDescription.className = 'blog-description';
    blogDescription.textContent = blog.description;

    const blogImage = document.createElement("img");
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogImage.width = 100;

    blogInfo.appendChild(blogTitle);
    blogInfo.appendChild(blogDate);
    blogInfo.appendChild(blogDescription);
    blogInfo.appendChild(blogImage);

    if (blogContainer){
        blogContainer.appendChild(blogDiv);
        blogDiv.appendChild(blogInfo);
    }

})