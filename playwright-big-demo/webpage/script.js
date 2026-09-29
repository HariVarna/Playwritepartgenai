let students = [
    {
        id: 1001,
        name: "Arun Kumar",
        email: "arun@example.com",
        phone: "9876543210",
        course: "Playwright",
        city: "Coimbatore",
        status: "Active"
    },
    {
        id: 1002,
        name: "Priya Sharma",
        email: "priya@example.com",
        phone: "9876543211",
        course: "Python",
        city: "Chennai",
        status: "Active"
    },
    
];


let editingStudentId = null;


/* LOGIN */

document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const username =
                document.getElementById("username").value;

            const password =
                document.getElementById("password").value;


            if (
                username === "admin" &&
                password === "admin123"
            ) {

                document
                    .getElementById("loginPage")
                    .classList.add("hidden");

                document
                    .getElementById("appPage")
                    .classList.remove("hidden");

                renderStudents();

            }

            else {

                document
                    .getElementById("loginError")
                    .classList.remove("hidden");

            }

        }
    );



/* NAVIGATION */

document
    .querySelectorAll("[data-page]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                function() {

                    const page =
                        this.dataset.page;

                    showPage(page);

                }
            );

        }
    );



function showPage(page) {

    document
        .querySelectorAll(".content-page")
        .forEach(
            section => {

                section.classList.add("hidden");

            }
        );


    const selectedPage =
        document.getElementById(
            page + "Page"
        );

    if (selectedPage) {

        selectedPage.classList.remove("hidden");

    }


    document
        .querySelectorAll(".nav-item")
        .forEach(
            item => {

                item.classList.remove("active");

                if (
                    item.dataset.page === page
                ) {

                    item.classList.add("active");

                }

            }
        );


    const titles = {

        dashboard: [
            "Dashboard",
            "Welcome to Student Management System"
        ],

        register: [
            "Register Student",
            "Add a new student"
        ],

        students: [
            "Students",
            "Manage student records"
        ],

        courses: [
            "Courses",
            "Available training programs"
        ],

        reports: [
            "Reports",
            "Student performance analytics"
        ]

    };


    document
        .getElementById("pageTitle")
        .textContent =
        titles[page][0];


    document
        .getElementById("pageSubtitle")
        .textContent =
        titles[page][1];

}



/* REGISTER STUDENT */

document
    .getElementById("studentForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const newStudent = {

                id:
                    1000 +
                    students.length +
                    1,

                name:
                    document
                        .getElementById("studentName")
                        .value,

                email:
                    document
                        .getElementById("studentEmail")
                        .value,

                phone:
                    document
                        .getElementById("studentPhone")
                        .value,

                course:
                    document
                        .getElementById("studentCourse")
                        .value,

                city:
                    document
                        .getElementById("studentCity")
                        .value,

                status:
                    document
                        .getElementById("studentStatus")
                        .value

            };


            students.push(newStudent);


            document
                .getElementById("registrationSuccess")
                .classList.remove("hidden");


            document
                .getElementById("studentForm")
                .reset();


            renderStudents();


            setTimeout(
                () => {

                    document
                        .getElementById(
                            "registrationSuccess"
                        )
                        .classList.add("hidden");

                },
                4000
            );

        }
    );



/* RENDER STUDENTS */

function renderStudents() {

    const tbody =
        document.getElementById(
            "studentTableBody"
        );


    tbody.innerHTML = "";


    students.forEach(
        student => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>${student.id}</td>

                <td>
                    <strong>${student.name}</strong>
                </td>

                <td>${student.email}</td>

                <td>${student.course}</td>

                <td>${student.city}</td>

                <td>
                    <span class="status">
                        ${student.status}
                    </span>
                </td>

                <td>

                    <button
                        class="action-button edit-button"
                        onclick="editStudent(${student.id})"
                    >
                        ✏️
                    </button>

                    <button
                        class="action-button delete-button"
                        onclick="deleteStudent(${student.id})"
                    >
                        🗑️
                    </button>

                </td>

            `;


            tbody.appendChild(row);

        }
    );


    renderRecentStudents();


    document
        .getElementById("totalStudents")
        .textContent =
        120 + students.length - 4;


    document
        .getElementById("newRegistrations")
        .textContent =
        24 + Math.max(0, students.length - 4);

}



/* RECENT STUDENTS */

function renderRecentStudents() {

    const tbody =
        document.getElementById(
            "recentStudents"
        );


    tbody.innerHTML = "";


    students
        .slice(-4)
        .forEach(
            student => {

                const row =
                    document.createElement("tr");


                row.innerHTML = `

                    <td>
                        ${student.name}
                    </td>

                    <td>
                        ${student.course}
                    </td>

                    <td>
                        <span class="status">
                            ${student.status}
                        </span>
                    </td>

                `;


                tbody.appendChild(row);

            }
        );

}



/* SEARCH */

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        filterStudents
    );


document
    .getElementById("courseFilter")
    .addEventListener(
        "change",
        filterStudents
    );


function filterStudents() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const course =
        document
            .getElementById("courseFilter")
            .value;


    const filtered =
        students.filter(
            student => {

                const matchesSearch =
                    student.name
                        .toLowerCase()
                        .includes(search) ||

                    student.email
                        .toLowerCase()
                        .includes(search);


                const matchesCourse =
                    !course ||
                    student.course === course;


                return (
                    matchesSearch &&
                    matchesCourse
                );

            }
        );


    renderFilteredStudents(filtered);

}



function renderFilteredStudents(list) {

    const tbody =
        document.getElementById(
            "studentTableBody"
        );


    tbody.innerHTML = "";


    list.forEach(
        student => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>${student.id}</td>

                <td>
                    <strong>${student.name}</strong>
                </td>

                <td>${student.email}</td>

                <td>${student.course}</td>

                <td>${student.city}</td>

                <td>
                    <span class="status">
                        ${student.status}
                    </span>
                </td>

                <td>

                    <button
                        class="action-button edit-button"
                        onclick="editStudent(${student.id})"
                    >
                        ✏️
                    </button>

                    <button
                        class="action-button delete-button"
                        onclick="deleteStudent(${student.id})"
                    >
                        🗑️
                    </button>

                </td>

            `;


            tbody.appendChild(row);

        }
    );

}



/* EDIT */

function editStudent(id) {

    const student =
        students.find(
            item => item.id === id
        );


    if (!student) {
        return;
    }


    editingStudentId = id;


    document
        .getElementById("editName")
        .value =
        student.name;


    document
        .getElementById("editEmail")
        .value =
        student.email;


    document
        .getElementById("editModal")
        .classList.remove("hidden");

}



/* SAVE EDIT */

document
    .getElementById("saveEdit")
    .addEventListener(
        "click",
        function() {

            const student =
                students.find(
                    item =>
                        item.id ===
                        editingStudentId
                );


            if (student) {

                student.name =
                    document
                        .getElementById("editName")
                        .value;

                student.email =
                    document
                        .getElementById("editEmail")
                        .value;

            }


            document
                .getElementById("editModal")
                .classList.add("hidden");


            renderStudents();

        }
    );



/* CANCEL EDIT */

document
    .getElementById("cancelEdit")
    .addEventListener(
        "click",
        function() {

            document
                .getElementById("editModal")
                .classList.add("hidden");

        }
    );



/* DELETE */

function deleteStudent(id) {

    const student =
        students.find(
            item => item.id === id
        );


    if (!student) {
        return;
    }


    students =
        students.filter(
            item => item.id !== id
        );


    renderStudents();

}



/* LOGOUT */

document
    .getElementById("logoutButton")
    .addEventListener(
        "click",
        function() {

            document
                .getElementById("appPage")
                .classList.add("hidden");

            document
                .getElementById("loginPage")
                .classList.remove("hidden");

            document
                .getElementById("loginForm")
                .reset();

        }
    );



/* INITIAL */

renderStudents();