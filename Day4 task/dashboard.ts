const CartBody: any = document.querySelector(".just");

let course: {
  name: string;
  subject: string;
  selectData: string;
  photo: string;
  grade: string;
  Number1: string;
  Number_student: string;
  date: string;
  N_u: number;
  unit: string;
  N_l: number;
  lesson: string;
  N_T: number;
  topic: string;
  line: string;
}[] = [
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
    topic: "Topics",
    line: "|",
  },
  {
    name: "Displacement ,Velocity and Speed",
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
    line: "",
  },
  {
    name: "Introduction to Biology: Micro organisms and how they affec...",
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
    line: "",
  },
  {
    name: "Introduction to High School Mathematics",
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
    line: "",
  },
];

let Carddata: any = "";
for (let data of course) {
  Carddata += `
    <div class="card">
    <div class="course-details">
    <img  src="${data.photo}" alt="cardimg">
    <div class="course-info">
        <div class="course-name">
        <p>${data.name} </p>
        <img src="./image/favourite.svg" alt="add to favourite">
    </div>
        <p class="course-type">${data.subject} | ${data.grade}<b style="color:  #1F7A54;"> ${data.Number1}</b></p>
        <p class="course-lesson"><b style="color: #222222;">${data.N_u}</b> ${data.unit} <b style="color: #222222;"> ${data.N_l}</b>${data.lesson} <b style="color: #222222;"> ${data.N_T}</b>${data.topic}</p>
        <label for="mentor-name"></label>
        <select name="mentor" id="mentor-name" class="mentor-dropdown-menu">
            <option value="Mr. Frank's Class B">${data.selectData}</option>
            <option value="Mr. Frank's Class A">Mr. Frank's Class B</option>
            <option value="All Classes">All Classes</option>
        </select>
        <div class="course-date">
            <p>${data.Number_student}</p>
             <p class="line">${data.line}</p>
            <p>${data.date}</p>
        </div>
    </div>
</div>
    <hr>
    <div class="all-shortcuts">
        <img src="./image/preview.svg" alt="preview icon" class="preview-icon">
        <img src="./image/manage course.svg" alt="manage course icon" class="manage-course-icon">
        <img src="./image/grade submissions.svg" alt="grade submission icon" class="grade-submission-icon">
        <img src="./image/reports.svg" alt="report icon" class="report-icon">
    </div>
</div>

`;
}

CartBody.innerHTML = Carddata;
