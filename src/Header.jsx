const Header = () => {
  return (
    <div className="h-20 flex justify-between px-2 py-6 shadow-lg bg-[#c084fc]">
      <h1> Pulkit Agrawal </h1>

      <nav className="pr-10">
        <ul className="flex flex-row gap-6">
          <li> <a href="#"> Home </a> </li>
          <li> <a href="#about"> About </a> </li>
          <li> <a href="#skills"> Skills </a>  </li>
          <li> <a href="#projects"> Project </a> </li>
          <li> <a href="#experience"> Experience </a> </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
