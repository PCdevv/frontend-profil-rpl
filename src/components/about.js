const About = () => {
  return (
      <div className="bg-white">
          <div className="items-center text-center opacity-70 rounded-none rounded-tr-lg rounded-bl-lg card w-full shadow-2xl bg-green">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-5x1 text-black">About</span>
                </label>
              </div>
            </div>
          </div>
        <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm shadow-2xl" />
        </div>
      </div>
      </div>
    );
}

export default About;