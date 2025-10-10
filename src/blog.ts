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
        image: "/assets/mooncake.jpeg",
        imageAlt: "Mooncake Photo",
        slug: ""
    },
    {
        title: "First Week of School",
        date: "September 24th, 2025",
        description: "My first week went well! I'm not used to living off campus, but it's not too bad. The bus comes really often and is pretty consistent. Even if I do miss the bus, I can also always walk to school because the walk to school is only thirty minutes.",
        image: "/assets/blog1.jpeg",
        imageAlt: "Blog Photo",
        slug: ""
    }
]