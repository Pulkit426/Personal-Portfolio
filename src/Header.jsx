const Header = () => {
  return (
    <div className="h-20 flex justify-between px-2 py-6 bg-gray-400">
      <h1> Pulkit Agrawal </h1>

      <nav className="pr-10">
        <ul className="flex flex-row gap-6">
          <li> Home </li>
          <li> About </li>
          <li> Skills </li>
          <li> Project </li>
          <li> Experience </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
