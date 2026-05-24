// Hero Typing Effect

let heroText =
"Full Stack Developer | MERN Stack Learner";

let heroIndex = 0;

function typingEffect(){

    if(heroIndex < heroText.length){

        document.getElementById("typing").innerHTML +=
        heroText.charAt(heroIndex);

        heroIndex++;

        setTimeout(typingEffect,100);
    }
}

typingEffect();


// About Typing Effect

let aboutText = `

Hello! My name is Aditya Giri.

I am currently pursuing B.Tech in Information Technology
and I am passionate about Full Stack Web Development.

I enjoy building modern, responsive, and user-friendly
web applications using technologies like HTML, CSS,
JavaScript, React.js, Node.js, Express.js, and MongoDB.

I am continuously improving my programming and
problem-solving skills by learning Data Structures
and Algorithms (DSA) along with real-world projects.

I have worked on projects like an Online Bookstore
and Library Management System where I learned
frontend development, backend integration,
database handling, and responsive UI design.

My goal is to become a professional Full Stack Developer
and contribute to innovative real-world projects.

`;

let aboutIndex = 0;

function typeAbout(){

    if(aboutIndex < aboutText.length){

        document.getElementById("about-text").innerHTML +=
        aboutText.charAt(aboutIndex);

        aboutIndex++;

        setTimeout(typeAbout,25);
    }
}

typeAbout();


// Live Time

function showTime(){

    let today = new Date();

    document.getElementById("time").innerHTML =
    today.toLocaleString();
}

setInterval(showTime,1000);


// Dark Mode

function darkMode(){

    document.body.classList.toggle("dark");
}


// Contact Form

function submitForm(){

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    if(name == "" || email == "" || message == ""){

        alert("Please fill all fields");

        return false;
    }

    alert("Message Sent Successfully");

    return false;
}