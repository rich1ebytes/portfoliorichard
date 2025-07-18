function Footer() {
  return (
    <footer className="w-full bg-black-950 text-white py-6 px-4 flex items-center justify-center">
      <p className="text-xs sm:text-sm text-center">
        © {new Date().getFullYear()} Richard Gomes. All rights reserved.
      </p>
    </footer>
  );

}
export default Footer;
