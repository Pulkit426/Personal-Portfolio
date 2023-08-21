const Experience = () => {
  return (
    <div id="experience">
      <h1 className="text-3xl font-bold text-center pt-10 m-2 ">
        Experience
      </h1>

      <div className="p-2 m-2 pl-6 ml-6 mt-10 border-l-2 border-blue-500">
        <h1 className="text-xl font-bold">Software Engineer </h1>
        <h2 className="font-bold"> Infosys </h2>
        <h3 className="font-light italic">June, 2021 - Present </h3>
        <ul className="pt-5 w-[800px]">
          <li>
            My responsibilities include collaborating with client service teams
            to understand and solve bottlenecks and proposed feature expansions.
          </li>
          <li>
            Writing clean code and authoring code fixes and enhancements for
            inclusion in future code releases and patches primarily using
            ReactJS, Redux and Material UI framework
          </li>
          <li>
            Writing responsive web pages for clients and fixing server crashes
            to increase responsiveness
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
