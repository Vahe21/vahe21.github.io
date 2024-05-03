import Octave from "../assets/images/octave.png";
import August from "../assets/images/august.png";

export const constants ={
    EMAIL:'asthgik.yv@gmail.com',
    LINKEDIN_URL:'https://www.linkedin.com/in/astghik-yeghiazaryan-732ba919b/',
    RESUME_URL:'https://drive.google.com/file/d/1nhvESR5PQXJdHf9dpQBefCB-7jCZvo-s/view'
}

export const rightSectionPoints=[
    'Collaborating closely with cross-functional teams to translate designs into functional products.',
    'Identifying design challenges and offering creative solutions aligned with user and business objectives.',
    'Establishing design systems from scratch and integrating them with existing frameworks like Material-UI and Ant Design.',
    'Creating aesthetically pleasing and intuitive graphical user interfaces for digital applications.',
    'Articulate design decisions, rationales, and recommendations to stakeholders and collaborate effectively with cross-functional teams such as developers, product managers, and other team members throughout the design process.',
    'Understanding and empathizing with users to create designs that address their needs and pain points.'
]

export const leftSectionPoints=[
    'Proficient in design tools like Figma, Adobe CS (XD, Illustrator, Photoshop)',
    'Organizing and structuring information to establish intuitive navigation and user flows.',
    'Developing low-fidelity wireframes and interactive prototypes for iterative design refinement.',
    'Applying design principles like typography, color theory, and layout for visually appealing interfaces.',
    'Designing interactive elements to enhance user engagement and usability.',
    'Ensuring that designs are accessible to users with disabilities by following accessibility guidelines and best practices.',
    'Crafting responsive interfaces for consistent performance across various devices and screen sizes.'
]

export const octaveTags = ['Live project', 'Product Desigh', 'UX Design', '2024']
export const crioTags = ['Ongoing', 'UI/UX Design', '2023-24']


export const octaveProjectInfo = {
    title:'Octave',
    image:Octave,
    tags:octaveTags ,
    linkTo:'/Octave',
    description:'AI-powered platform that helps GTM teams develop messaging, generate content, and engage prospects- all from one collaborative workspace. Octave reimagines how companies define and drive their GTM strategy.',
    links:[
        {title:'Read case study', linkTo:'/Octave'},
        {title:'Visit the website', linkTo:'https://www.octavehq.com/'},
    ]
}

export const augustProjectInfo = {
    title:'August',
    image:August,
    tags:crioTags,
    linkTo:'/August',
    description:'AI-powered revolutionary app that serves as a personalized AI physician in the prevention of heart attacks and strokes for everyone. Patients benefit from a unique approach that fosters collaboration and support, ensuring a holistic journey towards heart health.',
    links:[{title:'Read case study', linkTo:'/August'}]
}