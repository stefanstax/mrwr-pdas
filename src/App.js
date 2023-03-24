import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = () => {
  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <h1 class="title">Personal Digital Assistants</h1>
        </div>
      </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div class="column is-4">
              <ProfileCard
                handle="alexa"
                image={AlexaImage}
                title="Alexa Assistant"
                description={
                  "Alexa is created by Amazon and helps you buy things"
                }
              />
            </div>
            <div class="column is-4">
              <ProfileCard
                handle="siri"
                image={SiriImage}
                title="Siri"
                description={
                  "Cortana was made by Microsoft who knows what it does?"
                }
              />
            </div>
            <div class="column is-4">
              <ProfileCard
                title="Cortana"
                image={CortanaImage}
                handle="cortana"
                description={"Siri was made by Apple and is being phased out"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
