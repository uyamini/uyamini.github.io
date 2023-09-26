//import Button from 'react-bootstrap/Button';
import "./HomePage.css"
import Resume from "../../assets/Yamini_Ulaganathan_Resume.pdf"
import AboutPage from "../AboutPage/AboutPage";
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactPage from '../ContactPage/ContactPage';
import Typewriter from 'typewriter-effect';
import BackgroundImage from '../../assets/Background.jpg'; 
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function HomePage() {
    const myStyle = { 
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "auto",
      }

    return (
      <>
        <div className="home" style={myStyle}>
            <h1>Yamini Ulaganathan</h1>
            <h2>I am a
              <span id="typedText"><Typewriter
                  options={{
                  strings: ['Developer','Designer','Engineer','Innovator','Changemaker'],
                  autoStart: true,
                  loop: true,
                  }} /></span>
              </h2>
            <Button className="resume-button" color="pink" appearance="default" variant="outline-light" href={Resume} target="_blank">View My Resume</Button>{' '} &nbsp;&nbsp;&nbsp;&nbsp;
            <Button className="speech-button" variant="outline-light" href="https://www.linkedin.com/posts/uyamini_yamini-ulaganathan-northwestern-university-activity-7078900422437974016-1Zfb?utm_source=share&utm_medium=member_desktop" target="_blank">Commencement Speech</Button>{' '}
        </div>
        <AboutPage/>
        <ExperiencePage/>
        <PortfolioPage/>
        <ContactPage/>
        
      </>
    );
  }