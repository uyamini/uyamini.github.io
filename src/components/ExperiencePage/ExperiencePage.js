import "./ExperiencePage.css"

export default function ExperiencePage() {
    return (
        <>
        <div id="experience" className="experience">
            <h1>Experience</h1>
            <div className="experience-container">
              <div>
                  <h2>Software Engineer</h2>
                  <p>Manhattan Associates</p>
                  <p>12/2019 - 08/2021</p>
                      <ul>
                          <li>Independently developed multiple scalable end to end features and integrated them into the current supply chain and
warehouse management software using Java and SpringBoot</li>
                          <li>Refactored existing features into a micro-service based architecture which improved maintainability and decreased latency by 20%</li>
                          <li>Collaborated with 4 engineers to design and develop REST API’s to fetch and update inventory data using Java and SpringBoot</li>
                          <li>Improved user satisfaction by 87% by redesigning the UX so they could seamlessly view and update warehouse data using JSP</li>
                          <li>Provided real-time updates and changes for clients by deploying the ware on GCP</li>
                      </ul>
              </div>
              
              <div>
                <h2>Software Engineer Intern</h2>
                <p>Manhattan Associes</p>
                <p>08/2019 - 10/2019</p>
                <ul>
                  <li>Developed a RESTful API-driven web application to allow users to add, update, view, and escalate employee feedback and complaints using React, Java, and Oracle DB</li>
                  <li>Designed and Implemented 2 separate seamless User Interface views for employees and administration based on their roles using React Router</li>
                  <li>Built a robust back-end system that exposes role-restricted APIs using SpringBoot & JPA to block ~3000 unauthorized requests per month</li>
                  <li>Increased efficiency by 40% by developing an automated system to escalate unresolved feedback in a User Acceptance Testing environment using Java</li>
                </ul>
              </div>

              <div>
                <h2>Automation Engineer Intern</h2>
                <p>Quess Corp</p>
                <p>02/2019 - 08/2019</p>
                <ul>
                  <li>Spearheaded a project to created a web based visualization dashboard (AngularJS) to view employee and departmental performance.</li> 
                  <li>Built and optimized the tool to run in ~20s to collect, clean and analyze data, saving 4.5h of manual work time.</li>
                  <li>Increased efficiency by 40% by developing an automated project tracker that showed progress, contributions, milestones and next steps for projects using UiPath (RPA) and Python.</li>
                </ul>
              </div>

              <h1>Education</h1>
              <div>
                <h2>Master of Science in Computer Science</h2>
                <p>Northwestern University</p>
                <p>09/2021 - 06/2023</p>
                <ul>
                  <li>GPA : 3.92/4.0</li> 
                  <li>Relevant Coursework : Design and Analysis of Algorithms, Scalable Software Architecture, Human Computer Interaction, Artificial Intelligence, Machine Learning, Natural Language Processing, AR/VR Studio, NUVention AI Analytics, Transformative Computer Science</li>
                </ul>
              </div>

              <div>
                <h2>Bachelor of Engineering in Information Science and Engineering</h2>
                <p>CMR Insitute of Technology</p>
                <p>09/2021 - 06/2023</p>
                <ul>
                  <li>Relevant Coursework : Operating Systems, Computer Networks, Software Testing, Database Management Systems, Object Oriented Programming, Data Mining & Warehousing, Cryptography & Network Security, Unix and Shell Programming, Discrete Mathematical Structures, Software Architecture and Design Patterns</li>
                </ul>
              </div>

            </div>
            <div>
            </div>
        </div>
        </>
    );
}