import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Introduction = () => {
  return (
    <div className="text-center pt-48" >
      <h1 className="text-5xl pb-6 "> Hi 👋 I am <span className="text-[#4B0082]">Pulkit Agrawal </span></h1>
      <p>
        Full Stack Web Developer with 1+ year of Experience!! I love to build cool
        stuff !!
      </p>
      <button className="p-2 m-4 w-40 border rounded-3xl text-white hover:scale-105" style={{background: "linear-gradient(89deg, rgb(154, 92, 255) 0%, rgb(79, 107, 216) 100%)"}}>
      <a
          href="https://drive.google.com/file/d/1Hd5i28MFwQATjjgoiU1cTpzmfRfnhurt/view"
          target="_blank"
          rel="noreferrer"
        > View Resume
        </a>
      </button>
      <div>

        <h1 className="py-2 my-2 text-lg"> Connect with me  </h1>
        <a
          href="https://www.github.com/Pulkit426"
          className="p-1 m-1 text-brown-800"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>

        <a
          href="https://www.twitter.com/Pulkit426"
          className="p-1 m-1 text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/pulkit426"
          className="p-1 m-1 text-blue-800"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
  
      </div>
    </div>
  );
};

export default Introduction;
