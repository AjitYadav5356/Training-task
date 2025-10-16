const alertSection: any = document.querySelector(".announcement-container");

let data: {
  name: string;
  info: string;
  date: string;
  course: string;
  courseName: string;
  fileInfo: string;
  fileImage: string;
  image: string;
  color: string;
}[] = [
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

let announcement: string = "";
for (let anct of data) {
  announcement += `
    <div style="background-color:${anct.color};">
        <div class="name-image">
            <p> PA ${anct.name} </p>
            <img src="${anct.image}" alt="checked" class="checkImage">
        </div>
        <p> ${anct.info} </p>
        <p> ${anct.course} ${anct.courseName} </p>
        <div class="file-date" style="color:#6E6E6E;"> 
           <p> <img src="${anct.fileImage}" class="attachImage"> ${anct.fileInfo} </p>
            <p> ${anct.date} </p>

        </div>
        <hr> 
    </div>  
    
    `;
}

// announcement+=`
//             <button>SHOW ALL </button>
// `

alertSection.innerHTML = announcement;
