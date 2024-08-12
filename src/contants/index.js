// import { FaHome } from "react-icons/fa";
import { community, cv, helpdesk, interview, job, research, security, stamp, hours, one, two, three, four, home, } from "../assets/icons";
import { avatar1, avatar2, avatar3 } from "../assets/images";
import TeachersRecruitmentDashboard from "../dashboardForTeacher/Dashboard";
import { FaHome, FaUser, FaCog } from 'react-icons/fa'

// NAVIGATION 
export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/trainings", label: "Training" },
    { href: "/conferences", label: "Conference" },
    { href: "/courses", label: "Courses" },
];

//PROFESSIONAL TEACHERS FEATURES
export const features = [
    {
        icon: stamp,
        name: "Background Verification",
        about: 'Offer background verification services, including criminal background checks, educational credential verification, and employment history verification, to ensure compliance with regulatory requirements and safeguard school communities.'

    },
    {
        icon: interview,
        name: "Interview Scheduling",
        about: "Coordinate interview schedules efficiently with automated scheduling tools, allowing both teachers and school administrators to manage interview appointments seamlessly."
    },
    {
        icon: security,
        name: "Advanced Security",
        about: "Rest easy knowing that your data is protected with state-of-the-art security measures.."
    },
    {
        icon: helpdesk,
        name: "Teacher Support Resources",
        about: "Access support resources such as classroom management tips, behavior management strategies, and pedagogical best practices to enhance teaching effectiveness."
    },
    {
        icon: research,
        name: "Reference Checking",
        about: "Conduct reference checks efficiently by requesting and receiving references directly through the platform, ensuring credibility and authenticity of candidate qualifications."
    },
    {
        icon: cv,
        name: "Resume Builder",
        about: " Utilize a built-in resume builder tool to create professional resumes tailored to teaching positions, highlighting relevant skills, experiences, and accomplishments."
    },
    {
        icon: job,
        name: "Job Listings",
        about: "Access a comprehensive database of teaching vacancies across various subjects, grade levels, and locations, providing teachers with a wide range of job opportunities to explore."
    },
    {
        icon: community,
        name: "Community Forums",
        about: "Connect with fellow educators through community forums and discussion boards to share ideas, collaborate on projects, and seek advice on classroom challenges."
    },
    {
        icon: hours,
        name: "24/7 Support",
        about: "Get assistance whenever you need it with our round-the-clock customer support team."
    },
];


export const howItWorks = [
    {
        id: '1',
        icon: one,
        header: `Create Your Profile`,
        content: `Sign up for an account and create a personalized profile showcasing your teaching qualifications, experience, and expertise.`
    },
    // {
    //     id: '2',
    //     header: `Explore Teaching Opportunities`,
    //     content: `Browse through a wide range of teaching vacancies posted by schools across various locations`
    // },
    {
        id: '2',
        icon: two,
        header: `Apply to Positions`,
        content: `Discover teaching positions that match your interests and qualifications, and submit your application directly through the platform.`
    },
    // {
    //     id: '4',
    //     header: `Communicate with Schools`,
    //     content: `Engage in direct communication with school administrators through our messaging platform to clarify doubts, schedule interviews, and negotiate terms.`
    // },
    {
        id: '3',
        icon: three,
        header: ` Prepare for Interviews`,
        content: `Prepare for interviews by accessing resources and tips on effective interview techniques, teaching demos, and professional presentation.`
    },
    {
        id: '4',
        icon: four,
        header: ` Get Hired`,
        content: `Successfully navigate the recruitment process and secure your desired teaching position.`
    },
    // {
    //     id: '7',
    //     header: ` Provide Feedback`,
    //     content: `Share your experience and provide feedback on the recruitment process, helping us continually improve and enhance the platform.`
    // },
    // {
    //     id: '8',
    //     header: ` Grow Your Career`,
    //     content: `Once hired, continue to engage with the Professional Teacher Hub community to access professional development opportunities, networking events, and resources to support your ongoing career growth and success.`
    // },
];

//TESTIMONIALS
export const testimonials = [
    {
        img: avatar1,
        name: "Kolawole Adewale",
        occupation: "Commnity Grammar School English Teacher",
        quote: "Professional Teacher Hub has been a game-changer for me in my job search. The platform's user-friendly interface and comprehensive job listings made it easy for me to find the perfect teaching position. I highly recommend it to any educator looking for their next opportunity."
    },
    {
        img: avatar2,
        name: "Fatai Abdullah",
        occupation: "Principal, Elerin Meta School",
        quote: "As a school administrator, I've been impressed with the quality of candidates we've found through Professional Teacher Hub. The platform's robust features, such as advanced search filters and candidate assessment tools, have streamlined our recruitment process and helped us identify top talent efficiently."
    },
    // {
    //   name: "David Martinez",
    //   occupation: "Middle School Science Teacher",
    //   quote: "I'm grateful to Professional Teacher Hub for helping me land my dream teaching job. The platform provided me with valuable resources and support throughout the application and interview process, making it a stress-free experience. Thank you for connecting me with my new school!"
    // },
    // {
    //   name: "Emily Nguyen",
    //   occupation: "Special Education Teacher",
    //   quote: "Professional Teacher Hub not only helped me find a teaching position that aligned with my passions and expertise but also provided ongoing support and professional development opportunities. It's more than just a job board - it's a supportive community for educators."
    // },
    {
        img: avatar3,
        name: "James Janet",
        occupation: "Assistant Principal, Chesire High School",
        quote: "I've been using Professional Teacher Hub for years, both as a job seeker and now as a school administrator. It's been instrumental in helping me advance my teaching career and find talented educators to join our team. I couldn't recommend it enough!"
    }
];

// export const courses = [
//     {
//         img:
//         title:
//         author:
//         rate:
//         newPrice:
//         oldPrice:
//     }
// ]

// export const footerLinks = [
//     {
//         links: [
//             { name: "Application", link: "/" },
//             { name: "Send Crypto", link: "/" },
//             { name: "Recieve Crypto", link: "/" },
//             { name: "Swap Token", link: "/" },
//             { name: "Portfolio", link: "/" },
//         ],
//     },
//     {
//         links: [
//             { name: "Company", link: "/" },
//             { name: "Careers", link: "/" },
//             { name: "Blogs", link: "/" },
//            ],
//     },
//     {
//         links: [
//             { name: "Company", link: "/" },
//             { name: "Careers", link: "/" },
//             { name: "Blogs", link: "/" },
//         ],
//     },
// ];

// export const socialMedia = [
//     { src: icon1, alt: "facebook logo" },
//     { src: icon2, alt: "twitter logo" },
//     { src: icon3, alt: "twitter logo" },
//     { src: icon4, alt: "instagram logo" },
// ];


// TRAINING SECTION
export const trainingSessions = [
    {
        id: 1,
        title: "Effective Classroom Management",
        instructor: "John Doe",
        date: "April 30, 2024",
        time: "10:00 AM - 12:00 PM",
        location: "Virtual Event",
        description: "Learn practical strategies for managing your classroom effectively.",
    },
    {
        id: 2,
        title: "STEM Education Workshop",
        instructor: "Jane Smith",
        date: "May 5, 2024",
        time: "1:00 PM - 3:00 PM",
        location: "Online",
        description: "Explore innovative approaches to teaching STEM subjects.",
    },
    {
        id: 3,
        title: "STEM Education Workshop",
        instructor: "Jane Smith",
        date: "May 5, 2024",
        time: "1:00 PM - 3:00 PM",
        location: "Online",
        description: "Explore innovative approaches to teaching STEM subjects.",
    },
    {
        id: 4,
        title: "STEM Education Workshop",
        instructor: "Jane Smith",
        date: "May 5, 2024",
        time: "1:00 PM - 3:00 PM",
        location: "Online",
        description: "Explore innovative approaches to teaching STEM subjects.",
    },
    {
        id: 5,
        title: "STEM Education Workshop",
        instructor: "Jane Smith",
        date: "May 5, 2024",
        time: "1:00 PM - 3:00 PM",
        location: "Online",
        description: "Explore innovative approaches to teaching STEM subjects.",
    },
    {
        id: 6,
        title: "STEM Education Workshop",
        instructor: "Jane Smith",
        date: "May 5, 2024",
        time: "1:00 PM - 3:00 PM",
        location: "Online",
        description: "Explore innovative approaches to teaching STEM subjects.",
    },
    // Add more training session objects as needed
];


// CONFERENCES SECTIONS
// Sample conference data
export const conferenceData = [{
    title: "Education Conference 2024",
    date: "May 15-17, 2024",
    location: "Virtual Event",
    description: "Join us for the Education Conference 2024 where educators from around the world will gather to discuss the latest trends and innovations in education.",
}];

export const coursesData = [
    {
        id: 1,
        title: "Introduction to Teaching Strategies",
        instructor: "Ismail Abdullah",
        price: 3000,
        description: "Learn the fundamental teaching strategies for effective classroom instruction.",
    },
    {
        id: 2,
        title: "Advanced Classroom Management",
        instructor: "Lawal Maryam",
        price: 5800,
        description: "Master advanced techniques for managing classroom behavior and fostering a positive learning environment.",
    },
    {
        id: 3,
        title: "Advanced Classroom Management",
        instructor: "Emmanuel Joy",
        price: 2000,
        description: "Master advanced techniques for managing classroom behavior and fostering a positive learning environment.",
    },
    {
        id: 4,
        title: "Advanced Classroom Management",
        instructor: "Charles Williams",
        price: 9000,
        description: "Master advanced techniques for managing classroom behavior and fostering a positive learning environment.",
    },
    // Add more course objects as needed
];






//   TeachersRecruitmentDashboard
export const TeacherAsideBar = [
    {
        id: 1,
        icon: "home",
        title: "Home",
    },
    {
        id: 2,
        icon: 'user',
        title: "Profile",
    },
    {
        id: 3,
        icon: 'search',
        title: "Find a Job",
    },
    {
        id: 4,
        icon: 'award',
        title: "Qualifications",
    },
    {
        id: 5,
        icon: 'application',
        title: "My Applications",
    },
    {
        id: 6,
        icon: 'notification',
        title: "Notifications",
    },
  
    {
        id: 7,
        icon: 'course',
        title: "Courses",
    },
    {
        id: 8,
        icon: 'conference',
        title: "Conferences",
    },
    // Add more course objects as needed
];

export const SchoolAsideBar = [
    {
        id: 1,
        icon: 'home',
        title: "Home",
    },
    {
        id: 2,
        icon: 'user',
        title: "Profile",
    },
    {
        id: 3,
        icon: 'postJob',
        title: "Post a Job",
    },
    {
        id: 4,
        icon: 'postedJob',
        title: "Posted Jobs",
    },
    {
        id: 5,
        icon: 'applicants',
        title: "Applicants",
    },
    {
        id: 6,
        icon: 'notification',
        title: "Notifications",
    },
    // Add more course objects as needed
];



export const findAJob = [
    {
        id: '1',
        school: 'Ilorin Girls Grammar School',
        role: 'English Teacher',
        salary: 'N50,000',
        color: true,
        // description: '....................'
    },
    {
        id: '2',
        school: 'Unilorin Secondary School',
        role: 'Maths Teacher',
        salary: 'N60,000',
        color: false
    },
    {
        id: '3',
        school: 'Ansaruldeen Grammar School',
        role: 'Computer Teacher',
        salary: 'N100,000',
        color: true
    },
    {
        id: '4',
        school: 'Fate Grammar School',
        role: 'Chemistry Teacher',
        salary: 'N50,000',
        color: false
    },
    {
        id: '5',
        school: 'Ansaruldeen Grammar School',
        role: 'Computer Teacher',
        salary: 'N50,000',
        color: true
    },
    {
        id: '6',
        school: 'Ilorin Girls Grammar School',
        role: 'Chemistry Teacher',
        salary: 'N50,000',
        color: false
    },
    {
        id: '7',
        school: 'Minaret Nursery School',
        role: 'Computer Teacher',
        salary: 'N50,000',
        color: true
    },
    {
        id: '8',
        school: 'Al-Minhaaj Islamic School',
        role: 'Chemistry Teacher',
        salary: 'N50,000',
        color: false
    },
]

export const myApplications = [
    {
        id: '1',
        school: 'Ilorin Girls Grammar School',
        role: 'English Teacher',
        salary: 'N50,000',
        status: true,
        // description: '....................'
    },
    {
        id: '2',
        school: 'Unilorin Secondary School',
        role: 'Maths Teacher',
        salary: 'N60,000',
        status: false
    },
    {
        id: '3',
        school: 'Ansaruldeen Grammar School',
        role: 'Computer Teacher',
        salary: 'N100,000',
        status: true
    },
    {
        id: '4',
        school: 'Fate Grammar School',
        role: 'Chemistry Teacher',
        salary: 'N50,000',
        status: false
    },
    {
        id: '5',
        school: 'Ansaruldeen Grammar School',
        role: 'Computer Teacher',
        salary: 'N50,000',
        status: true
    },
    {
        id: '6',
        school: 'Ilorin Girls Grammar School',
        role: 'Chemistry Teacher',
        salary: 'N50,000',
        status: false
    },
    {
        id: '7',
        school: 'Minaret Nursery School',
        role: 'Computer Teacher',
        salary: 'N50,000',
        status: true
    },
    {
        id: '8',
        school: 'Al-Minhaaj Islamic School',
        role: 'Chemistry Teacher',
        salary: 'N50,000',
        status: false
    },
]



export const notifications = [
    {
        id: '1',
        message: 'You have successfully applied for the role of English Teacher at Ilorin Grammar School. Kindly wiat for your interview',
        color: true,
    },
    {
        id: '2',
        message: 'You have successfully purchase Mobile Learning Course.',
        color: false,
    },
    {
        id: '3',
        message: 'You have an interview on Thursday via a Zoom +232929929.',
        color: true,
    },
    {
        id: '4',
        message: ' Congratulation!!! You have been offered a Job a Ilorin Grammar School, Your resumption date is on Monday 21st of June 2024 .',
        color: false,
    },

    {
        id: '5',
        message: 'You have successfully applied for the role of English Teacher at AnsarulDeen Grammar School. Kindly wiat for your interview',
        color: true,
    },
    {
        id: '7',
        message: 'You have successfully purchase Mobile Learning Course.',
        color: false,
    },
    {
        id: '8',
        message: 'You have an interview on Thursday via a Zoom +232929929.',
        color: true,
    },
    {
        id: '9',
        message: ' Congratulation!!! You have been offered a Job a Ilorin Grammar School, Your resumption date is on Monday 21st of June 2024 .',
        color: false,
    },

    {
        id: '10',
        message: 'You have successfully applied for the role of English Teacher at AnsarulDeen Grammar School. Kindly wiat for your interview',
        color: true,
    },


]

export const PostedJob = [
    {
        id: '1',
        role: 'English Teacher',
        salary: 'N50,000',
        color: true,
        // description: '....................'
    },
    {
        id: '2',
        role: 'Maths Teacher',
        salary: 'N60,000',
        color: false
    },
    {
        id: '3',
        role: 'Computer Teacher',
        salary: 'N100,000',
        color: true
    },
    {
        id: '4',
        role: 'Chemistry Teacher',
        salary: 'N50,000',
        color: false
    },
    {
        id: '5',
        role: 'Computer Teacher',
        salary: 'N50,000',
        color: true
    },
    {
        id: '6',
        role: 'Chemistry Teacher',
        salary: 'N50,000',
        color: false
    },
    {
        id: '7',
        role: 'Computer Teacher',
        salary: 'N50,000',
        color: true
    },
    {
        id: '8',
        role: 'Chemistry Teacher',
        salary: 'N50,000',
        color: false
    },
]