import Navbar from "@/components/navbar";
import ThemeCard from "@/components/themeCard";
import Footer from "@/components/footer";
import About from "./About.css";

export default function () {
    return (
        <div className="About">
            <header className="mb-24">
                <Navbar />
            </header>
            <div className="About_us">
                <h1 className="Ab0 mt-[120px] ml-10">About Us</h1>

                <p className="text1">
                    <span className="week">
                        <span className="text-[#FF9B26;]">WEEKEND UX </span>  Providing The <br />
                        Best Opportunities To The <br />
                        Students Around The Globr
                    </span> <br /> <br />
                    <br />Design Academy in Delhi involved in User Experience and User <br /> Interface Training and Consulting. It was started in 2023 <br />
                    and passionate towards User Interface Design/ User Experience Design, Human Computer <br /> Interaction Design. Humanoid is gushing  <br />
                    towards competence to acquire knowledge and <br /> have a wide understanding towards the sphere through the foremost courses <br />
                    in the area of UI/UX Design, by strengthening up your skills, for your golden future <br />
                    <button type="submit" className="join">Join Us</button>

                </p>
            </div>
            <div className="imgAbout">
                <img src="Rectangle 14.png" alt="picture" className="picture1" />
                <img src="Rectangle 14.png" alt="" className="picture2" />

            </div>
            <br />
            <div className="feature">
                <img src="" alt="" />
                <div className="text2">
                    <h3 className="text-lg font-bold ml-18 mt-[-15px] ">Feature</h3><br />
                    <p className=" text-s">
                        <span className="week font-bold ">
                            <h1>
                                We are always working <br />
                                to provide you best of the <br />
                                features in all aspects.
                            </h1>
                        </span>
                        <span className="">
                            At WEEKENDUX the chief determination is to clear the  <br />
                            minds of our students abouttheir goals, while making them consistent <br />
                            in their ambitions and pushing them to be confident <br />
                            for their journey towards the course of time.You will <br />
                            <br />
                            <br />
                            i find every little thing on the nternet in just a click of hand, but here we admire<br />
                            i that without knowledge and practice the<br />
                            i internet may even also fail you in your life. <br />
                            <br />
                            <br />
                            <button className="learn mt-[-28px] ml[-400px]">Learn More</button>
                        </span>

                    </p>
                </div>
                <div className="img1">
                    <img src="Section Img.png" alt="Idée Iluustration" />
                </div>
            </div>

            <div className="text3">
                <span className="Our">Our Benefics</span><br />
                <span className="desc">
                    By Joining WEEKENS UX Platform, <br />
                    One Can Avail a Lot Of Benefits.
                </span>
            </div>
            <span className="desc1">
                Install our top-rated dropshipping app to your e-commerce site and get <br />
                <p>access to US Suppliers, AliExpress vendors, and the best.</p>
            </span>
            <div className=" ml-40 flex  space-x-20  space-y-10">
            <ThemeCard
              title={"O1"}
              icon="Ellipse 8 (1).png"
              description={
                "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
              }
            />
            <ThemeCard
              title={"O2"}
              icon="Ellipse 8.png"
              description={
                "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
              }
            />
            <ThemeCard
              title={"O3"}
              icon="Ellipse 8 (1).png"
              description={
                "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
              }
            />
            
            </div>
            <div className="ml-40 flex  space-x-20 space-y-10">
            <ThemeCard
              title={"O4"}
              icon="Ellipse 8.png"
              description={
                "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
              }
            />
            <ThemeCard 
              title={"O5"}
              icon="Ellipse 8 (1).png"
              description={
                "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
              }
            />
            <ThemeCard
              title={"O6"}
              icon="Ellipse 8.png"
              description={
                "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
              }
            />
            </div>
            <Footer />

        </div>



    )
}