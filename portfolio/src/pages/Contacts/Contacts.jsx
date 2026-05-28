import { Instagram, GitHub } from '@mui/icons-material';
import { Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from 'react-router-dom';
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_koyucwb",
                "template_jaeyyxl",
                form.current,
                "43qYR7Purru0o53B5"
            )
            .then(
                () => {
                    alert("Message sent successfully 😼");
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message");
                }
            );
        e.target.reset();
    };

    return (
        <section
            id="contact"
            className="w-full  py-10  text-white"
        >
            <div className="lg:max-w-7xl w-full md:mx-auto mx:1 flex flex-col gap-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                    <div className="rounded-3xl border border-cyan-400/40 bg-white/5 backdrop-blur-md sm:p-8 p-4 shadow-[0_0_30px_rgba(34,211,238,0.12)">
                        <p className="text-cyan-400 uppercase tracking-[0.2em] mb-3">
                            Contact
                        </p>
                        <h2 className="text-4xl font-bold mb-8">
                            Contact Me
                        </h2>
                        <div className="space-y-6 text-gray-300">
                            <div className="flex items-center gap-4">
                                <MapPin className="text-cyan-400" />
                                <p>Gorakhpur, India</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-cyan-400" />
                                <p>ankitmall932@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-cyan-400" />
                                <p>+91 9936738441</p>
                            </div>
                            <NavLink to='https://www.instagram.com/ankit_mall_932' className="flex items-center gap-4 cursor-default">
                                <Instagram className="text-cyan-400" />
                                <p>ankit_mall_932</p>
                            </NavLink>
                            <NavLink to='https://github.com/ankitmall932/Hotel-Booking-Site' className="flex items-center gap-4 cursor-default">
                                <GitHub className="text-cyan-400" />
                                <p>ankitmall932</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-cyan-400/40 bg-white/5 backdrop-blur-md  sm:p-8 p-4  shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                        <p className="text-cyan-400 uppercase tracking-[0.2em] mb-3">
                            Availability
                        </p>
                        <h2 className="text-4xl font-bold mb-8">
                            Currently Available For
                        </h2>
                        <div className="space-y-5 text-gray-300 text-lg">
                            <div className="border border-cyan-400/20 rounded-xl px-4 py-3 hover:border-cyan-400 transition-all">
                                Freelance Projects
                            </div>
                            <div className="border border-cyan-400/20 rounded-xl px-4 py-3 hover:border-cyan-400 transition-all">
                                Frontend Development
                            </div>
                            <div className="border border-cyan-400/20 rounded-xl px-4 py-3 hover:border-cyan-400 transition-all">
                                Full Stack Web Apps
                            </div>
                            <div className="border border-cyan-400/20 rounded-xl px-4 py-3 hover:border-cyan-400 transition-all">
                                Collaboration Opportunities
                            </div>
                            <div className="border border-cyan-400/20 rounded-xl px-4 py-3 hover:border-cyan-400 transition-all">
                                Open Source Contributions
                            </div>
                        </div>
                    </div>
                </div>
                <form
                    ref={ form }
                    onSubmit={ sendEmail }
                    className="rounded-3xl border border-cyan-400/40 bg-white/5 backdrop-blur-md sm:p-8 p-4 shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                >
                    <div className="flex flex-col gap-6">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            required
                            className="w-full bg-transparent border border-cyan-400/20 rounded-xl sm:px-5 px-2 sm:py-4 py-2 outline-none focus:border-cyan-400 transition-all" />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                            className="w-full bg-transparent border border-cyan-400/20 rounded-xl sm:px-5 px-2 sm:py-4 py-2 outline-none focus:border-cyan-400 transition-all" />
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Topic / Suggestion"
                            required
                            className="w-full bg-transparent border border-cyan-400/20 rounded-xl sm:px-5 px-2 sm:py-4 py-2 outline-none focus:border-cyan-400 transition-all resize-none" ></textarea>
                        <button
                            type="submit"
                            className="rounded-xl bg-cyan-500 py-4 font-semibold text-lg hover:bg-cyan-400 hover:scale-[1.01] transition-all duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section >
    );
};

export default Contacts;