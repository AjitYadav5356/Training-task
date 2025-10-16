var alertSection = document.querySelector(".announcement-container");
var data = [
  {
    name: "wilson Kumar",
    info: "No classes will be held on 21st Nov",
    date: "15-Sep-2018 at 07:21 pm",
    course: "",
    courseName: "",
    fileInfo: "2 files are attached",
    fileImage: "./image/paperclip-solid.svg",
    image: "./image/circle-check-solid.svg",
    color: "#FFFFFF",
  },
  {
    name: "Samson White",
    info: "Guest lecture on Geometry on 20th September",
    date: "15-Sep-2018 at 07:21 pm",
    course: "",
    courseName: "",
    fileInfo: "4 files are attached",
    fileImage: "./image/paperclip-solid.svg",
    image: "./image/circle-minus-solid.svg",
    color: "#FFFFEE",
  },
  {
    name: "Wilson Kumar",
    info: "Additional course materials available on request",
    date: "15-Sep-2018 at 07:21 pm",
    course: "Course:",
    courseName: " Mathematics 101",
    fileInfo: "",
    fileImage: "",
    image: "./image/circle-check-solid.svg",
    color: "#FFFFFF",
  },
  {
    name: "wilson Kumar",
    info: "No classes will be held on 25th Dec",
    date: "15-Sep-2018 at 07:21 pm",
    course: "",
    courseName: "",
    fileInfo: "2 files are attached",
    fileImage: "",
    image: "./image/circle-minus-solid.svg",
    color: "#FFFFEE",
  },
  {
    name: "Wilson Kumar",
    info: "Additional course materials available on request",
    date: "15-Sep-2018 at 07:21 pm",
    course: "Course:",
    courseName: " Mathematics 101",
    fileInfo: "",
    fileImage: "",
    image: "./image/circle-minus-solid.svg",
    color: "#FFFFEE",
  },
];
var announcement = "";
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
  var anct = data_1[_i];
  announcement += '\n    <div style="background-color:'
    .concat(
      anct.color,
      ';">\n        <div class="name-image">\n            <p> PA '
    )
    .concat(anct.name, ' </p>\n            <img src="')
    .concat(
      anct.image,
      '" alt="checked" class="checkImage">\n        </div>\n        <p> '
    )
    .concat(anct.info, " </p>\n        <p> ")
    .concat(anct.course, " ")
    .concat(
      anct.courseName,
      ' </p>\n        <div class="file-date" style="color:#6E6E6E;"> \n           <p> <img src="'
    )
    .concat(anct.fileImage, '" class="attachImage"> ')
    .concat(anct.fileInfo, " </p>\n            <p> ")
    .concat(
      anct.date,
      " </p>\n\n        </div>\n        <hr> \n    </div>  \n    \n    "
    );
}
// announcement+=`
//             <button>SHOW ALL </button>
// `
alertSection.innerHTML = announcement;
