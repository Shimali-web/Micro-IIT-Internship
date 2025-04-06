// JavaScript for Animations & Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Scale effect on load
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.transform = "scale(1.05)";
            setTimeout(() => {
                box.style.transform = "scale(1)";
            }, 300);
        }, index * 200);
    });

    // Hamburger menu toggle
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Click Hover Effect
    boxes.forEach((box) => {
        box.addEventListener("mousedown", () => {
            box.style.transform = "scale(1.15)";
        });
        box.addEventListener("mouseup", () => {
            box.style.transform = "scale(1)";
        });
    });
});


//STUDENT.HTML JSS
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

// Load students from localStorage
function loadStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let tableBody = document.getElementById("studentList");
    tableBody.innerHTML = "";

    students.forEach((student) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.section}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Enroll student
function enrollStudent() {
    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("rollNumber").value;
    let section = document.getElementById("classSection").value;

    if (!name || !roll || !section) {
        alert("Please fill all fields!");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push({ name, roll, section });
    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Enrolled Successfully!");
    document.getElementById("studentName").value = "";
    document.getElementById("rollNumber").value = "";
    document.getElementById("classSection").value = "";
}

// Load students for updating
function loadStudentsForUpdate() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let tableBody = document.getElementById("studentList");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.section}</td>
            <td>
                <button onclick="editStudent(${index})">✏ Edit</button>
                <button onclick="deleteStudent(${index})">🗑 Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Edit student
function editStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let student = students[index];

    let newName = prompt("Enter new name:", student.name);
    let newRoll = prompt("Enter new roll number:", student.roll);
    let newSection = prompt("Enter new class & section:", student.section);

    if (newName && newRoll && newSection) {
        students[index] = { name: newName, roll: newRoll, section: newSection };
        localStorage.setItem("students", JSON.stringify(students));
        loadStudentsForUpdate();
    }
}

// Delete student
function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    loadStudentsForUpdate();
}



//ATTENDANCE.HTML
// Function to Mark Attendance
function markAttendance() {
    let studentName = document.getElementById("student-name").value;
    let status = document.getElementById("attendance-status").value;
    let date = new Date().toLocaleDateString();

    if (studentName.trim() === "") {
        alert("Please enter student name!");
        return;
    }

    let table = document.getElementById("attendance-table").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerText = studentName;
    cell2.innerText = status;
    cell3.innerText = date;

    document.getElementById("student-name").value = "";
}

// Function to Export Attendance
function exportAttendance() {
    let table = document.getElementById("attendance-table");
    let rows = table.rows;
    let csvContent = "data:text/csv;charset=utf-8,Student Name,Status,Date\n";

    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let rowData = [];
        for (let j = 0; j < row.cells.length; j++) {
            rowData.push(row.cells[j].innerText);
        }
        csvContent += rowData.join(",") + "\n";
    }

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


//GRADE.HTML
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

function calculatePercentage() {
    let hindi = parseFloat(document.getElementById("hindi").value) || 0;
    let english = parseFloat(document.getElementById("english").value) || 0;
    let math = parseFloat(document.getElementById("math").value) || 0;
    let science = parseFloat(document.getElementById("science").value) || 0;
    let sst = parseFloat(document.getElementById("sst").value) || 0;
    let additional = parseFloat(document.getElementById("additional").value) || 0;

    // Store marks in an array
    let marks = [hindi, english, math, science, sst, additional];

    // Sort marks in descending order
    marks.sort((a, b) => b - a);

    // Take the best five subjects
    let bestFive = marks.slice(0, 5);

    // Calculate percentage
    let percentage = (bestFive.reduce((sum, mark) => sum + mark, 0) / 500) * 100;

    // Display result
    document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";
}

// Function to Export Grades
function exportGrade() {
    let table = document.getElementById("grade-table");
    let rows = table.rows;
    let csvContent = "data:text/csv;charset=utf-8,Student Name,Marks,Grade\n";

    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let rowData = [];
        for (let j = 0; j < row.cells.length; j++) {
            rowData.push(row.cells[j].innerText);
        }
        csvContent += rowData.join(",") + "\n";
    }

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "grade_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


//RETURN PAGE
function addReport() {
    let tableBody = document.getElementById("table-body");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td><input type="text" placeholder="Enter Name"></td>
        <td><input type="number" placeholder="Roll No"></td>
        <td><input type="text" placeholder="Class & Section"></td>
        <td><input type="number" class="attendance" placeholder="Attendance %"></td>
        <td><input type="number" class="grade" placeholder="Grade %"></td>
        <td>
            <button class="delete-btn" onclick="deleteRow(this)">🗑 Delete</button>
        </td>
    `;

    tableBody.appendChild(row);
}

function deleteRow(button) {
    let row = button.closest("tr");
    row.remove();
}

// Export Reports to PDF
function exportReportsPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("Student Reports", 80, 10);

    let table = document.getElementById("reports-table");
    let rows = table.rows;
    let data = [];

    for (let i = 0; i < rows.length; i++) {
        let row = [];
        for (let j = 0; j < rows[i].cells.length; j++) {
            row.push(rows[i].cells[j].innerText);
        }
        data.push(row);
    }

    doc.autoTable({
        head: [data[0]],  
        body: data.slice(1), 
        startY: 20
    });

    doc.save("Student_Reports.pdf");
}
