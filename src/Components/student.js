import React from 'react';
import '../App.css';
import AttendanceIcon from '../attend.png';
import FinanceIcon from '../function.png';
import Man from '../p1.webp';
import Human from '../p2.webp';
import Person from '../p3.png';
import QualityIcon from '../quality.png';
import ReportIcon from '../report.jpeg';
import StudentIcon from './douper.png';
import Logo from './hicetlogo.jpg';
import { SiCodementor } from "react-icons/si";

function App() {
    return (
        <div className="app-container">
            <header className="header">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <h1>Student Management System</h1>
            </header>
            
            <div className="main-content">
                
                <aside className="sidebar">
                    <ul>
                        <li>
                            <img src={StudentIcon} alt="Student Management Icon" className="sidebar-icon" />
                            Student Management
                        </li>
                        <li>
                            <img src={FinanceIcon} alt="Finance Management Icon" className="sidebar-icon" />
                            Functional Management
                        </li>
                        <li>
                            <img src={QualityIcon} alt="Quality Control Icon" className="sidebar-icon" />
                            Quality Control
                        </li>
                        <li>
                            <img src={ReportIcon} alt="Report Delivery Icon" className="sidebar-icon" />
                            Report Delivery
                        </li>
                        <li>
                            <img src={AttendanceIcon} alt="Attendance Icon" className="sidebar-icon" />
                            Attendance
                        </li>
                    </ul>
                </aside>

                <section className="dashboard">
                    <div className="cards-container">
                        <div className="card red">
                            <img src={Person} alt=''></img>
                            <p>Regular Students</p>
                            <h2>8</h2>
                        </div>
                        <div className="card purple">
                        <img src={Man} alt=''></img>
                            <p>Remedial Students</p>
                            <h2>13</h2>
                        </div>
                        <div className="card green">
                        <img src={Human} alt=''></img>
                            <p>In Paid Clubs</p>
                            <h2>00</h2>
                        </div>
                    </div>

                    <div className="menu-container">
                        <div className="menu-item">
                            <div className="icon">📘</div>
                            <p>Regular Enrollment</p>
                        </div>
                        <div className="menu-item">
                            <div className="icon">📗</div>
                            <p>Remedial Enrollment</p>
                        </div>
                        <div className="menu-item">
                            <div className="icon">🎓</div>
                            <p>Club Management</p>
                        </div>
                        <div className="menu-item">
                            <div className="icon">📚</div>
                            <p>Classroom Management</p>
                        </div>
                        <div className="menu-item">
                            <div className="icon">📧</div>
                            <p>SMS / EMAIL</p>
                        </div>
                        <div className="menu-item">
                            <div className="icon">🏥</div>
                            <p>Clinic</p>
                        </div>
                        <div className="menu-item">
                            <div className="icon"><SiCodementor /></div>
                            <p>Attendance</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default App;
