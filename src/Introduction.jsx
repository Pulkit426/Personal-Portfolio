import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <div className="text-center pt-32" >
      <h1 className="text-5xl pb-6 "> Hi 👋 I am <span className="text-[#4B0082]">Pulkit Agrawal </span></h1>
      <p>
        Frontend Web Developer with 1+ year of Experience!! I love to build cool
        stuff !!
      </p>
      <button className="p-2 m-4 w-40 border border-purple-400 rounded-lg hover:bg-purple-400">
        View Resume
      </button>
      <div>
        <a
          href="https://www.github.com/Pulkit426"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>

        <a
          href="https://www.twitter.com/Pulkit426"
          className="p-1 m-1"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/pulkit426"
          className="p-1 m-1"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>

        <a href="mailto:agrawalpulkit12@gmail.com" className="p-1 m-1">
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
        <a
          href="https://drive.google.com/file/d/1cRwmMPTJBee8DIJUOqMnzJ-RB2foZfVY/view?usp=sharing"
          className="p-1 m-1"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFileAlt} size="xl" />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
