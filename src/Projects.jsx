const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-10 m-2 mt-10"> Projects </h1>

      <div className="flex pt-10 m-2 justify-center">
        <img
          src="\assets\terrapost.png"
          className="w-96 h-60 m-2 border rounded-lg"
        />

        <div className="m-2 p-2">
          <h1 className="pt-4 pl-10 text-xl font-bold">Terrapost</h1>
          <p className="pt-4 pl-10 w-[600px]">
            A social blogging web app built with MERN stack You can Create,
            update, delete, comment and like other people’s posts. Redux is used
            for managing state and styling is done with MaterialUI. Tests are
            written in jest and cypres
          </p>

          <a
            href="https://github.com/Pulkit426/Terrapost"
            target="_blank"
            rel="noreferrer"
          >
            <button className="p-2 ml-10 mt-10 border border-purple-400 rounded-lg hover:text-white hover:bg-purple-400">
              Github Repo
            </button>
          </a>

          <a
            href="https://terrapost-api.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="p-2 m-2 border border-black rounded-lg bg-purple-400 text-white hover:text-purple-400 hover:bg-white">
              Live Demo
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-row-reverse pt-10 m-2 justify-center">
        <img
          src="/assets/chromachat.png"
          className="w-96 h-60 m-2 border rounded-lg"
        />

        <div className="m-2 p-2">
          <h1 className="pt-4 pr-10 text-xl font-bold">ChromaChat</h1>
          <p className="pt-4 pr-10 w-[600px]">
            A Full Stack chat application built on MERN stack You can send
            messages in realtime. Frontend is built on ReactJS, ReduxJs and
            MaterialUI. Backend is built using NodeJS and MongoDB. It uses
            pusher channel to send/receive messages in realtime
          </p>

          <a
            href="https://github.com/Pulkit426/ChromaChat"
            target="_blank"
            rel="noreferrer"
          >
            <button className="p-2 mt-10 border border-purple-400 rounded-lg hover:text-white hover:bg-purple-400">
              Github Repo
            </button>
          </a>

          <a
            href="https://chromachat.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="p-2 m-2  mr-10 border border-black rounded-lg bg-purple-400 text-white hover:text-purple-400 hover:bg-white">
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
