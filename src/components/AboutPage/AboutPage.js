import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css"
import Headshot from "../../assets/Yamini_Headshot.png"


export default function AboutPage() {
    return (
      <>
        <div id="about" className="about">
          <h1>About</h1>
          <div className="about-container">
            <div className="container2-1">
                <Image
                    className="headshot"
                    src={Headshot}
                    roundedCircle
                    height={"317rem"}
                    width={"300rem"}
                    alt="Yamini Ulaganathan"
                />
                <p>Hi! I'm Yamini, and I graduated in June 2023 with an MS in Computer Science from Northwestern University.
I have 2 years of work experience as a Software Engineer, and am currently actively seeking job opportunities. I have a diverse portfolio of courses and projects in different areas of Computer Science. I'm an advocate for technology and innovation that empowers underrepresented communities and has a strong societal impact. I firmly believe that the best work comes from an amalgamation of diverse perspectives, and align my personal and professional goals with the same.</p>
            </div>

            <div className="container2-2">

              <Card style={{ backgroundColor: "#f6f2f2"}}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Languages</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                    Java , C++, JavaScript, Python, C, Visual Basics for Applications, SQL
                    </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ backgroundColor: "#f6f2f2"}}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Databases</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                    MySQL, Oracle Database                   
                    </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ backgroundColor: "#f6f2f2"}}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Frameworks</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                    Spring Boot, React, ExpressJS and NodeJS (with Mocha/Chai), Hibernate, Flask, Django, Ignite                   
                    </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ backgroundColor: "#f6f2f2"}}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Tools</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                    Amazon Web Services, JIRA, Jenkins, Git, GitHub, Salesforce
                    </Card.Text>
                </Card.Body>
              </Card>
            
            </div>
          </div>
        </div>
      </>
    );
  }