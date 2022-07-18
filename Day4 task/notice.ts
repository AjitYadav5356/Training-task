const noticeSection: any = document.getElementById("main-notice-container");

let detail: {
  info: string;
  date: string;
  image: string;
  course: string;
  courseName: string;
  color: string;
}[] = [
  {
    info: "License for Introduction to Algebra has been assigned to your school",
    date: "15-Sep-2018 at 07:21 pm",
    image: "./image/circle-minus-solid.svg",
    course: "",
    courseName: "",
    color: "#FFFFEE 0% 0% no-repeat padding-box",
  },
  {
    info: "Lesson 3 Practice Worksheet overdue for Amy Santiago",
    date: "15-Sep-2018 at 05:21 pm",
    image: "./image/circle-check-solid.svg",
    course: "Course: ",
    courseName: "Advanced Mathematics",
    color: "#FFFFFF 0% 0% no-repeat padding-box;",
  },
  {
    info: "23 new students created",
    date: "14-Sep-2018 at 01:21 pm",
    image: "./image/circle-minus-solid.svg",
    course: "",
    courseName: "",
    color: "#FFFFEE 0% 0% no-repeat padding-box",
  },
  {
    info: "15 submissions ready for evaluation",
    date: "13-Sep-2018 at 01:15 pm",
    image: "./image/circle-minus-solid.svg",
    course: "Class:",
    courseName: " Basics of Algebra",
    color: "#FFFFEE 0% 0% no-repeat padding-box",
  },
  {
    info: "License for Basic Concepts in Geometry has been assigned to your... school",
    date: "15-Sep-2018 at 07:21 pm",
    image: "./image/circle-minus-solid.svg",
    course: "",
    courseName: "",
    color: "#FFFFEE 0% 0% no-repeat padding-box",
  },
];

let notices: string = "";
for (let n of detail) {
  notices += `   
        <div style="background:${n.color};">
        <div class="infoImage">
        <p>${n.info} </p>
        <img src="${n.image}" class="checkImage">
        </div>
        <p> ${n.course} ${n.courseName} </p>
        <p style="text-align:end"> ${n.date} </p>
        </div>

    `;
}

noticeSection.innerHTML = notices;
