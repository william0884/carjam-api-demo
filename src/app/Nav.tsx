import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return(
<div className="flex min-w-screen ml-24  flex-col items-center justify-between gap-1 ">
<nav className="w-full fixed top-0 z-100 items-left justify-between text-left  columns-2  text-gray-800  bg-gray-200 py-2 border-solid border-2 border-sky-500">

<span className='ml-8'>We are online : MON - SUN : 9:00AM - 7:00 PM  |  <a className="text-blue-500" href="mailto:sellacar@yoursalesman.co.nz">sellacar@yoursalesman.co.nz</a> </span><p><SocialIcon url="https://twitter.com/YourSalesmanNZ" />   <SocialIcon url="https://www.facebook.com/yoursalesman.co.nz" /> <SocialIcon url="https://www.instagram.com/your_salesman/"/> <SocialIcon url="https://www.linkedin.com/company/your-salesman" /> </p> 

</nav>    

</div>
)
}