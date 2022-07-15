var CartBody = document.querySelector(".card_body");
var data1 = [
    {
        name: "Acceleration",
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
        topic: "Topics"
    },
    {
        name: "Displacement ,Velocity and Speed",
        subject: "Physics",
        selectData: "No Classes ",
        photo: "./image/imageMask-1.png",
        grade: "Grade 6",
        Number1: "+3",
        Number_student: "50 students",
        date: "21-Jan-2020- 21-Aug-2020",
        N_u: 2,
        unit: "Units",
        N_l: 15,
        lesson: "Lessons",
        N_T: 20,
        topic: "Topics"
    },
    {
        name: "Introduction to Biology: Micro organisms and how they affec...",
        subject: "Biology",
        selectData: "All Classes",
        photo: "./image/imageMask-3.png",
        grade: "Grade 4",
        Number1: "+1",
        Number_student: "300 students",
        date: "21-Jan-2020- 21-Aug-2020",
        N_u: 4,
        unit: "Units",
        N_l: 18,
        lesson: "Lessons",
        N_T: 24,
        topic: "Topics"
    },
    {
        name: "Introduction to High School Mathematics",
        subject: "Mathematics",
        selectData: "Mr.Frank's Class B",
        photo: "./image/imageMask-2.png",
        grade: "Grade 8",
        Number1: "+3",
        Number_student: "44 students",
        date: "21-Jan-2020- 21-Aug-2020",
        N_u: 4,
        unit: "Units",
        N_l: 18,
        lesson: "Lessons",
        N_T: 24,
        topic: "Topics"
    },
];
var Carddata = '';
for (var _i = 0, data1_1 = data1; _i < data1_1.length; _i++) {
    var data = data1_1[_i];
    Carddata += "\n    <div class=\"card\">\n                <div class=\"upper\">\n                    <img class=\"card-img\" src=\"".concat(data.photo, "\" alt=\"cardimg\">\n                    <div class=\"card-content\" style=\"width: 70%;\">\n                        <div class=\"acc\">\n                            <h2 style =\"font-size :16px\" >").concat(data.name, "</h2>\n                            <img src=\"./image/favourite.svg\" alt=\"favourite\">\n                        </div>\n                        <p>").concat(data.subject, " | ").concat(data.grade, " <span style=\"color: green;\">").concat(data.Number1, "</span></p>\n                        <p style=\"padding-top: 2px;\"><span style=\"padding-right:4px ;\"> <b>").concat(data.N_u, "</b> </span>").concat(data.unit, " <span\n                                style=\"padding:0px 4px ;\">").concat(data.N_l, " </span>").concat(data.lesson, "<span style=\"padding:0px 4px ;\">").concat(data.N_T, " </span>\n                                ").concat(data.topic, " </p>\n\n                        <select class=\"coursesname\" name=\"coursesname\">\n                            <option value=\"\">").concat(data.selectData, "</option>\n                        </select>\n                        <p  id = \"course-date\"> ").concat(data.Number_student, " | ").concat(data.date, " </p>\n                    </div>\n                </div>\n                <hr />\n                <div class=\"card-footer\">\n                    <img src=\"./image/preview.svg\" alt=\"preview image\">\n                    <img src=\"./image/manage course.svg\" alt=\"manage course\">\n                    <img src=\"./image/grade submissions.svg\" alt=\"grade submission\">\n                    <img src=\"./image/reports.svg\"\" alt=\"view report\">\n                </div>\n\n            </div>\n\n    ");
}
CartBody.innerHTML = Carddata;
