import './App.css';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import cover from './img/background.jpg';

function HeaderItem(props) {
    return(
        <div className={props.category + "Header"}>
            <a href={"#" + props.category}>{props.category}</a>
        </div>

    )
}

function Welcome() {
    const openNav = () => {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("root").style.marginLeft = "200px";
    }
    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("root").style.marginLeft = "0";
    }
    return (
      <div id="welcome" className="Welcome" style={{ backgroundImage:`url(${cover}`, backgroundRepeat:"no-repeat", backgroundSize:"contain"}}>
        <button className="openbtn" onClick={openNav}>☰</button>
        <div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
          <HeaderItem category="Skills"/>
          <HeaderItem category="Projects"/>
          <HeaderItem category="Experience"/>
          <HeaderItem category="Education"/>
        </div>
        <div className="allIntro">
          <h1 id="name">PRINCETON <span>DYCHINCO</span></h1>
          <h3 className="introDetails">CST Co-op Student</h3>
          <h3 className="introDetails">AWS AI/ML Scholarship Recipient Fall 2022</h3>
          <h4 className="introDetails">Finished Top 10 in Ottawa 2022 Canadian Student Wildcard Race of AWS DeepRacer Student League</h4>
        </div>
      </div>
    );
}

function Content() {
    return (
      <div className="Content">
        <Welcome />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </div>
    );
}



function Skills() {
    return (
        <div id="Skills" className="Skills">
            <h2 className="Heading">Technical Skills</h2>
            <h4>Programming Languages</h4>
            <p className="description">Python, Java</p>
            <h4>Web Development</h4>
            <p className="description">HTML5, CSS5, Javascript ( client / server ), React</p>
            <h4>Databases</h4>
            <p className="description">MySQL, FireBase</p>
            <h4>Workflow</h4>
            <p className="description">GitHub, Agile Scrum Methodology</p>
        </div>
    );
}

function Projects() {
    return(
    <div id="Projects" className="Projects">
        <h2 className="Heading">Projects</h2>
        <div id="project1">
            <a className="name" href="https://aws.amazon.com/deepracer/"><h3>AWS DeepRacer Student League</h3></a>
            <span className="date">Mar 2022 - May 2022</span><br/>

            <a href="https://linkmix.co/10172673">Interviews</a>
            <p className="description">I built an AWS DeepRacer model using Python and Reinforcement Learning that allows the DeepRacer car to
                go around a
                track autonomously.
                My model’s lap time on the virtual March 2022 global student league track qualified me as one of the top
                Canadian
                student racers in Canada.
                I was invited to compete in the Ottawa 2022 Canadian Student Wildcard Race on a live track, where I
                placed 9th.</p>
        </div>

        <div id="project2">
            <h3 className="name">COMP 2800 Student Project</h3>
            <span className="date">Apr 2022 - May 2022</span><br/>

            <a href="https://agile-earth-44618.herokuapp.com">Drop App</a>
            <p className="description">Responsive Web App which is a donation app to help people who donate to charities that help Ukraine to
                visually see
                where their money is going by allowing them to pick and choose items that will be sent to them. I
                focused primarily
                on
                Javascript for frontend and backend development. The main features I created was the shopping cart and
                registering
                new
                users. Created by BCIT CST students in 5 week term for COMP 2800.</p>
        </div>

        <div id="project3">
            <h3 className="name">COMP 1800 Student Project</h3>
            <span className="date">Jan 2022 - Apr 2022</span><br/>

            <a href="https://comp1800-bby08-a726f.web.app">TossUp App</a>
            <p className="description">Web application to help users decide which restaurant to eat at based on user's survey results. I focused
                primarily
                on Javascript and backend development to create core features for the app, such as the restaurant survey
                and
                restaurant roulette. Created with two other BCIT CST 1st
                term students for COMP 1800.</p>
        </div>
    </div>
    );
}

function Experience() {
    return (
      <div id="Experience" className="Experience">
          <h2 className="Heading">Work Experience</h2>
          <div id="exp1">
              <span className="date">August 2022 - Present</span>
              <h3 className="name">British Columbia Institute of Technology</h3>
              <p className="title">Resident Advisor</p>
              <ul className="description">
                  <li>Assisting planning with welcome housing wide events</li>
                  <li>Supporting residents with transition to Student Housing and academic life at BCIT</li>
                  <li>Promote, sponsor and organize house specific events to foster community and relationship with students</li>
              </ul>
          </div>
          <div id="exp2">
              <span className="date">Sept 2019 - May 2022</span>
              <h3 className="name">The Salvation Army</h3>
              <p className="title">Shelter Worker</p>
              <ul className="description">
                  <li>Perform client intake and discharge functions as necessary during shift</li>
                  <li>Using knowledge about homelessness, addictions, and mental health to provide emotional support as
                      needed
                  </li>
                  <li>Maintain records and statistics, ensuring all required documentation is accurate and complete</li>
              </ul>
          </div>

          <div id="exp3">
              <span className="date">Aug 2021 - Jan 2022</span>
              <h3 className="name">Apple Canada</h3>
              <p className="title">Specialist</p>
              <ul className="description">
                  <li>Supported customers with recommendations catered to their needs and lifestyle</li>
                  <li>Ensured store appearance with cleaning and resetting devices to expected appearance</li>
                  <li>Collaborated with teammates to create efficient device pick up service</li>
              </ul>
          </div>

          <div id="exp4">
              <span className="date">Aug 2019 - Aug 2021</span>
              <h3 className="name">Bell Canada</h3>
              <p className="title">Sales Consultant</p>
              <ul className="description">
                  <li>Coached coworkers to improve their sales pitches and ability through reflection improving store
                      numbers
                  </li>
                  <li>Assisted Store Manager in training and onboarding of new sales consultants</li>
                  <li>Exceeded all sales metrics consistently throughout 2020 with an average of 119% for top two
                      metrics
                  </li>
              </ul>
          </div>
      </div>
    );
}

function Education() {
    return (
        <div id="Education" className="Experience">
            <h2 className="Heading">Education</h2>
            <div id="educ1">
                <span className="date">Jan 2022 - Present</span>
                <h3 className="title">British Columbia Institute of Technology</h3>
                <div className="description">
                    <p className="degree">Diploma of Education, Computer Technology / Computer Systems Technology</p>
                    <p id="grade">Grade: 90% for Term One</p>
                    <p id="detail">Co-op Student for January 2023 Term</p>
                </div>
            </div>

            <div id="educ2">
                <span className="date">July - August 2022</span>
                <h3 className="title">Udacity, Virtual Classroom</h3>
                <div className="description">
                    <p className="degree">Nanodegree: AI Programming with Python</p>
                    <p id="detail">Course offered through AWS AI & ML Scholarship</p>
                    <p>Topics Covered: Jupyter Notebooks, NumPy, Anaconda, pandas, Matplotlib, Linear Algebra, Calculus, Neural Networks</p>
                </div>
            </div>

            <div id="educ3">
                <span className="date">2016 - 2019</span>
                <h3 className="title">Simon Fraser University</h3>
                <div className="description">
                    <p className="degree">Bachelor of Arts - BA, Psychology</p>
                </div>
            </div>
        </div>
    );
}
function Footer() {
    return(
        <div className="Footer">
            <div className="links">
                <a href="https://www.github.com/pdychinco"><img id="github" src={github} alt="GitHub" width="64" height="64"/></a>
                <a href="https://www.linkedin.com/in/prdychinco"><img id="linkedin" src={linkedin} alt="LinkedIn" width="72" height="64"/></a>
            </div>
            <h3>604-379-3939 · PDYCHINCO@MY.BCIT.CA</h3>
            <p>© 2022 Princeton Dychinco</p>
        </div>
    );
}

function App() {

  return (
    <div className="App">
      {/*<Header />*/}

      <Content />
      <Footer />
    </div>
  );
}

export default App;
