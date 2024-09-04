$(document).ready(function () {
    // Example static daily blog content
    const dailyBlogs = [
        {
            date: "2024-09-01",
            title: "Getting Started with full stack ",
            content: "---------------------------------------",
            url: "1.html" // URL of the detailed blog page
        },
        {
            date: "2024-09-02",
            title: "Understanding basic java concept",
            content: "....",
            url: "2.html" // URL of the detailed blog page
        }
        // Add more blogs as needed
    ];

    // Function to render blogs in the blog container
    function renderBlogs() {
        const blogContainer = $("#blogContainer");
        blogContainer.empty(); // Clear any previous content

        dailyBlogs.forEach(blog => {
            const blogElement = `
                <div class="blog-post">
                    <h3><a href="${blog.url}" target="_blank">${blog.title}</a></h3>
                    <p><em>${blog.date}</em></p>
                    <p>${blog.content}</p>
                </div>
            `;
            blogContainer.append(blogElement);
        });
    }

    // Initial blog rendering
    renderBlogs();
});
