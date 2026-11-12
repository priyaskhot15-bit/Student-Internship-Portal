
// Internship Data (Array of Objects)

const internships = [
    {
        title: "Web Development",
        category: "Programming",
        duration: "2 Months",
        mode: "Online"
    },
    {
        title: "Python Programming",
        category: "Programming",
        duration: "3 Months",
        mode: "Online"
    },
    {
        title: "Data Science",
        category: "Technology",
        duration: "2 Months",
        mode: "Hybrid"
    },
    {
        title: "Artificial Intelligence",
        category: "Technology",
        duration: "3 Months",
        mode: "Online"
    },
    {
        title: "UI/UX Design",
        category: "Design",
        duration: "2 Months",
        mode: "Online"
    },
    {
        title: "Java Programming",
        category: "Programming",
        duration: "3 Months",
        mode: "Hybrid"
    }
];

// Get HTML Elements

const internshipList =
    document.getElementById("internship-list");

const searchInput =
    document.getElementById("search");

const categorySelect =
    document.getElementById("category");

// Display Internship Cards

function displayInternships(data) {

    internshipList.innerHTML = "";

    if (data.length === 0) {
        internshipList.textContent =
            "No internships found.";
        return;
    }

    data.forEach(function(item) {

        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = item.title;

        const category = document.createElement("p");
        category.textContent = "Category: " + item.category;

        const duration = document.createElement("p");
        duration.textContent = "Duration: " + item.duration;

        const mode = document.createElement("p");
        mode.textContent = "Mode: " + item.mode;

        const applyButton = document.createElement("button");
        applyButton.textContent = "Apply Now";

        applyButton.addEventListener("click", function() {
            alert("You selected " + item.title +
            ". Application feature is a demo.");
        });

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(duration);
        card.appendChild(mode);
        card.appendChild(applyButton);

        internshipList.appendChild(card);
    });
}

// Search and Filter Functionality

function filterInternships() {

    const searchValue = searchInput.value.toLowerCase();

    const categoryValue = categorySelect.value;

    const filteredData = internships.filter(function(item) {

        const matchesSearch =
            item.title.toLowerCase().includes(searchValue);

        const matchesCategory =
            categoryValue === "all" ||
            item.category === categoryValue;

        return matchesSearch && matchesCategory;
    });

    displayInternships(filteredData);
}

// Search Event

searchInput.addEventListener("input", filterInternships);

// Category Filter Event

categorySelect.addEventListener("change", filterInternships);

// Display All Internships Initially

displayInternships(internships);

// Contact Form Validation

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    const result = document.getElementById("form-result");

    if (!name || !email || !message) {

        result.textContent = "Please fill in all fields.";
        return;
    }

    result.textContent =
        "Thank you, " + name + "! Your form is validated.";

    contactForm.reset();
});
