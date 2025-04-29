import Container from "../component/container/Container"
import QuizProccedButton from "../component/ui/QuizProccedButton";
import { EDifficulty, TDifficulty } from "../types/util.type";
import { useRef, useState } from "react";

import { categories } from "../utils/constant";
import { ICategory } from "../types/category.type";
const Home = () => {
 


  const ref = useRef<HTMLDivElement>(null)

  const [selectedCategory,setSelectedCategory] =  useState<ICategory|null>(null)
  const [selectedDifficulty,setSelectedDifficulty] =  useState<TDifficulty>(EDifficulty.EASY)
  
  return (
    <div>
    <Container>
    <h1 className="text-2xl text-black dark:text-gray-50  font-semibold text-center w-10/12 mx-auto mt-10">Choose one from categories below & see how questions you can <br /> answer correctly</h1>
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-x-8 gap-5 px-3 lg:px-0">
      {
        categories.map((category,index)=>(
          <div key={index} onClick={()=>{
            setSelectedCategory(category)
            ref.current?.scrollIntoView({behavior:'smooth',block:'start'})
          }} className={`md:p-5 p-2 hover:cursor-pointer pb-10  rounded-t-3xl ${selectedCategory?.id === category.id? 'outline-4 outline-offset-8  outline-secondary': null}`}
          style={{
            backgroundColor: category.themeColor,
            boxShadow: `0px 1px 4px 0px ${category.themeColor}`
          }}
          >
           <div className="flex justify-center ">
           <span className="text-8xl text-white">
            <category.icon />
            </span>
           </div>
               <div className="mt-2">
               <h3 className="text-xl font-medium text-white text-center">
                  {category.name}
                 </h3>
                 <p className="text-center text-gray-100">
                  {category.description}
                 </p>
               </div>
          </div>
        ))
      }
    </div>

   
    <div className="mt-10 size-fit mx-auto">
      <p className="text-xl text-center  font-medium dark:text-gray-100 ">Choose Difficulty :</p>
      <div className="mt-3 flex items-center justify-center flex-wrap gap-4">
      {
        Object.values(EDifficulty).map((diff,index)=>(
          <div className="flex items-center gap-1  px-4 md:px-8 py-2 border-2 dark:text-gray-200 border-secondary rounded-full ">
          <input type="radio" id={`difficulty-${diff}`} defaultChecked={index === 0} onChange={(e)=>e.target.checked && setSelectedDifficulty(diff)}  name="difficulty" value={diff} className="size-5 accent-primary"/>
          <label htmlFor={`difficulty-${diff}`} className="font-medium">
           {
            diff
           }
          </label>
        </div>
        ))
      }
      </div>
    </div>
    <div ref={ref} className="my-20 flex justify-center">
   
   <QuizProccedButton timeMinutes={20} category={selectedCategory} difficulty={selectedDifficulty} totalQuestions={10}/>
 
    </div>
    </Container>
    </div>
  )
}

export default Home