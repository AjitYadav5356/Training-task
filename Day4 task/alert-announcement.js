let speakericon = document.querySelector(".microphone");
let announcementli = document.querySelector(".speaker-option");
let announcement_container = [...document.querySelectorAll(".announcement--container")];
let dropdowns_content_container = [...document.querySelectorAll(".announcement-content-container")]

speakericon.addEventListener("mouseover", (e) => {
    announcement_container[1].classList.add("announcements--container--dropdown");
});
document.addEventListener('click', (event) => {
    if(!announcement_container[1].contains(event.target)){
        announcement_container[1].classList.remove("announcements--container--dropdown");
    }
});
const announcements = [
    `<div class="announcement-content">
        <div>
            <p class="custom-font-size">
                <span class="custom-color ">PA:</span>
                Wilson Kumar
            </p>
            <img src="./image/circle-check-solid.svg" alt="check_circle">
        </div>
        <div>
            No classes will be held on 21st Nov
        </div>
        <div class="custom-font-size ">
            <span class="custom-color custom-span">
                <img src="./image/paperclip-solid.svg" alt="attachments" class="attach-file">
                2 files attached
            </span>
            <span class="custom-color">
                15-Sep-2018 at 07:21 pm
            </span>
        </div>
    </div>`,
    `<div class="announcement-content dnd-on">
        <div>
            <p class="custom-font-size">
                <span class="custom-color ">PA:</span>
                Samson White
            </p>
            <img src="./icons/do_not_disturb.svg" alt="check_circle">
        </div>
    
        <div>
            Guest Lecture on Geometry on 20th September
        </div>
        <div class="custom-font-size ">
            <span class="custom-content custom-span">
                <img src="./image/paperclip-solid.svg"alt="attachments" class="attach-file">
                2 files attached
            </span>
            <span class="custom-content">
                15-Sep-2018 at 07:21 pm
            </span>
        </div>
    </div>`,
    `<div class="announcement-content">
        <div>
            <p class="custom-font-size">
                <span class="custom-color ">PA:</span>
                Wilson Kumar
            </p>
            <img src="./image/circle-check-solid.svg" alt="check_circle">
        </div>
    
        <div>
            Additional course materials avaialable on request
        </div>
    
        <div class="custom-font-size custom-color">
            Course: Mathematics 101
        </div>
    
        <div class="custom-font-size ">
            <span class="custom-color custom-span">
                <!-- <img src="./icons/attach_file.svg" alt="attachments" class="attach-file">
                2 files attached -->
            </span>
            <span class="custom-color">
                15-Sep-2018 at 07:21 pm
            </span>
        </div>
    </div>`,
    `<div class="announcement-content dnd-on">
        <div>
            <p class="custom-font-size">
                <span class="custom-color ">PA:</span>
                Wilson Kumar
            </p>
            <img src="./icons/do_not_disturb.svg" alt="check_circle">
        </div>
    
        <div>
            No classes will be held on 25th Dec
        </div>
    
        <div class="custom-font-size custom-color">
            <!-- Course: Mathematics 101 -->
        </div>
    
        <div class="custom-font-size ">
            <span class="custom-color custom-span">
                <!-- <img src="../svg/attach_file.svg" alt="attachments" class="attach-file">
                                        2 files attached -->
            </span>
            <span class="custom-color">
                15-Sep-2018 at 07:21 pm
            </span>
        </div>
    </div>`,
    `<div class="announcement-content dnd-on">
        <div>
            <p class="custom-font-size">
                <span class="custom-color ">PA:</span>
                Wilson Kumar
            </p>
            <img src="./icons/do_not_disturb.svg" alt="check_circle">
        </div>
        <div>
            Additional course materials avaialable on request
        </div>
        <div class="custom-font-size custom-color">
            Course: Mathematics 101
        </div>
        <div class="custom-font-size ">
            <span class="custom-color custom-span">
                <!-- <img src="../svg/attach_file.svg" alt="attachments" class="attach-file">
                                                                2 files attached -->
            </span>
            <span class="custom-color">
                15-Sep-2018 at 07:21 pm
            </span>
        </div>
    </div>`
];
if(announcementli.lastElementChild){
    announcementli.lastElementChild.textContent = `${announcements.length}`;
}
let allannouncement = "";
for(let ele of announcements){
    allannouncement += ele;
}
dropdowns_content_container[1].insertAdjacentHTML('afterbegin', allannouncement);

//For NOtifications
let bellicon = document.querySelector(".bell-svg");
let bellInList = document.querySelector(".bell-option");
bellicon.addEventListener("mouseover", (e) => {
    announcement_container[0].classList.add("announcements--container--dropdown");
});
document.addEventListener('click', (event) => {
    if(!announcement_container[0].contains(event.target)){
        announcement_container[0].classList.remove("announcements--container--dropdown");
    }
});
const notifications = [
    `<div class= "announcement-content dnd-on" >
        <div >
            License for Introduction to Algebra has been assigned to your school
            <img src = "./icons/do_not_disturb.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 15 - Sep - 2018 at 07: 21 pm </span>
        </div>
    </div>`,
    `<div class= "announcement-content" >
        <div >
            Lesson 3 Practice Worksheet overdue for Amy Santiago
            <img src = "./image/circle-check-solid.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
            Course: Advanced Mathematics
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 15 - Sep - 2018 at 05: 21 pm  </span>
        </div>
    </div>`,
    `<div class= "announcement-content dnd-on" >
        <div >
            23 students created
            <img src = "./icons/do_not_disturb.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 15 - Sep - 2018 at 01: 21 pm </span>
        </div>
    </div>`,
    `<div class= "announcement-content dnd-on" >
        <div >
            15 submissions ready for evaluation
            <img src = "./icons/do_not_disturb.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
            Course: Basics of Algebra
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 13 - Sep - 2018 at 01: 15 pm </span>
        </div>
    </div>`,
    `<div class= "announcement-content dnd-on" >
        <div >
            License for Basic Concepts of Geometry has been assigned to your...
            <img src = "./icons/do_not_disturb.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 15 - Sep - 2018 at 07: 21 pm </span>
        </div>
    </div>`,
    `<div class= "announcement-content" >
        <div >
            Lesson 3 Practice Worksheet overdue for Sam Diego
            <img src = "./image/circle-check-solid.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
            Course: Advanced Mathematics
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 15 - Sep - 2018 at 05: 21 pm </span>
        </div>
    </div>`
];
if(bellInList.lastElementChild){
    bellInList.lastElementChild.textContent = `${notifications.length}`;
}
let allNotifications = "";
for(let obj of notifications){
    allNotifications+=obj;
}
dropdowns_content_container[0].insertAdjacentHTML('afterbegin', allNotifications);
