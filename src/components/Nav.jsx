import pfp from "../assets/pfp.jpeg";

function Nav() {
  return (
    <nav className="w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 bg-black-950 text-white space-y-4 sm:space-y-0">
      {/* Name and Profile Image */}
      <div className="flex items-center space-x-3">
        <img
          src={pfp}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover object-center"
        />
        <span className="font-semibold text-lg">Richard</span>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
        <a
          href="mailto:richardgomesxd@gmail.com"
          className="bg-white text-black px-3 py-1 rounded hover:bg-black-100 text-sm font-medium"
        >
          Email
        </a>
        <a
          href="https://github.com/rich1ebytes"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-black px-3 py-1 rounded hover:bg-black-100 text-sm font-medium"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/richard-gomes"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-black-950 px-3 py-1 rounded hover:bg-black-100 text-sm font-medium"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/richxiee/"
          target="_blank"
          rel="noreferrer"
          className="bg-white te-black px-3 py-1 rounded hover:bg-black-100 text-sm font-medium"
        >
          Instagram
        </a>
      </div>
    </nav>
  );
}

export default Nav;
