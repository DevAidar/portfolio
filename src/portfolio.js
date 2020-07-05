/* Change this file to get your personal Porfolio */

const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
	//title: "Hi all 👋 I'm Saad",
	title: "Aydar Nuriev",
	nickname: "",
	// subTitle:
	//   "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks",
	subTitle:
		"A passionate Front End Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs. Always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
	resumeLink:
		"https://docs.google.com/document/d/1aXdMxAf_4hhFn47xqPIt9NvY83XHQIOI595a31P1YEw/edit?usp=sharing"
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/devaidar",
	linkedin: "https://www.linkedin.com/in/aydar-nuriev-996a661b1/",
	gmail: "aidar.nuriev26@gmail.com",
	facebook: "https://www.facebook.com/aidar.nuriev.3",
	instagram: "https://www.instagram.com/aidar_lime/"
};

const skills = {
  data: [
    {
      title: "Front End Development",
      imagePath: "fullstack.svg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Experience in React JS components, Forms, Events, Keys, Router, plus Redux, Animations",
        "⚡ Expertise in processing Api's .json files to display on the page"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB"
          }
        },
      ]
    },
    {
      title: "UI/UX Design",
      imagePath: "ui_ux_design.svg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2"
          }
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E"
          }
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00"
          }
        },
      ]
    }
  ]
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/"
    },
  ]
}

const degrees = {
  degrees : [
    {
      title: "Saddleback College",
      subtitle: "Computer Science and Cyber Security",
      logo_path: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Saddleback_College_seal.svg/1200px-Saddleback_College_seal.svg.png",
      alt_name: "Saddleback College",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, etc.",
        "⚡ Apart from this, I have done courses on Front End Development.",
        "⚡ Interested in Cyber Security field.",
      ],
      website_link: "https://www.saddleback.edu"
    }
  ]
}

const certifications = {
	certifications: []
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "b0ee45aaa93e9c097ac687ef2cc73c7e07d0ae0f",
  githubUserName: "DevAidar"
};

const bigProjects = {};

const achievementSection = {};

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle:
    "With love for individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  link: "https://ashutoshhathidara.wordpress.com",
  avatar_image_path: "blogs_image.svg"

  
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {};

export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo
};
