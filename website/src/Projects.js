import React from 'react';
import './App.css';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


function Projects() {
    return (
        <div className='App'>
            <div className='fade-in'>
                <div className='projects-header'>
                    <h1> Projects </h1>
                    <div className='horizontal-line'></div>
                    <p>During my time at Penn, I've had the opportunity to work on Software Engineering and Data Science projects alike. Here's a list of a few of them.</p>
                </div>
                <div className='projects'>
                    <div className='project-box'>
                        <h2>QuickConvert</h2>
                        <p>A Chrome Extension allowing users to highlight a currency and price on a webpage, converting the price into the desired target currency and displaying it in a popup. Users can select their desired target currency in the dropdown menu when clicking on the extension's icon. Rates are from the CurrencyLayer API, cached every 8 hours.</p>
                        <a href='https://hrizwan3.github.io/QuickConvert/' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faLink} /> Visit Landing Page
                        </a>
                    </div>
                    <div className='project-box'>
                        <h2>AutoAvenue</h2>
                        <p>A web application designed for users to check and compare used car prices and reviews across the market. The features include search, reviews, popular cars, efficient cars, and hidden gems.</p>
                        <a href='https://github.com/hrizwan3/AutoAvenue' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} /> View on GitHub
                        </a>
                    </div>
                    <div className='project-box'>
                        <h2>PennOS</h2>
                        <p>A Linux-like operating system with a shell, standalone file system, and kernel. PennOS had robust support for system calls with a round-robin scheduler, integrated shell built-ins, and a custom FAT. This project was written in C, and the ucontext library was utilized to create and manage processes.</p>
                    </div>
                    <div className='project-box'>
                        <h2>Flight Delays and Cancellations</h2>
                        <p>A three-person project focused on analyzing flight data to predict delays and cancellations. The project used Python libraries like Pandas, Scikit-Learn, and TensorFlow to apply machine learning techniques such as Random Forests, Naive Bayes, Logistic Regression, and Neural Networks, focusing on variables like date, time, and flight routes.</p>
                        <a href='https://github.com/hrizwan3/flightcancellations' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} /> View on GitHub
                        </a>
                    </div>
                    <div className='project-box'>
                        <h2>Movie Grapher</h2>
                        <p>Movie Grapher is a tool for analyzing and recommending movies based on a graph of movies and actors from the IMDb database. The data was cleaned using Python's Pandas library, and the rest of the project was implemented in Java. Features include finding the farthest actors or movies and providing movie recommendations based on favorite movies or actors, using algorithms like triadic closure and neighborhood overlap.</p>
                        <a href='https://github.com/hrizwan3/Movie-Grapher' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} /> View on GitHub
                        </a>
                    </div>
                    <div className='project-box'>
                        <h2>Sudoku Solver</h2>
                        <p>The classic game of Sudoku implemented using a command-line interface in C++. The game featured a sophisticated solver that employs backtracking and arc-consistency algorithms, enabling efficient puzzle-solving.</p>
                        <a href='https://github.com/hrizwan3/Sudoku-Game-Solver' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} /> View on GitHub
                        </a>
                    </div>
                    <div className='project-box'>
                        <h2>AI Safe</h2>
                        <p>
                            A sophisticated detection system using a Raspberry Pi camera, integrated with OpenCV and TensorFlow for facial and body recognition. Equipped with PIR sensors, it captures and emails images using smtplib upon detecting a person, providing enhanced security with real-time alerts.
                        </p>
                        <a href='https://github.com/hrizwan3/AI-Safe' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} /> View on GitHub
                        </a>
                    </div>
                    <div className='project-box'>
                        <h2>Embedded Pong</h2>
                        <p>The classic game of Pong, developed using a TFT LCD module and joystick control through bare metal C. It featured a wireless integration using the NodeMCU board and Blynk platform, enabling remote control of player paddles.</p>
                    </div>
                    {/* <div className='project-box'>
                        <h2>Senator Tweet Statistics</h2>
                        <p>
                            A SQL project to determine the activity of U.S. Senators on Twitter. The tweets were extracted and stored in an Azure SQL Database using web scraping tools. Statistical analysis was then performed to determine engagement and activity per Senator per party, providing valuable insights into the dynamics of political discourse on social media.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Projects;
