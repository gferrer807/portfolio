(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{1156:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n(0),r=n.n(o),c=n(16),s=n.n(c),a=n(10),l=n(6),u=n(5),d=n(46),j=n(47),m=function(){function e(){Object(d.a)(this,e),this._data={projectRepo:"https://github.com/InsafKhamzin/portfolio",react95Repo:"https://github.com/React95/React95",agents:["Bonzi","Clippy","F1","Genie","Genius","Links","Merlin","Peedy","Rocky","Rover"],currentAgent:"Clippy",socialLinks:[{icon:"keyboard_mouse",name:"GitHub",url:"https://github.com/gferrer807"},{icon:"progman_1",name:"LinkedIn",url:"https://www.linkedin.com/in/g-ferrer/"}],items:[{id:"about",name:"About.txt",icon:"info_bubble",content:{paragraphs:["y0y0 my name is Geo! I'm a software engineer coming to you from NYC!","I mainly use Javascript and in fact this whole site was built with Javascript! Specifically react which is something I actively use and am learning. I also specialize in Nodejs, MySQL, and APIs. Express + Lambdas = Amazing potential.","I like to do BJJ although I'm not going tonight because I'm sore from working out. I also like hiking, scuba diving and traveling!"]}},{id:"resume",name:"Resume.txt",icon:"notepad_2",content:{resumeLink:"https://docs.google.com/document/d/1hyee78324bQXQ3r_M6hXw4L56cTpsjAMqJaEkzrUmBk/export?format=pdf",workExperience:[{jobTitle:"Software Engineer",company:"Shay Consulting",location:"New York",period:"Oct 2018 - Present",accomplishments:["Built an excel-like reusable table library for custom client needs with native CSS / React components","Created a testing infrastructure for 3 clients to automate their CICD pipeline and reduce post-bug deployments by 30%","Ran queue jobs and integrated with twilio api in order to build a custom in-house server system","Communicate with Product Owners, UX Designers, Project Managers, and C-Level employees to achieve successful delivery of client products"]},{jobTitle:"Configuration Engineer - Contractor",company:"Two Sigma IQ",location:"New York",period:"Jan 2020 - July 2020",accomplishments:["Helped maintain and expand legacy system capabilities with Nodejs","Learned proprietary functional programming language and helped to architect and develop 2.0 release","Used Datadog to run daily diagnostics checks and created multiple custom dashboards to monitor system health"]},{jobTitle:"Software Engineer",company:"Panoptic",location:"New York",period:"Jun 2018 - Nov 2018",accomplishments:["Deploy Alexa skills using conversational focused interface design","Develop conversational architecture and flow to optimize user experience","Work with backend web servers to run lambda functions locally for direct JSON manipulation","Created landing pages and then converted them to WordPres themes with PHP"]}],education:[{credit:"Bachelor's of Science (B.S) Applied Psych",place:"New York University",period:"2013 - 2016"},{credit:"Associates in Psychology",place:"Bergen Community College",period:"2011 - 2013"}]}},{id:"projects",name:"Projects.txt",icon:"flying_through_space_100",content:{projects:[{title:"My Portfolio Site",description:"My personal website in old-school Windows95 design.",techStack:"React, GitHub pages",repo:"https://github.com/gferrer807/portfolio"}]}},{id:"skills",name:"Skills.txt",icon:"progman_11",content:{skills:[{name:"NodeJS",progress:100},{name:"Express",progress:100},{name:"React",progress:90},{name:"MySQL",progress:90},{name:"Serverless",progress:90},{name:"APIs",progress:80},{name:"AWS Lambdas",progress:80},{name:"GraphQL",progress:60},{name:"Docker",progress:50}],soft:"Analytical thinking, Teamwork, Creative Problem solving, Mangement, Leadership, Entrepreneurship"}},{id:"contact",name:"Contact.txt",icon:"inetcfg_2301",content:{emailText:"Feel like hiring me? Just reach out!",email:"ferrergiancarlo@gmail.com",socialText:"Or you can reach me out through social media:",social:[{name:"FaLinkedin",link:"https://www.linkedin.com/in/g-ferrer/"},{name:"FaGithub",link:"https://github.com/gferrer807"}]}}]}}return Object(j.a)(e,[{key:"getItems",value:function(){return this._data.items.map((function(e){return{id:e.id,name:e.name,icon:e.icon}}))}},{key:"getItem",value:function(e){return this._data.items.find((function(t){return t.id===e}))}},{key:"getProjectInfo",value:function(){return{projectRepo:this._data.projectRepo,react95Repo:this._data.react95Repo}}},{key:"getSocialLinks",value:function(){return{socialLinks:this._data.socialLinks}}},{key:"getCurrentAgent",value:function(){return{currentAgent:this._data.currentAgent}}},{key:"getAgents",value:function(){return{agents:this._data.agents}}},{key:"changeAgent",value:function(e){this._data.currentAgent=e}}]),e}(),p=Object(o.createContext)(),h=n(11);function b(){var e=Object(a.a)(["\n    margin-left: 20px;\n    margin-top: 20px;\n    align-items: center;\n    color: white;\n"]);return b=function(){return e},e}var g=u.default.div(b());var f=function(e){e.openExplorer;var t=e.openResume,n=e.openSkills;return Object(i.jsxs)("div",{children:[Object(i.jsxs)(g,{children:[Object(i.jsx)(l.Icon,{className:"pointer",name:"notepad",onClick:function(){t()}}),Object(i.jsx)("div",{children:"resume.txt"})]}),Object(i.jsxs)(g,{children:[Object(i.jsx)(l.Icon,{className:"pointer",name:"media_cd"}),Object(i.jsx)("div",{children:"Media.exe"})]}),Object(i.jsxs)(g,{children:[Object(i.jsx)(l.Icon,{className:"pointer",name:"pbrush_1",onClick:function(){n()}}),Object(i.jsx)("div",{children:"Skills.exe"})]}),Object(i.jsxs)(g,{children:[Object(i.jsx)(l.Icon,{className:"pointer",name:"actmovie_303",onClick:function(){window.open("https://www.youtube.com/watch?v=OE2NPmqZ9nM","_blank")}}),Object(i.jsx)("div",{children:"Learn the secrets..."})]})]})};function x(){var e=Object(a.a)(["\n    margin-bottom: 10px;\n"]);return x=function(){return e},e}var O=u.default.a(x()),v=function(e){var t=e.content,n=t.workExperience,o=t.education,r=t.resumeLink;return console.log(e," - resumeContent"),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Work Experience"}),n.map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:e.jobTitle})," | ",e.company]}),Object(i.jsx)("p",{children:e.period}),Object(i.jsx)("ul",{children:e.accomplishments.map((function(e,t){return Object(i.jsx)("li",{children:e},t)}))}),Object(i.jsx)("br",{})]},t)})),Object(i.jsx)("hr",{}),Object(i.jsx)("h2",{children:"Education"}),o.map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:Object(i.jsx)("b",{children:e.credit})}),Object(i.jsx)("p",{children:e.place}),Object(i.jsx)("p",{children:Object(i.jsx)("b",{children:e.gpa})}),Object(i.jsx)("p",{children:e.period}),Object(i.jsx)("br",{})]},t)})),Object(i.jsx)(O,{href:r,download:!0,children:Object(i.jsx)(l.Button,{style:{fontSize:"14px"},className:"pointer",children:"Download Resume"})})]})},k=(n(1148),function(e){var t=e.openResume,n=(e.showResume,Object(o.useContext)(p).getItem("resume")),c=r.a.useState(!1),s=Object(h.a)(c,2),a=s[0];s[1];return Object(i.jsx)(l.Modal,{icon:"notepad",title:"Notepad - resume.txt",closeModal:function(){t()},buttons:[{value:"Close",onClick:function(){t()}}],style:{left:a?"3%":"50%",top:a?"3%":"15%",width:a?"80%":450},menu:[{name:"File",list:[]},{name:"Edit",list:[]}],children:Object(i.jsx)(l.Frame,{bg:"white",boxShadow:"in",height:"100%",padding:20,style:{overflowY:"auto",maxHeight:"60vh"},children:Object(i.jsx)(v,{content:n.content})})})}),y=n(48),w=function(){return Object(i.jsx)(i.Fragment,{})},C=function(){var e=Object(o.useContext)(p).getCurrentAgent().currentAgent;return Object(o.useEffect)((function(){}),[e]),Object(i.jsx)(y.ClippyProvider,{agentName:e,children:Object(i.jsx)(w,{})})};n(1154);function S(){var e=Object(a.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center\n"]);return S=function(){return e},e}var L=u.default.div(S()),I=function(e){return console.log(e),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:e.skillsContent.content.soft}),Object(i.jsx)("div",{children:e.skillsContent.content.skills.map((function(e,t){return Object(i.jsx)("div",{children:Object(i.jsxs)(L,{children:[Object(i.jsx)("p",{style:{flex:1},children:e.name}),Object(i.jsx)(l.ProgressBar,{style:{flex:1},width:200,percent:e.progress})]},t)})}))})]})},_=function(e){var t=e.openSkills,n=(e.showSkills,Object(o.useContext)(p).getItem("skills")),c=r.a.useState(!1),s=Object(h.a)(c,2),a=s[0];s[1];return Object(i.jsx)(l.Modal,{icon:"pbrush_1",title:"Skills.exe",closeModal:function(){t()},buttons:[{value:"Close",onClick:function(){t()}}],style:{left:a?"3%":"50%",top:a?"3%":"15%",width:a?"80%":450},menu:[{name:"File",list:[]},{name:"Edit",list:[]}],children:Object(i.jsx)(l.Frame,{bg:"white",boxShadow:"in",height:"100%",padding:20,style:{overflowY:"auto",maxHeight:"60vh"},children:Object(i.jsx)(I,{isMobile:a,skillsContent:n})})})},R=function(){var e=r.a.useState(!1),t=Object(h.a)(e,2),n=t[0],c=t[1],s=r.a.useState(!1),a=Object(h.a)(s,2),l=a[0],u=a[1],d=function(){c(!n)},j=function(){u(!l)};return Object(o.useEffect)((function(){c(n)}),[]),Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(f,{openResume:d,openSkills:j}),n?Object(i.jsx)(k,{openResume:d,showResume:n}):Object(i.jsx)(i.Fragment,{}),l?Object(i.jsx)(_,{openSkills:j,showSkills:l}):Object(i.jsx)(i.Fragment,{}),Object(i.jsx)(C,{})]})};function A(){var e=Object(a.a)(["\n    text-decoration: none;\n    color: inherit;\n"]);return A=function(){return e},e}var P=u.default.a(A());var E=function(){var e=Object(o.useContext)(p).getProjectInfo(),t=e.projectRepo,n=e.react95Repo,c=Object(o.useContext)(p).getSocialLinks().socialLinks,s=(Object(o.useContext)(p).getAgents().agents,r.a.useState("Clippy")),a=Object(h.a)(s,2),u=a[0],d=a[1];return Object(o.useContext)(p).changeAgent(u),Object(o.useEffect)((function(){d(u)}),[]),console.log("newAgent - ",Object(o.useContext)(p).getCurrentAgent()),Object(i.jsx)(l.TaskBar,{list:Object(i.jsxs)(l.List,{children:[Object(i.jsxs)(l.List.Item,{icon:"awfext32_6049",children:["Contact Me",Object(i.jsx)(l.List,{children:c.map((function(e){var t=e.icon,n=e.name,o=e.url;return Object(i.jsx)(l.List.Item,{as:"a",href:o,icon:t,rel:"noopener noreferrer",target:"_blank",children:n},n)}))})]}),Object(i.jsx)(l.List.Divider,{}),Object(i.jsx)(l.List.Item,{className:"pointer",icon:"brush",children:Object(i.jsx)(P,{href:n,target:"_blank",children:"Built with React95"})}),Object(i.jsx)(l.List.Divider,{}),Object(i.jsx)(l.List.Item,{className:"pointer",icon:"folder_file",children:Object(i.jsx)(P,{href:t,target:"_blank",children:"Repo"})})]})})};function N(){var e=Object(a.a)(["\n  body{\n    font-size: 14px\n  }\n"]);return N=function(){return e},e}var M=new m,T=Object(u.createGlobalStyle)(N()),B=function(){return r.a.useEffect((function(){new Promise((function(e){return setTimeout(e,4e3)})).then((function(){var e=document.getElementById("ipl-progress-indicator");e&&(e.classList.add("available"),setTimeout((function(){e.outerHTML=""}),2e3))}))}),[]),Object(i.jsx)(p.Provider,{value:M,children:Object(i.jsxs)(l.ThemeProvider,{children:[Object(i.jsx)(l.GlobalStyle,{}),Object(i.jsx)(T,{}),Object(i.jsx)(R,{}),Object(i.jsx)(E,{})]})})};s.a.render(Object(i.jsx)(B,{}),document.getElementById("root"))}},[[1156,1,2]]]);
//# sourceMappingURL=main.7a76de2c.chunk.js.map