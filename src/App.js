import Portal from "./components/Portal.js";
import React from "react";
import FinalCompCounter from "./components/FinalCompCounter.js";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectIndex = this.handleSelectIndex.bind(this);
        this.handleSelectTeam = this.handleSelectTeam.bind(this);
        this.handleSelectFinalComp = this.handleSelectFinalComp.bind(this);
        this.handleSelectPortal = this.handleSelectPortal.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.state = {currentPage: "index"};
        // currentPage must be one of index, team, finalComp, or portal
    }

    handleSelectIndex() {
        this.setState({currentPage: "index"});
    }

    handleSelectTeam() {
        this.setState({currentPage: "team"});
    }

    handleSelectFinalComp() {
        this.setState({currentPage: "finalcomp"});
    }

    handleSelectPortal() {
        this.setState({currentPage: "portal"});
    }

    toggleMobileMenu() {
        let links = document.getElementById("mobile-header-links");
        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            links.style.display = "block";
        }
    }

    render() {
        const header = (
            <div class="header">
                <img class="header-logo" src={require("./assets/images/ENNOVATE-W.png")} alt="The logo for UBC Ennovate" onClick={this.handleSelectIndex}></img>
                    <div class="header-links">
                        <a class="header-link" onClick={this.handleSelectTeam}>THE TEAM</a>
                        <a class="header-link" onClick={this.handleSelectFinalComp}>FINAL COMP</a>
                        <a class="header-link" onClick={this.handleSelectPortal}><button class="header-button">PORTAL</button></a>
                    </div>
            </div>
        )

        const mobileMenu = (
            <div class="mobile-header">
                <a href="#top"><img class="header-logo" src={require("./assets/images/ENNOVATE-W.png")} alt="The logo for UBC Ennovate" onClick={this.handleSelectIndex}></img></a>
                <div id="mobile-header-links">
                    <a class="mobile-header-link" onClick={this.handleSelectTeam}>THE TEAM</a>
                    <a class="mobile-header-link" onClick={this.handleSelectFinalComp}>FINAL COMP</a>
                    <a class="mobile-header-link" onClick={this.handleSelectPortal}>PORTAL</a>
                </div>
    
                <img onClick={this.toggleMobileMenu} class="mobile-icon-button" src={require("./assets/images/1024px-Hamburger_icon_white.svg.png")}></img>
            </div>
        )

        const footer = (
            <footer>
                <div class="teacher-contact">
                    <h2>Interested in bringing Ennovate to your class?</h2>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9aX22hfqjL20yaWa-DIx-5Vc9SYelcrWh_kBEoQDLfRNRGw/viewform?usp=sf_link" target="_blank"><button class="teacher-button">CONTACT US</button></a>
                </div>
                <h2 class="wholesome-message" style={{fontWeight: "200"}}> Made with love from the Ennovate Team ♥</h2>
                <div class="bottom-row">
                    <div class="social-media">
                        <a href="mailto:admin@ennovateubc.org" target="_blank"><img class="social-media-link" src={require("./assets/images/EmailLogo.png")}></img></a>
                        <a href="https://www.instagram.com/ennovateubc/" target="_blank"><img class="social-media-link" src={require("./assets/images/IG-logo (1).png")}></img></a>
                        <a href="https://www.facebook.com/ennovateubc/" target="_blank"><img class="social-media-link" src={require("./assets/images/FBIcon.png")}></img></a>
                    </div>
                <p onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
                }} style={{cursor: "pointer"}}>Return to the top</p>
                </div>
            </footer>
        )

        const indexPage = (
            <div class="indexPage">
                {header}
                {mobileMenu}
                <div class="hero" id="top">
                    <div class="image-container"><img class="background-image" src={require("./assets/images/Banner.png")} alt="Background photo for UBC Ennovate"></img></div>
                    {/* <img class="background-mobile-image" src={require("./assets/images/ENNOVATE-MOBILE-BACKGROUND.jpg")} alt="Background photo for UBC Ennovate"></img> */}
                
                    <div class="logo-and-headertext">
                        <div class="center-Ennovate">ENNOVATE</div>
                        <img class="textheaderlogo" src={require("./assets/images/ENNOVATE-W.png")} alt="The logo for UBC Ennovate" ></img>
                    </div>
                </div>

                <div class="introduction">
                    <h1 class="intro-header">About Us</h1>
                    <p class="blurb">Ennovate is an intensive, 4 month entrepreneurial education project that focuses on empowering high school students through interactive workshops that help students develop a portfolio of fundamental business skills and a variety of soft skills. Under the support and guidance of the Ennovate team, students participating in the Ennovate program will create a mini social-enterprise that addresses a pressing social or environmental concern, replicating that of a business that would thrive in the real world. At the very end of the program, students will pitch their developed businesses to a panel of industry professionals, showcasing all of their hard work.</p>
                </div>

                <div class="introduction">
                    <h1 class="intro-header">About Enactus UBC</h1>
                    <p class="blurb">Enactus is a global, student-led organization dedicated to enacting positive social change through the lens of entrepreneurship.
             We crave to see improvements in the community, and are passionate facilitators who help make them happen. We know that together, we can and will make a 
             difference this year and in future years to come.  <a href="https://www.enactusubc.ca/" target="_blank" style={{color: "#264080", textDecoration: "underline"}}><b>Enactus UBC</b></a> is home to a team of over 100 students who collaborate to develop unique projects to serve our campus and community, 
             further driving the Enactus mission.
                    </p>


                </div>


                <div class="introduction">
                    <h1 class="intro-header">Impact</h1>
                    <div class="impact-boxes">
                        <div class="impact-box">
                            <div class="impact-textbox">
                                <h3 class="impactText">Directly <br></br> impacted</h3>
                                <h2 class="impact-highlight">1000</h2>
                                <h3 class="impactText">high school <br></br>students</h3>
                            </div>
                        </div>
                        <div class="impact-box">
                        <div class="impact-textbox">
                            <h3 class="impactText">Generating over <span class="yellow-highlight">$8000</span> in net income from <span class="yellow-highlight">26</span> student-led businesses</h3>
                        </div>
                        </div>
                        <div class="impact-box">
                            <div class="impact-textbox">                            
                                <h3 class="impactText">Influencing <br></br> over</h3>
                                <h2 class="impact-highlight">2000</h2>
                                <h3 class="impactText">members in our community, <br></br>across <span class="yellow-highlight">5 cities</span>
                                </h3>
                            </div>


                        </div>

                        
                    
                    </div>
                    


                </div>

                {/* <div class="semester-stats">
                    <div class="semester-stat">
                        <div class="big-number">26</div>
                        <div class="stat">school businesses</div>
                    </div>

                    <div class="semester-stat">
                        <div class="big-number">5</div>
                        <div class="stat">cities in British Columbia</div>
                    </div>

                    <div class="semester-stat">
                        <div class="big-number">~1000</div>
                        <div class="stat">students directly impacted</div>
                    </div>

                    <div class="semester-stat">
                        <div class="big-number">$6,825.12</div>
                        <div class="stat">in net income for schools</div>
                    </div>
                </div> */}

                

                <div class="sponsors">
                    <h1 class="sponsor-header"><strong>Affiliated with...</strong></h1>
                    <div class="sponsor-logos">
                        <a target="_blank" href="https://enactusubc.ca"><img class="sponsor" id="enactusLogo" src={require("./assets/images/Enactus UBC.png")}></img></a>
                        <img class="sponsor" style={{maxWidth: "100px"}} src={require("./assets/images/ubc-logo.png")}></img>
                        <img class="sponsor" style={{maxWidth: "100px"}} src={require("./assets/images/AMS-Logo-Square-o4hkwugu21b6jwb0jidkkle865qhdj550p6xw97ev4.png")}></img>
                    </div>
                </div>
                {footer}
            </div>
        )

        const TeamPage = (
            <div class="teamPage">
                {header}
                {mobileMenu}
                <div class="team-members section">
                    <div class="member block">
                        <h1 class="person-name">Arisha Ahmed</h1>
                        <p class="person-title">Project Director</p>
                        <p class="person-email">arisha.ahmed03@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Ahmed_Arisha_ProjectDirector.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>
        
                    <div class="member block">
                        <h1 class="person-name">Khushi Dhand</h1>
                        <p class="person-title">Project Director</p>
                        <p class="person-email">dhandkhushi07@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Dhand_Khushi_ProjectDirector.png")}
                        ></img>
                    </div>
        
                    <div class="member block">
                        <h1 class="person-name">Emily Chu</h1>
                        <p class="person-title">Social Media Manager</p>
                        <p class="person-email">emily.chu1138@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Chu_Emily_SocialMediaManager.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Audrey Rosyadi</h1>
                        <p class="person-title">Marketing Manager</p>
                        <p class="person-email">audreynnr@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Rosyadi_Audrey_MarketingManager.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Newgen Bao</h1>
                        <p class="person-title">Internal Manager</p>
                        <p class="person-email">newgen2.0b@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Bao_Newgen_InternalManager.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Jonathan Li</h1>
                        <p class="person-title">External Manager</p>
                        <p class="person-email">lijonathan2425@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Li_Jonathan_ExternalManager.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Sammie Ocampo</h1>
                        <p class="person-title">Mentorship Manager</p>
                        <p class="person-email">ocamposofia221@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Ocampo_Sammie_MentorshipManager.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Austin Cu</h1>
                        <p class="person-title">Mentorship Manager</p>
                        <p class="person-email">austincu0000@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Cu_Austin_MentorshipManager.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Topher So</h1>
                        <p class="person-title">Logistics Manager</p>
                        <p class="person-email">topherhyso@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/So_Topher_LogisticsAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Christopher Le</h1>
                        <p class="person-title">Logistics Manager</p>
                        <p class="person-email">chrisle8a@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Le_Christopher_LogisticsManager.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Reese Acorn</h1>
                        <p class="person-title">Finance Manager</p>
                        <p class="person-email">reeseacorn2004@icloud.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Acorn_Reese_FinanceManager.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Tiffany Duong</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">tiffanyduong35@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Duong_Tiffany_GeneralProjectAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Jasmeen Sidhu</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">jasmeensidhu2003@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Sidhu_Jasmeen_GeneralProjectAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Yasmeen Al-Issa</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">a.yasmeen3542@qmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Al-Issa_Yasmeen_GeneralProjectAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    {/* <div class="member block">
                        <h1 class="person-name">Selina Kong</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">selinakong0406@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Kong_Selina_GeneralProjectAssociate.jpg")}></img>
                    </div> */}

                    <div class="member block">
                        <h1 class="person-name">Amy You</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">amyyou2316@qmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/You_Amy_GeneralProjectAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Gabriel Alcayde</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">gabrielcalcayde@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Alcayde_Gabriel_GeneralProjectAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -40px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Emilee Wu</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">Emileewu0616@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Wu_Emilee_GeneralProjectAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Benjamin Yen</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">yenbenjamin263@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Yen_Benjamin_GeneralProjectAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Abigail Crawford</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">abigail.crawford.004@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Crawford_Abigail_GeneralProjectAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Tyler Laude</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">tylerlaude05@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Laude_Tyler_GeneralProjectAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Kan Masujima</h1>
                        <p class="person-title">General Project Associate</p>
                        <p class="person-email">kanyamame.316@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Masujima_Kan_GeneralProjectAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Curtis Yang</h1>
                        <p class="person-title">Logistics Associate</p>
                        <p class="person-email">cyangg004@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Yang_Curtis_LogisticsAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Janine Jiao</h1>
                        <p class="person-title">Logistics Associate</p>
                        <p class="person-email">jiaojanine@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Jiao_Janine_LogisticsAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Ken Wang</h1>
                        <p class="person-title">Mentorship Associate</p>
                        <p class="person-email">jockerken2005@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Wang_Ken_MentorshipAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Alyanna Sia</h1>
                        <p class="person-title">Mentorship Associate</p>
                        <p class="person-email">alyannatansia@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Sia_Alyanna_MentorshipAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Nicholas Wong</h1>
                        <p class="person-title">External Associate</p>
                        <p class="person-email">nicholaswongsfx@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Wong_Nicholas_ExternalAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Sarah Wang</h1>
                        <p class="person-title">External Associate</p>
                        <p class="person-email">ssarahwwang@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Wang_Sarah_ExternalAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Megan Wu</h1>
                        <p class="person-title">Internal Associate</p>
                        <p class="person-email">meganwu.van@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Wu_Megan_InternalAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Jessica Cheung</h1>
                        <p class="person-title">Marketing Associate</p>
                        <p class="person-email">jessicacheung5@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Cheung_Jessica_MarketingAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -80px' }}></img>
                    </div>

                    <div class="member block">
                        <h1 class="person-name">Laura Li</h1>
                        <p class="person-title">Marketing Associate</p>
                        <p class="person-email">lauraligg86@gmail.com</p>
                        <div class="person-gradient"></div>
                        <img class="person-img" src={require("./assets/team-members/Li_Laura_MarketingAssociate.jpg")}
                        style={{ objectFit: 'cover', objectPosition: 'center -30px' }}></img>
                    </div>

                        
                </div>
                {footer}
            </div>
        )
        
        const FinalCompPage = (
            <div class="finalComp">
                {header}
                {mobileMenu}
                <FinalCompCounter />

                <h1 class="final-comp-blurb">Until final comp on May. 21, 2023! Check the portal when that happens</h1>


                <div class="ennovate-sleep">
                    <img src={require("./assets/ENNOVATESLEEP.gif")} alt="Ennovate logo" class="ennovate-gif"></img>
                    <div class="inner">
                        <img class="ennovate-wake" src={require("./assets/images/ENNOVATE-WAKE.png")}></img>
                    </div>
                </div>
                {footer}
            </div>
        )

        let currentPage = this.state.currentPage;

        switch (currentPage) {
            case "index":
                return indexPage;
                break;
            case "team":
                return TeamPage;
                break;
            case "finalcomp":
                return FinalCompPage;
                break;
            case "portal":
                return <Portal />
                break;
        }
    }
}

export default App;