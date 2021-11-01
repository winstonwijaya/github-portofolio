import emoji from "react-easy-emoji";

const illustration = {
    animated: true // Set to false to use static SVG
};

// Portofolio Greeting
const greeting = {
    username: "Winston Wijaya",
    title: "Hello everyone, I'm Winston",
    subTitle: emoji("A passionate Software Engineer 🚀 having experience of \
              building Web and Mobile applications with JavaScript / PHP / \
              Laravel and some other libraries and frameworks.\n\
              Experienced in designing UI/UX using Figma dan Justinmind"),
    resumeLink:
        "https://drive.google.com/file/d/1a2x9zZGoj5k1Nw_BXNOHaJ_wdpHCWm_v/view?usp=sharing",
    display: true
};

// Social media links
const socialMediaLinks = {
    github: "https://github.com/winstonwijaya",
    linkedin: "https://www.linkedin.com/in/winston-wijaya-9b5b58169/",
    gmail: "winstonwijaya984@gmail.com",
    display: true
};

// Skills section
const skillSection = {
    title: "What do I do?",
    subTitle: "ON FIRE SOFTWARE ENGINEER WHO IS EAGER TO LEARN AND EXPLORE EVERY TECH STACK",
    skills: [
        emoji("Developing Front End / User Interface for web and mobile apps"),
        emoji("Developing Back End for various purpose"),
        emoji("Creating suitable scheme for relational database"),
        emoji("Designing suitable UI/UX for users")
    ],
    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "Javascript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fab fa-database"
        },
        {
            skillName: "PHP",
            fontAwesomeClassname: "fab fa-php"
        },
        {
            skillName: "Laravel",
            fontAwesomeClassname: "fab fa-laravel"
        },
        {
            skillName: "Figma",
            fontAwesomeClassname: "fab fa-figma"
        }
    ],
    display: true
};

const educationSection = {
    schools: [
        {
            schoolName: "Bandung Institute of Technology",
            logo: require("./assets/img/itbLogo.png"),
            subHeader: "Bachelor of Science in Informatics / Computer Science",
            duration: "August 2017 - October 2021"
        }
    ],
    display: true
};

const experienceSection = {
    experience: [
        {
            role: "Software Engineer",
            company: "Sportigo Indonesia",
            companylogo: require("./assets/img/sportigoLogo.png"),
            date: "June 2020 – July 2020",
            desc: "Internship working experience as software engineer to\
                    develop a mobile application",
            descBullets: [
                "Developing front end using React Native and Typescript",
                "Developing back end using Laravel and mySQL database"
            ]            
        }
    ],
    display: true
};

const openSource = {
    showGithubProfile: "true",
    display: true
}

// Projects worked on
const projectSection = {
    title: "Personal Projects",
    subTitle: "Some personal projects I've done",
    projects: [
        {
            image: require("./assets/images/bccLogo.png"),
            projectName: "PYC Business Case Competition IPFEST 2020 Website",
            projectDesc: "Designing and developing web application to support\
                          minigame in the event: helping participant to know\
                          their current status and helping committee to update\
                          participant status"
        },
        {
            image: require("./assets/images/ipfestLogo.png"),
            projectName: "IPFEST 2021 Website",
            projectDesc: "Developing web application for IPFEST 2021 event \
                          for various purpose, such as displaying IPFEST 2021\
                          related information, competition registration, and \
                          other uses"
        }
    ],
    display: true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "Need to tell me something? My Inbox is open for all.",
    email_address: "winstonwijaya984@gmail.com"
};

export{
    illustration,
    greeting,
    socialMediaLinks,
    skillSection,
    educationSection,
    experienceSection,
    openSource,
    projectSection,
    contactInfo
};