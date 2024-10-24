

const banner = () => {
    return (
        <div>
            <div
  className="hero  "
  style={{
    backgroundImage: "url(https://i.ibb.co/DLfmyk8/pexels-quang-nguyen-vinh-222549-28999502.jpg)  ",
  }}>
  <div className="hero-overlay bg-opacity-60 rounded-xl "></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5 text-gray-200">
      The world is filled with incredible diversity, from cultures and landscapes to the vast range of human experiences and emotions.
      </p>
      <div className="gap-5">
      <button >
      <a
  className="group inline-block rounded bg-gradient-to-r from-green-800  to-yellow-200 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-50"
  href="#"
>
  <span className="block rounded-sm bg-nono px-8 py-3 text-sm font-medium group-hover:bg-transparent">
  Explore Now
  </span>
</a>


      </button>
      
      <button>
      
      <a
  className="group inline-block rounded-full bg-gradient-to-r from-green-500  to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-10"
  href="#"
>
  <span
    className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
  >
    Our Feedback
  </span>
</a>

      </button>

      </div>
      
    </div>
   
  </div>
</div>
        </div>
    );
};

export default banner;