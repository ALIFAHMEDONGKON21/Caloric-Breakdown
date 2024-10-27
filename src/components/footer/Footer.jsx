import footerphoto from '../../assets/pexels-quang-nguyen-vinh-222549-28999502.jpg'
const Footer = () => {
    return (
        <div className="bg-black text-base-content p-10 py-5">
            <div className='flex items-center justify-center mt-20'>
            
            </div>
            <div className='flex flex-row justify-around gap-10 mt-5'>
                <div className='flex flex-col'>
                    <p className=' text-lg font-semibold text-white'>About Us</p>
                    <p className='text-sm font-semibold text-white py-5'>We are a passionate team dedicated to <br /> providing the best services to our customers.</p>
                </div>

                <div className='flex flex-col'>
                    <p className='text-lg font-semibold text-white'>Quick Links</p>
                <a className="link link-hover text-sm font-semibold text-white mt-2">Home </a>
               <a className="link link-hover text-sm font-semibold text-white mt-2 ">Servic</a>
               <a className="link link-hover text-sm font-semibold text-white mt-2">About
               </a>
               <a className="link link-hover text-sm font-semibold text-white mt-2">Contact</a>
                </div>
                <div>
                <form>
    <h6 className="text-lg font-semibold text-white">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn bg-gradient-to-r from-red-500 to-yellow-500 join-item">Subscribe</button>
      </div>
    </fieldset>
                </form>
            </div>
        </div>
        <div className=' border-b-2 py-2'>
        
        </div>
        <p className='text-sm  text-center py-2  text-gray-300'>@2024 Your Company All Rights Reserved.</p>
    </div>
    )
};

export default Footer;