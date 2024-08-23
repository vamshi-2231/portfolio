import profile from "../img/vamshi.png"

export default function About() {


  return (
    <div
      data-aos="zoom-in-down"
      className="bg-gradient-to-br from-slate-900 via-slate-900 to-rose-900"
    >
      <div className="flex justify-center items-center flex-col md:flex-row-reverse xl:min-h-screen md:mx-20 xl:mx-52 text-slate-100">
        <img
          src={profile}
          alt="vamshi"
          className="max-md:mt-5 lg:ml-20 h-40 w-40 lg:h-[400px] lg:w-[400px] hover:scale-105 duration-300 rounded-full shadow-lg shadow-cyan-400/50"
        />
        <div className="p-6">
          <span className="text-3xl lg:text-5xl mr-3">Hi, I'm</span>
          <span className="text-cyan-400 font-extrabold text-3xl lg:text-5xl">
            Vamshi
          </span>

          <h2 className="lg:text-3xl font-bold my-5 font-mono">
            I am a
            <span className="typing font-semibold text-teal-500 ml-3"></span>
          </h2>

          <p className="xl:text-lg my-3 lg:my-6 text-justify lg:text-justify max-w-screen-sm">
            I am a Web Developer and Programmer. I am currently pursuing my
            B.Tech in Computer from Vaagdevi College of Engineering. I am a
            self-taught programmer and I am passionate about Web Development and
            Programming. I am also a tech enthusiast and I love to learn new
            technologies and I am always ready to learn new things.
          </p>
          <div className="flex my-5">
            <a
              href="https://www.linkedin.com/in/vamshi-mamindla-9113aa1b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full text-lg flex items-center justify-center bg-slate-200 w-36 h-10 m-1 mr-2 xl:m-5 text-slate-900 duration-300 drop-shadow-2xl shadow-lg shadow-slate-200/50 hover:scale-90"
            >
              <i className="devicon-linkedin-plain colored m-2"></i>
              LINKEDIN
            </a>

            <a
              href="https://docs.google.com/document/d/19zAWB6SjWjE4vqmZe6KMMx41rUhpVwE4/edit?usp=sharing&ouid=112611466766837662746&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full text-lg flex items-center justify-center bg-slate-200 w-36 h-10 m-1 ml-2 xl:m-5 text-slate-900 duration-300 drop-shadow-2xl shadow-lg shadow-slate-200/50 hover:scale-90"
            >
              <i className="fa-solid fa-paperclip m-2"></i> RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
