import pfp from "../assets/pfp.jpeg"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Skills from "../components/Skills"

function Home() {
  return (
    <>
      <Nav />
      <div className="min-h-screen w-full flex flex-col items-start px-6 sm:px-10 bg-black-950 text-white">
        <div className="mt-10 mb-4">
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover object-center cursor-pointer"
            src={pfp}
            alt="profile"
          />

          <h1 className="text-3xl sm:text-5xl font-bold mb-4 font-sans">
            Hey, I'm Richard Gomes
          </h1>

          <div className="font-mono text-sm sm:text-base tracking-wide">
            <p>Richard = new Human();</p>
            <p>Richard.work = Web Developer;</p>
            <p>Richard.city = Hyderabad;</p>
            <p>Richard.hobbies = [“food 🍔", “video games 🎮"];</p>
          </div>
        </div>

        <div className="mt-6 max-w-prose text-base font-light leading-relaxed font-sans">
          <p>
            I am a Web Developer who loves to create and experiment with things on the web.
            I'm always onto learning whether it's new stuff or a cool framework, a fun side project,
            or just messing around with code to see what happens. I enjoy the process of building
            things from scratch, trying out different ideas, and figuring out how things work
            behind the scenes. For me, it's all about staying curious and never stopping the learning.
          </p>
        </div>

        <div className="mt-10 w-full">
          <Skills />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
