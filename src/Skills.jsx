const Skills = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-2 m-2"> Skills </h1>

      <div className="flex">
        <div>
          Frontend
          <img src="src\assets\htmllogo.png" className="w-24 h-24 p-2" />
          <img src="src\assets\csslogo.png" className="w-24 h-24 p-2" />
          <img src="src\assets\reactlogo.png" className="w-24 h-24 p-2" />
          <img src="src\assets\reduxlogo.png" className="w-24 h-24 p-2" />
          <img src="src\assets\tailwindcsslogo.png" className="w-24 h-24 p-2" />
        </div>

        <div>
          Back end
          <img src="src\assets\nodelogo.png" className="w-24 h-24 p-2" />
          <img src="src\assets\expresslogo.png" className="w-52 h-24 p-2" />
        </div>

        <div>
          Languages
          <img src="src\assets\c++.png" className="w-24 h-24 p-2" />
          <img src="src\assets\jslogo.png" className="w-24 h-24 p-2" />
        </div>

        <div>
          Testing
          <img src="src\assets\jest.png" className="w-24 h-24 p-2" />
          <img
            src="src\assets\react-testing-library.png"
            className="w-24 h-24 p-2"
          />
          <img
            src="src\assets\cypress.png"
            className="w-24 h-24 p-2 bg-slate-300"
          />
        </div>

        <div>
          DEVOPS
          <img src="src\assets\gitlogo.png" className="w-24 h-24 p-2" />
          <img src="src\assets\githublogo.png" className="w-24 h-24 p-2" />
          <img src="src\assets\heroku.png" className="w-24 h-24 p-2" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
