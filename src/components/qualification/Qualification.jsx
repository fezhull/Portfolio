import React from "react";
import "./qualification.css";
import Data from "./Data";
import Card from "./Card";

const Qualification = () => {
    return (
        <section className="qualification container section" id="qualification">
            <h2 className="section__title">Qualification</h2>

            <div className="qualification__container grid">

                {/* Education Section */}
                <div className="timeline grid">
                    <h3 className="qualification__title">Education</h3>
                    {Data.filter(val => val.category === "Education").map((val, id) => (
                        <Card
                            key={id}
                            icon={val.icon}
                            title={val.title}
                            year={val.year}
                            desc={val.desc}
                        />
                    ))}
                </div>

                {/* Experience Section */}
                <div className="timeline grid">
                    <h3 className="qualification__title">Experience</h3>
                    {Data.filter(val => val.category === "Experience").map((val, index) => (
                        <Card
                            key={index}
                            icon={val.icon}
                            title={val.title}
                            year={val.year}
                            desc={val.desc} // fixed typo: "decs" -> "desc"
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Qualification;
