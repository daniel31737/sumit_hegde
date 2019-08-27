import React from 'react';
import Header from './components/Header/Header';
import Section1 from './components/Section-1/index';
import Section2 from './components/Section-2/index';
import Section3 from './components/Section-3/index';
import Section4 from './components/Section-4/index';
import Section5 from './components/Section-5/index';
import Section6 from './components/Section-6/index';
import Section7 from './components/Section-7/index';
import Section8 from './components/Section-8/index';
import Section9 from './components/Section-9/index';
import Section10 from './components/Section-10/index';
import Logos from './components/Logo/Logos';
import Content from './components/Div-Content/Content';
import './App.css';
import './scss/style.scss';

function App() {
    return (
        <div>
            <header>
                <div className="container">
                    <Header />
                </div>
            </header>
            <main>
                <section className="section-1">
                    <div className="container">
                        <Section1 />
                    </div>
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
                    <Content />
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
