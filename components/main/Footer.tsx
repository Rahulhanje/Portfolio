"use client";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
    return (
        <footer id="contact" className="bg-[#1011238f]  text-gray-300 py-8 border-t border-[#25213b4e] flex flex-col justify-center items-center sm:w-screen w-[430px]">
            <motion.div
                className="text-center"
                whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                transition={{ duration: 0.75 }}
            >
                <div className="flex flex-col items-center mb-5">
                    <span className="bg-[#1a1443] text-white p-2 px-5 text-lg rounded-md mb-4">
                        Contact
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 text-gray-300 font-semibold">
                    <div className="flex flex-col gap-3 md:gap-6 font-poppins">
                        <ContactItem icon={<MdAlternateEmail className="text-orange-500 text-lg" />} label="rahulhanje0.7@gmail.com" />
                        <ContactItem icon={<IoMdCall className="text-green-500 text-lg" />} label="+91-7204169306" />
                        <ContactItem icon={<CiLocationOn className="text-red-700 text-lg" />} label="Belagavi, Karnataka" />
                    </div>
                    
                    <div className="flex flex-col gap-3 md:gap-6 font-poppins">
                        <LinkItem icon={<FaInstagram className="text-pink-500 text-lg" />} href="https://www.instagram.com/rahulhanje07/" label="rahulhanje07" />
                        <LinkItem icon={<FaLinkedin className="text-blue-500 text-lg" />} href="https://www.linkedin.com/in/rahul-hanje-b31812252/" label="Rahul Hanje" />
                        <LinkItem icon={<FaGithub className="text-black text-lg" />} href="https://github.com/Rahulhanje" label="Rahulhanje" />
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}

const ContactItem = ({ icon, label }: { icon: JSX.Element; label: string }) => (
    <div className="flex items-center bg-[#1a1a2e] rounded-lg p-3 hover:bg-[#23233d] shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
        {icon}
        <p className="text-sm font-bold ml-2">{label}</p>
    </div>
);

const LinkItem = ({ icon, href, label }: { icon: JSX.Element; href: string; label: string }) => (
    <Link href={href} passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#1a1a2e] rounded-lg p-3 hover:bg-[#23233d] shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
            {icon}
            <p className="text-sm font-bold ml-2">{label}</p>
        </a>
    </Link>
);

export default Footer;
