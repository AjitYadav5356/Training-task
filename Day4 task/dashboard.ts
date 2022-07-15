const CartBody: any = document.querySelector(".card_body");

let data1: {
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
      topic: "Topics",
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
      topic: "Topics",
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
      topic: "Topics",
    },
  ];
  let Carddata:String='';
  for(let data of data1){
    Carddata+=`
    <div class="card">
                <div class="upper">
                    <img class="card-img" src="${data.photo}" alt="cardimg">
                    <div class="card-content" style="width: 70%;">
                        <div class="acc">
                            <h2 style ="font-size :16px" >${data.name}</h2>
                            <img src="./image/favourite.svg" alt="favourite">
                        </div>
                        <p>${data.subject} | ${data.grade} <span style="color: green;">${data.Number1}</span></p>
                        <p style="padding-top: 2px;"><span style="padding-right:4px ;"> <b>${data.N_u}</b> </span>${data.unit} <span
                                style="padding:0px 4px ;">${data.N_l} </span>${data.lesson}<span style="padding:0px 4px ;">${data.N_T} </span>
                                ${data.topic} </p>

                        <select class="coursesname" name="coursesname">
                            <option value="">${data.selectData}</option>
                        </select>
                        <p  id = "course-date"> ${data.Number_student} | ${data.date} </p>
                    </div>
                </div>
                <hr />
                <div class="card-footer">
                    <img src="./image/preview.svg" alt="preview image">
                    <img src="./image/manage course.svg" alt="manage course">
                    <img src="./image/grade submissions.svg" alt="grade submission">
                    <img src="./image/reports.svg"" alt="view report">
                </div>

            </div>

    `
  }
  CartBody.innerHTML=Carddata