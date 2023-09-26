import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./PortfolioPage.css"
import image0 from '../../assets/Halloween.png'
import image1 from '../../assets/Awards.webp'
import image15 from '../../assets/DejaBrew.png'
import image2 from '../../assets/Recipe.jpeg'
import image3 from '../../assets/drte.png'
import image4 from '../../assets/TrendTalk.png'

 export default function PortfolioPage() {
    const navigate = useNavigate();


    return (
        <>
            <div id="portfolio" className="portfolio">
                <h1>Portfolio</h1>
                <div className="portfolio-container">
                    <Card bg="light">
                        <Card.Img variant="top" src={image4} alt="TrendTalk" border="10px" borderColor="white" margin= "20px" margin-bottom = "20px"/>
                        <Card.Body>
                            <Card.Title>TrendTalk</Card.Title>
                            <Card.Text>
                            Developed a visualization tool using MatPlotLib that performs NLP-based analysis of trends on social media about fashion. Created NER
and Topic Models that were able to identify the entities with an accuracy of 97% and 93% respectively in the dataset.
                            This was my final project for the Data Science for All fellowship by Correlation One.
                            </Card.Text>
                            <Button variant="light" href="https://github.com/uyamini/fashionDataScienceProject" target="_blank">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image3} alt="drtE" />
                        <Card.Body>
                            <Card.Title>drtE</Card.Title>
                            <Card.Text>
                            Automated Data Cleaning - Developed a macOs application for cleaning large spreadsheets, with an accuracy of 90% to speed up the workflow of data scientists, saving 80% of their total work time. Implemented a UI that allows the user upload files, set configurations, download the cleaned file and view a summary graph of the changes made, with a user satisfaction of 92%.                            </Card.Text>
                            <Button variant="light" href="https://github.com/uyamini/drtE" target="_blank">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image15} alt="DejaBrew" />
                        <Card.Body>
                            <Card.Title>DejaBrew</Card.Title>
                            <Card.Text>
                            A lazy game where the aim of the game is to stay caffeinated. The user gets points for visiting a cafe, and loses points for visitng a location labelled decaf. The number of points for each cafe varies, and is randomized. The aim of the game is to get as many points as you can.</Card.Text>
                            <Button variant="light" href="https://github.com/uyamini/DejaBrew" target="_blank">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image1}alt="Event Interpreter" />
                        <Card.Body>
                            <Card.Title>Event Interpreter</Card.Title>
                            <Card.Text>
                            Developed a CLI tool that performs NLP-based web scraping application for awards shows to extract names and information. Applied sentiment analysis to analyze red carpet looks, controversies, humor, parties, acts and sentiments surrounding the event using NLP libraries like spaCy, NLTK, RegEx. (Photo for reference only)
                            </Card.Text>
                            <Button variant="light" href="https://github.com/uyamini/EventInterpreter" target="_blank">Learn more</Button>
                        </Card.Body>
                    </Card>
                    
                    <Card bg="light">
                        <Card.Img variant="top" src={image2} alt="Recipe Parser" />
                        <Card.Body>
                            <Card.Title>Recipe Parser</Card.Title>
                            <Card.Text>
                            Developed a CLI tool that performs NLP-based transformation of recipes (takes URL input) to and from vegetarian, different quantity or cuisine, gluten or lactose free, etc. using several NLP libraries like NLTK, BeautifulSoup4. (Photo for reference only)
                            </Card.Text>
                            <Button variant="light" href="https://github.com/uyamini/RecipeParcer" target="_blank">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image0} alt="Halloween Third Place" />
                        <Card.Body>
                            <Card.Title>Halloween Third Place</Card.Title>
                            <Card.Text>
                            Created a virtual reality (VR) halloween themed environment where users could interact with each other and their surroundings using JavaScript & CSS on Glitch WebXR.
                            </Card.Text>
                            <Button variant="light" href="https://github.com/uyamini/HalloweenThirdPlace" target="_blank">Learn more</Button>                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}