var noticeSection = document.getElementById("main-notice-container");
var detail = [
    {
        info: "License for Introduction to Algebra has been assigned to your school",
        date: "15-Sep-2018 at 07:21 pm",
        image: "./image/circle-minus-solid.svg",
        course: "",
        courseName: "",
        color: "#FFFFEE"
    },
    {
        info: "Lesson 3 Practice Worksheet overdue for Amy Santiago",
        date: "15-Sep-2018 at 05:21 pm",
        image: "./image/circle-check-solid.svg",
        course: "Course: ",
        courseName: "Advanced Mathematics",
        color: "#FFFFFF"
    },
    {
        info: "23 new students created",
        date: "14-Sep-2018 at 01:21 pm",
        image: "./image/circle-minus-solid.svg",
        course: "",
        courseName: "",
        color: "#FFFFEE"
    },
    {
        info: "15 submissions ready for evaluation",
        date: "13-Sep-2018 at 01:15 pm",
        image: "./image/circle-minus-solid.svg",
        course: "Class:",
        courseName: " Basics of Algebra",
        color: "#FFFFEE"
    },
    {
        info: "License for Basic Concepts in Geometry has been assigned to your... school",
        date: "15-Sep-2018 at 07:21 pm",
        image: "./image/circle-minus-solid.svg",
        course: "",
        courseName: "",
        color: "#FFFFEE"
    },
];
var notices = "";
for (var _i = 0, detail_1 = detail; _i < detail_1.length; _i++) {
    var n = detail_1[_i];
    notices += "   \n        <div style=\"background:".concat(n.color, ";\">\n        <div>\n        <div class=\"infoImage\">\n        <p>").concat(n.info, " </p>\n        <img src=\"").concat(n.image, "\" class=\"checkImage\">\n        </div>\n        <p> ").concat(n.course, " ").concat(n.courseName, " </p>\n        <p style=\"text-align:end\"> ").concat(n.date, " </p>\n        </div>\n     \n        </div>\n        <hr>\n    ");
}
noticeSection.innerHTML = notices;
