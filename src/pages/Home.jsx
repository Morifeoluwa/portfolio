import React from "react";
import Typewriter from "typewriter-effect";
import { Footer, Navbar } from "../components/index";

import hero from "../assets/hero.png";
import signature from "../assets/signature.png";

import {
  TbBallpen,
  TbBrowser,
  TbBrush,
  TbCalendar,
  TbChecklist,
  TbClock,
  TbCode,
  TbDeviceMobile,
  TbEye,
  TbLink,
  TbScreenShare,
  TbUsers,
} from "react-icons/tb";

const Home = () => {
  const skills = [
    {
      skill: "HTML",
      per: "95%",
    },
    {
      skill: "JavaScript",
      per: "90%",
    },
    {
      skill: "CSS",
      per: "88%",
    },
    {
      skill: "PHP",
      per: "92%",
    },
    {
      skill: "React JS",
      per: "80%",
    },
    {
      skill: "React Native",
      per: "70%",
    },
    {
      skill: "Web3",
      per: "65%",
    },
    {
      skill: "Wordpress",
      per: "86%",
    },
  ];

  const portfolios = [
    {
      viewlink: "codewithmorife.netlify.app/opp/",
      github: "github.io/morifeoluwa",
      date: "May 28, 2022",
      image: "portfolioOne.png",
    },
    {
      viewlink: "codewithmorife.netlify.app/opp/",
      github: "github.io/morifeoluwa",
      date: "May 28, 2022",
      image: "portfolioTwo.png",
    },
    {
      viewlink: "codewithmorife.netlify.app/opp/",
      github: "github.io/morifeoluwa",
      date: "May 28, 2022",
      image: "portfolioThree.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-background pt-5 pb-5 pb-md-0 text-white">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-12 col-md-6 d-none d-md-block">
              <div className="text-center">
                <img className="w-75" src={hero} alt="Adedeji Morifeoluwa" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-start px-2 py-5">
                <h5 className="top-header mb-2">I'm</h5>
                <h1 className="main-header">Adedeji Morifeoluwa</h1>
                <div className="my-lead mb-4">
                  <Typewriter
                    options={{ loop: true }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Web Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Web Designer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("App Designer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("App Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Web3 Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Blockchain Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Front End Developer")
                        .start();
                    }}
                  />
                </div>
                <a
                  href="mailto:codewithmorife@gmail.com"
                  className="my-btn text-dark btn-secondary py-2 px-5 me-3"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4"></p>

      {/* Why Me */}
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="px-3 py-5">
              <div className="row align-items-center">
                <div className="col-6 text-center">
                  <div className="bg-secondary cc pt-4 shadow mx-auto">
                    <TbCalendar size={60} />
                  </div>
                </div>
                <div className="col-6">
                  <h1 className="big-head fw-bolder mb-0">3</h1>
                  <p className="uppercase opaq mt-0">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="px-3 py-5">
              <div className="row align-items-center">
                <div className="col-6 text-center">
                  <div className="bg-secondary cc pt-4 shadow mx-auto">
                    <TbChecklist size={60} />
                  </div>
                </div>
                <div className="col-6">
                  <h1 className="big-head fw-bolder mb-0">20+</h1>
                  <p className="uppercase opaq mt-0">Works Completed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-md-none d-lg-block">
            <div className="px-3 py-5">
              <div className="row align-items-center">
                <div className="col-6 text-center">
                  <div className="bg-secondary cc pt-4 shadow mx-auto">
                    <TbUsers size={60} />
                  </div>
                </div>
                <div className="col-6">
                  <h1 className="big-head fw-bolder mb-0">8</h1>
                  <p className="uppercase opaq mt-0">Total Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="py-1"></p>

      {/* Skills & Experience */}
      <div className="container mt-4 mb-5">
        <div className="row g-md-5">
          <div className="col-12 text-center">
            <h1 className="text-center fw-bold mb-0 uppercase">
              Skills & Education
            </h1>
            <hr
              className="mx-auto mt-0 mb-4"
              style={{
                width: "8rem",
                border: "2px solid #000",
              }}
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <p className="px-2 opaq pb-3 text-md">
              I am a highly skilled and motivated individual with a strong
              background in the following:
            </p>
            <div className="row">
              {skills.map((skill) => (
                <div
                  className="col-12 col-md-6 mb-3"
                  key={skills.indexOf(skill) + 1}
                >
                  <div className="px-2">
                    <div className="row">
                      <div className="col-6 fw-normal">{skill.skill}</div>
                      <div className="col-6 text-end fw-normal">
                        {skill.per}
                      </div>
                      <div className="col-12 mt-2">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${skill.per}` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="px-2">
              <div className="row">
                <div className="col-12">
                  <h4 className="fw-bold uppercase text-center bg-primary text-white py-2 mb-5">
                    Education
                  </h4>
                </div>
                <div className="col-12 col-md-6 mb-5">
                  <div className="">
                    <h5 className="">SSCE</h5>
                    <hr className="w-25" />
                    <p className="text-primary mb-1">2013 - 2019</p>
                    <p className="h6">FSTC IM, Ogun State</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-5">
                  <div className="">
                    <h5 className="">CISCO Certified</h5>
                    <hr className="w-25" />
                    <p className="text-primary mb-1">2013 - 2019</p>
                    <p className="h6">CISCO</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-5">
                  <div className="">
                    <h5 className="">ND, Computer Science</h5>
                    <hr className="w-25" />
                    <p className="text-primary mb-1">2020 - 2022</p>
                    <p className="h6">FCAH&PT, Ibadan</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-5">
                  <div className="">
                    <h5 className="">BSC, Computer Science</h5>
                    <hr className="w-25" />
                    <p className="text-primary mb-1">2023 Till Date</p>
                    <p className="h6">FCAH&PT, Ibadan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="bg-primary pt-5 pb-3 my-5">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-center text-white">
              <h1 className="text-center fw-bold mb-0 uppercase">
                My Services
              </h1>
              <hr
                className="mx-auto mt-0 mb-5"
                style={{
                  width: "8rem",
                  border: "2px solid #fff",
                }}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="bg-secondary text-center px-4 py-5 shadow rounded">
                <TbBrowser size={50} />
                <h5 className="fw-bold mt-4">Web Design</h5>
                <p className="text-md opaq">
                  I have a passion for creating visually appealing and
                  user-friendly websites that meet the needs of my clients
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="bg-secondary text-center px-4 py-5 shadow rounded">
                <TbCode size={50} />
                <h5 className="fw-bold mt-4">Web Development</h5>
                <p className="text-md opaq">
                  I have experience creating and maintaining websites for both
                  personal and professional projects
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="bg-secondary text-center px-4 py-5 shadow rounded">
                <TbScreenShare size={50} />
                <h5 className="fw-bold mt-4">Responsive Design</h5>
                <p className="text-md opaq">
                  I am skilled in creating websites that adapt seamlessly to
                  different devices and screen sizes
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="bg-secondary text-center px-4 py-5 shadow rounded">
                <TbBallpen size={50} />
                <h5 className="fw-bold mt-4">UI/UX Design</h5>
                <p className="text-md opaq">
                  I am passionate about creating intuitive and visually
                  appealing digital experiences for users
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="bg-secondary text-center px-4 py-5 shadow rounded">
                <TbBrush size={50} />
                <h5 className="fw-bold mt-4">Graphics Design</h5>
                <p className="text-md opaq">
                  I am a graphics designer, skilled in creating visually
                  stunning designs for a variety of media
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="bg-secondary text-center px-4 py-5 shadow rounded">
                <TbDeviceMobile size={50} />
                <h5 className="fw-bold mt-4">Mobile App Design</h5>
                <p className="text-md opaq">
                  I specialize in creating intuitive and visually appealing
                  interfaces for users to interact with
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="pt-5 pb-3 mt-5 mb-0" id="portfolio">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-center fw-bold mb-0 uppercase">Portfolio</h1>
              <hr
                className="mx-auto mt-0 mb-5"
                style={{
                  width: "8rem",
                  border: "2px solid #000",
                }}
              />
            </div>

            {portfolios.map((portfolio) => (
              <div
                className="col-12 col-md-6 col-lg-4 mb-5"
                key={portfolios.indexOf(portfolio) + 1}
              >
                <div className="portfolio">
                  <img
                    src={require("../../public/portfolio/" + portfolio.image)}
                    alt=".."
                  />
                  <div className="bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <a
                          href={portfolio.viewlink}
                          className="text-white"
                          title="view project"
                        >
                          <TbEye size={20} className="me-4" />
                        </a>
                        <a
                          href={portfolio.github}
                          className="text-white"
                          title="github repo"
                        >
                          <TbLink size={20} />
                        </a>
                      </div>
                      <div className="col-6 text-end">
                        <TbClock size={18} className="me-2" />
                        {portfolio.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-5 px-2 bg-light" id="contact">
        <div className="container">
          <div className="row g-md-5 align-items-center">
            <div className="col-md-6 my-5">
              <div>
                <h1 className="mb-4 fw-bold">
                  If Not Now, When?{" "}
                  <span className="text-primary">Let’s Work Together!</span>
                </h1>
                <p className="text-md mb-4 opaq">
                  If you have any questions or would like to discuss a potential
                  project, please feel free to contact me at{" "}
                  <strong>
                    <a href="mailto:codewithmorife@gmail.com">
                      codewithmorife@gmail
                    </a>
                  </strong>
                  . I look forward to hearing from you and working together to
                  bring your mobile app ideas to life.
                </p>
                <img style={{ width: "13rem" }} src={signature} alt=".." />
              </div>
            </div>
            <div className="col-md-6 my-5">
              <form>
                <div className="form-group mb-4">
                  <label className="uppercase">Name</label>
                  <input
                    className="form-control my-2 shadow-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="uppercase">Email</label>
                  <input
                    type="email"
                    className="form-control my-2 shadow-none"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="uppercase">Subject</label>
                  <input
                    className="form-control my-2 shadow-none"
                    placeholder="...."
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="uppercase">Message</label>
                  <textarea
                    className="form-control my-2 shadow-none"
                    placeholder="John Doe"
                    rows="8"
                  ></textarea>
                </div>
                <button className="my-btn btn-secondary px-4 py-2 text-dark">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
