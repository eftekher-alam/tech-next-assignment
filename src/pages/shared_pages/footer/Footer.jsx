import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import moment from "moment/moment";

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-base-200 text-base-content" >
                <aside>
                    <Link to={"/"}
                        className="font-bold text-2xl md:text-3xl tracking-wide md:tracking-widest  text-[#ff6c6c]"
                    >Technext <span className="text-[#7d5fff]">Assignment</span></Link>
                    <p>Technext Limited<br />Providing reliable tech since 2012</p>
                </aside>
                <nav >
                    <header className="gradient-text text-lg font-bold uppercase">Contact Info</header>
                    <a className="link link-hover flex gap-2 items-center">
                        <FaPhone className="text-violet-700" /> <span>+1 302 433 6002</span>
                    </a>
                    <a className="link link-hover flex gap-2 items-center">
                        <MdEmail className="text-lg text-violet-700" /> <span>reza@technext.it</span>
                    </a>
                    <a className="link link-hover flex gap-2 items-center">
                        <IoLocationSharp className="text-lg text-violet-700" />
                        <span>Rupayan Shefford, Shyamoli, Level 14, Dhaka, BD</span>
                    </a>
                </nav>
                <nav>
                    <header className="gradient-text text-lg font-bold uppercase">Social</header>
                    <div className="grid grid-flow-col gap-4">

                        <a target="_blank" href="https://www.linkedin.com/company/technextlimited/"><FaLinkedin className="fill-current text-violet-600 text-2xl" /></a>
                        <a target="_blank" href="https://www.facebook.com/TechnextLimited" ><FaFacebookSquare className="fill-current text-violet-600 text-2xl" /></a>
                        <a><FaSquareGithub className="fill-current text-violet-600 text-2xl" /></a>
                    </div>
                </nav>

            </div>
            <div className="footer footer-center p-4 bg-base-200 text-base-content">
                <aside>
                    <p>{`Copyright © ${moment().format('YYYY')} - All right reserved by Technext Limited.`}</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;