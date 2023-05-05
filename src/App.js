import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import './index.css';

function App() {
    return (
        <div>

            <div class="text-5xl font-extrabold ... text-center">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 p-4">Personal digital assistance</h1>
            </div>

            <div className="cards">
                <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
                <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
                <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
            </div>
        </div>
    );
}

export default App;