const Skills = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-2 m-2 py-14 mt-14"> Skills </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        <div className="w-80 max-h-60 flex flex-col border border-black justify-between">
          <h1 className="p-2 text-center bg-slate-500 text-xl font-bold text-white">
            {" "}
            FRONTEND{" "}
          </h1>

          <div className="flex flex-row flex-wrap justify-center">
            <img src="\assets\htmllogo.png" className="w-24 max-h-24 p-2" />
            <img src="\assets\csslogo.png" className="w-24 max-h-24 p-2" />
            <img src="\assets\reactlogo.png" className="w-24 max-h-24 p-2" />
            <img src="\assets\reduxlogo.png" className="w-24 max-h-24 p-2" />
            <img
              src="\assets\tailwindcsslogo.png"
              className="w-24 max-h-24 p-2"
            />
          </div>
        </div>

        <div className="w-80 max-h-60 flex flex-col border border-black justify-stretch">
          <h1 className="p-2 text-center bg-slate-500 text-xl font-bold text-white">
            {" "}
            BACKEND{" "}
          </h1>
          <div className="flex flex-row flex-wrap justify-center m-2 p-2">
            <img src="\assets\nodelogo.png" className="w-24 h-24 p-2" />
            <img src="\assets\mongodb.png" className="w-24 h-24 p-2" />
            <img src="\assets\expresslogo.png" className="w-48 h-16 p-2" />
          </div>
        </div>

        <div className="w-80 max-h-60 flex flex-col border border-black">
          <h1 className="p-2 text-center bg-slate-500 text-xl font-bold text-white">
            {" "}
            LANGUAGES{" "}
          </h1>
          <div className="flex flex-row flex-wrap justify-center m-4 p-4">
            <img src="\assets\c++.png" className="w-24 h-24 p-2" />
            <img src="\assets\jslogo.png" className="w-24 h-24 p-2" />
          </div>
        </div>

        <div className="w-80 max-h-64 flex flex-col border border-black ">
          <h1 className="p-2 text-center bg-slate-500 text-xl font-bold text-white">
            {" "}
            TESTING{" "}
          </h1>

          <div className="flex flex-row flex-wrap justify-center p-3 m-3">
            <img src="\assets\jest.png" className="w-24 h-24 p-2" />
            <img
              src="\assets\react-testing-library.png"
              className="w-24 h-24 p-2"
            />
            <img
              src="\assets\cypress.png"
              className="w-20 h-20 p-2 bg-slate-300"
            />
          </div>
        </div>

        <div className="w-80 max-h-64 flex flex-col border border-black ">
          <h1 className="p-2 text-center bg-slate-500 text-xl font-bold text-white">
            {" "}
            DEVOPS{" "}
          </h1>

          <div className="flex flex-row flex-wrap justify-center p-2 m-2">
            <img src="\assets\gitlogo.png" className="w-24 h-24 p-2" />
            <img src="\assets\githublogo.png" className="w-24 h-24 p-2" />
            <img src="\assets\heroku.png" className="w-24 h-24 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
