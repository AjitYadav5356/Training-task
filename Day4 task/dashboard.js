var CartBody = document.querySelector(".just");
var course = [
    {
        name: 'Acceleration',
        subject: "Physics",
        selectData: "Mr.Frank's Class B ",
        photo: "./image/imageMask-1.svg",
        grade: "Grade 7",
        Number1: "+2",
        Number_student: "50 students",
        date: "21-Jan-2020- 21-Aug-2020",
        N_u: 4,
        unit: "Units",
        N_l: 18,
        lesson: "Lessons",
        N_T: 24,
        topic: "Topics",
        line: "|"
    },
    {
        name: 'Displacement ,Velocity and Speed',
        subject: "Physics",
        selectData: "No Classes ",
        photo: "./image/imageMask-1.png",
        grade: "Grade 6",
        Number1: "+3",
        Number_student: "",
        date: "",
        N_u: 2,
        unit: "Units",
        N_l: 15,
        lesson: "Lessons",
        N_T: 20,
        topic: "Topics",
        line: ""
    },
    {
        name: 'Introduction to Biology: Micro organisms and how they affec...',
        subject: "Biology",
        selectData: "All Classes",
        photo: "./image/imageMask-3.png",
        grade: "Grade 4",
        Number1: "+1",
        Number_student: "300 students",
        date: "",
        N_u: 4,
        unit: "Units",
        N_l: 18,
        lesson: "Lessons",
        N_T: 24,
        topic: "Topics",
        line: ""
    },
    {
        name: 'Introduction to High School Mathematics',
        subject: "Mathematics",
        selectData: "Mr.Frank's Class B",
        photo: "./image/imageMask-2.png",
        grade: "Grade 8",
        Number1: "+3",
        Number_student: "",
        date: "",
        N_u: 5,
        unit: "Units",
        N_l: 18,
        lesson: "Lessons",
        N_T: 24,
        topic: "Topics",
        line: ""
    },
];
var Carddata = '';
for (var _i = 0, course_1 = course; _i < course_1.length; _i++) {
    var data = course_1[_i];
    Carddata += "\n    <div class=\"card\">\n    <div class=\"course-details\">\n    <img  src=\"".concat(data.photo, "\" alt=\"cardimg\">\n    <div class=\"course-info\">\n        <div class=\"course-name\">\n        <p>").concat(data.name, " </p>\n        <img src=\"./image/favourite.svg\" alt=\"add to favourite\">\n    </div>\n        <p class=\"course-type\">").concat(data.subject, " | ").concat(data.grade, "<b style=\"color:  #1F7A54;\"> ").concat(data.Number1, "</b></p>\n        <p class=\"course-lesson\"><b style=\"color: #222222;\">").concat(data.N_u, "</b> ").concat(data.unit, " <b style=\"color: #222222;\"> ").concat(data.N_l, "</b>").concat(data.lesson, " <b style=\"color: #222222;\"> ").concat(data.N_T, "</b>").concat(data.topic, "</p>\n        <label for=\"mentor-name\"></label>\n        <select name=\"mentor\" id=\"mentor-name\" class=\"mentor-dropdown-menu\">\n            <option value=\"Mr. Frank's Class B\">").concat(data.selectData, "</option>\n            <option value=\"Mr. Frank's Class A\">Mr. Frank's Class B</option>\n            <option value=\"All Classes\">All Classes</option>\n        </select>\n        <div class=\"course-date\">\n            <p>").concat(data.Number_student, "</p>\n             <p class=\"line\">").concat(data.line, "</p>\n            <p>").concat(data.date, "</p>\n        </div>\n    </div>\n</div>\n    <hr>\n    <div class=\"all-shortcuts\">\n        <img src=\"./image/preview.svg\" alt=\"preview icon\" class=\"preview-icon\">\n        <img src=\"./image/manage course.svg\" alt=\"manage course icon\" class=\"manage-course-icon\">\n        <img src=\"./image/grade submissions.svg\" alt=\"grade submission icon\" class=\"grade-submission-icon\">\n        <img src=\"./image/reports.svg\" alt=\"report icon\" class=\"report-icon\">\n    </div>\n</div>\n\n");
}
CartBody.innerHTML = Carddata;
