import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Section1 from './components/Section-1';
import Section2 from './components/Section-2';
import Section3 from './components/Section-3';
import Section4 from './components/Section-4';
import Section5 from './components/Section-5';
import Section6 from './components/Section-6';
import Section7 from './components/Section-7';
import Section8 from './components/Section-8';
import Section9 from './components/Section-9';
import Section10 from './components/Section-10';
import Logos from './components/Logos';
import Shadow from './components/Shadow';
import './App.css';

function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <section className="section-1">
                    <Section1 />
                </section>
                <div className="container">
                    <Logos />
                </div>
                <section className="section-2">
                    <Section2 />
                </section>
                <section className="section-3">
                    <Section3 />
                </section>
                <div className="container">
                    <Shadow />
                </div>
                <section className="section-4">
                    <Section4 />
                </section>
                <section className="section-5">
                    <Section5 />
                </section>
                <section className="section-6">
                    <Section6 />
                </section>
                <section className="section-7">
                    <Section7 />
                </section>
                <section className="section-8">
                    <Section8 />
                </section>
                <section className="section-9">
                    <Section9 />
                </section>
                <section className="section-10">
                    <Section10 />
                </section>
            </main>
        </div>
    );
}

export default App;
