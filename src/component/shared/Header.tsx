
import Container from "../container/Container"
import ThemeToggler from "../ui/ThemeToggler"


function Header() {
  return (
   <header  className='md:p-5 p-3  '>
 <Container>
 <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
    
      <img src="/src/assets/logo.png" alt="" className="w-20"/>
      <h1 className="text-4xl font-semibold text-primary ">Quizee</h1>
    </div>
    {/* <div className="flex items-center gap-1">
   
      <img src="https://cdn-icons-png.flaticon.com/512/3001/3001758.png" alt=""  className="size-10 rounded-full"/>
   <div className="flex items-center gap-2">
   <p className="text-lg md:block hidden ">
        Jibon Ahammed
      </p>
      <span>
      <FaChevronDown />
      </span>
   </div>
    </div> */}
    <ThemeToggler/>
  </div>
    
 </Container>
   </header>
  )
}

export default Header