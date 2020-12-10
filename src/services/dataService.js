export default class DataService {
    _data = {
        projectRepo: "https://github.com/InsafKhamzin/portfolio",
        react95Repo: "https://github.com/React95/React95",
        agents: [
            'Bonzi',
            'Clippy',
            'F1',
            'Genie',
            'Genius',
            'Links',
            'Merlin',
            'Peedy',
            'Rocky',
            'Rover'
        ],
        currentAgent: "Clippy",
        socialLinks: [
            {
                icon: 'keyboard_mouse',
                name: 'GitHub',
                url: 'https://github.com/gferrer807',
            },
            {
                icon: 'progman_1',
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/g-ferrer/',
            },
        ],
        items: [
            {
                id: 'about',
                name: 'About.txt',
                icon: 'info_bubble',
                content: {
                    paragraphs: [
                        "y0y0 my name is Geo! I'm a software engineer coming to you from NYC!",
                        "I mainly use Javascript and in fact this whole site was built with Javascript! Specifically react which is something I actively use and am learning. I also specialize in Nodejs, MySQL, and APIs. Express + Lambdas = Amazing potential.",
                        "I like to do BJJ although I'm not going tonight because I'm sore from working out. I also like hiking, scuba diving and traveling!"
                    ]
                }
            },
            {
                id: 'resume',
                name: 'Resume.txt',
                icon: 'notepad_2',
                content: {
                    resumeLink:"https://docs.google.com/document/d/1hyee78324bQXQ3r_M6hXw4L56cTpsjAMqJaEkzrUmBk/export?format=pdf",
                    workExperience: [
                        {
                            jobTitle: "Software Engineer",
                            company: "Shay Consulting",
                            location: "New York",
                            period: "Oct 2018 - Present",
                            accomplishments: [
                                "Built an excel-like reusable table library for custom client needs with native CSS / React components",
                                "Created a testing infrastructure for 3 clients to automate their CICD pipeline and reduce post-bug deployments by 30%",
                                "Ran queue jobs and integrated with twilio api in order to build a custom in-house server system",
                                "Communicate with Product Owners, UX Designers, Project Managers, and C-Level employees to achieve successful delivery of client products"
                            ]
                        },
                        {
                            jobTitle: "Configuration Engineer - Contractor",
                            company: "Two Sigma IQ",
                            location: "New York",
                            period: "Jan 2020 - July 2020",
                            accomplishments: [
                                "Helped maintain and expand legacy system capabilities with Nodejs",
                                "Learned proprietary functional programming language and helped to architect and develop 2.0 release",
                                "Used Datadog to run daily diagnostics checks and created multiple custom dashboards to monitor system health"
                            ]

                        },
                        {
                            jobTitle: "Software Engineer",
                            company: "Panoptic",
                            location: "New York",
                            period: "Jun 2018 - Nov 2018",
                            accomplishments: [
                                "Deploy Alexa skills using conversational focused interface design",
                                "Develop conversational architecture and flow to optimize user experience",
                                "Work with backend web servers to run lambda functions locally for direct JSON manipulation",
                                "Created landing pages and then converted them to WordPres themes with PHP"
                            ]
                        }
                    ],
                    education: [
                        {
                            credit: "Bachelor's of Science (B.S) Applied Psych",
                            place: "New York University",
                            period: "2013 - 2016"
                        },
                        {
                            credit: "Associates in Psychology",
                            place: "Bergen Community College",
                            period: "2011 - 2013"
                        }
                    ]
                }
            },
            {
                id: "projects",
                name: "Projects.txt",
                icon: "flying_through_space_100",
                content: {
                    projects:[
                        {
                            title:"My Portfolio Site",
                            description:"My personal website in old-school Windows95 design.",
                            techStack: "React, GitHub pages",
                            repo: "https://github.com/gferrer807/portfolio",
                        }
                    ]                    
                }
            },
            {
                id: 'skills',
                name: 'Skills.txt',
                icon: 'progman_11',
                content: {
                    skills: [
                        {
                            name: "NodeJS",
                            progress: 100
                        },
                        {
                            name: "Express",
                            progress: 100
                        },
                        {
                            name: "React",
                            progress: 90
                        },
                        {
                            name: "MySQL",
                            progress: 90
                        },
                        {
                            name: "Serverless",
                            progress: 90
                        },
                        {
                            name: "APIs",
                            progress: 80
                        },
                        {
                            name: "AWS Lambdas",
                            progress: 80
                        },
                        {
                            name: "GraphQL",
                            progress: 60
                        },
                        {
                            name: "Docker",
                            progress: 50
                        }
                    ],
                    soft: "Analytical thinking, Teamwork, Creative Problem solving, Mangement, Leadership, Entrepreneurship"
                }
            },
            {
                id: 'contact',
                name: 'Contact.txt',
                icon: 'inetcfg_2301',
                content: {
                    emailText: "Feel like hiring me? Just reach out!",
                    email: "ferrergiancarlo@gmail.com",
                    socialText: "Or you can reach me out through social media:",
                    social: [
                        {
                            name: "FaLinkedin",
                            link: "https://www.linkedin.com/in/g-ferrer/"
                        },
                        {
                            name: "FaGithub",
                            link: "https://github.com/gferrer807"
                        }
                    ]
                }
            }    
        ]
    }

    getItems() {
        return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
    }

    getItem(id) {
        return this._data.items.find(x => x.id === id);
    }

    getProjectInfo() {
        return {
            projectRepo: this._data.projectRepo,
            react95Repo: this._data.react95Repo
        };
    }
    getSocialLinks() {
        return {
            socialLinks: this._data.socialLinks
        };
    }
    getCurrentAgent() {
        return {
            currentAgent: this._data.currentAgent
        }
    }
    getAgents() {
        return {
            agents: this._data.agents
        }
    }
    changeAgent(newAgent) {
        this._data.currentAgent = newAgent;
    }
}