import { FaUserAlt } from "react-icons/fa";
import Userinfo from "../Hooks/Userinfo";

const Aboutme = () => {
  return (
    <div className="grid gap-8 mb-10 items-center md:grid-cols-2 md:text-left  p-6 md:p-16  bg-blue-300  sm:max-xl:bg-blue-50 sm:max-xl:font-bold">
        {/* <div className="text-3xl relative justify-center flex logo-container gap-6 top-6 ">
          <FaUserAlt/>
            <h1 className="items-center font-bold">About Me</h1>
        </div> */}
         <div className="w-[250px] mx-16 md:w-[350px] ">
        <Userinfo/>
        </div>
        <div className="relative left-2 md:w-3/4">
            <h1 className="text-3xl  font-bold ">I'am Sarthak Ekhande</h1>
            <h3 className="text-xl  font-bold ">Front end Developer</h3><br></br>
            <p>A passionate developer with a keen eye for design and a knack for transforming ideas into engaging digital experiences. I am working on my skills everyday to   grow in market. I bring creativity and functionality together to create web   solutions that captivate and delight users. You can contact me anytime for any   freelance projects like building your websites.</p><br></br>
            <p>Email : Sarthakekhande2017@gmail.com</p><br/>
            <p>Place : Pune, Maharashtra - 412307</p>
        </div>
       

       
       
     
   </div>
  )
}

export default Aboutme