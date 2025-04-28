import Container from "../component/container/Container"
import { GiBrain, GiMaterialsScience } from "react-icons/gi";
import QuizProccedButton from "../component/ui/QuizProccedButton";
import { EDifficulty, TDifficulty } from "../types/util.type";
import { useState } from "react";
import { MdLiveTv, MdOutlineSportsHandball } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

const Home = () => {
  const categories = [
    {
      name: "General Knowledge",
      description: "Test your knowledge across a wide range of topics.",
      themeColor: "#3b82f6", // blue,
      icon:GiBrain
    },
    {
      name: "Science & Nature",
      description: "Explore the wonders of physics, biology, and beyond.",
      themeColor: "#22c55e", // green,
      icon:GiMaterialsScience
    },
    {
      name: "History",
      description: "Dive into historical events, leaders, and milestones.",
      themeColor: "#a855f7", // purple
      icon:BsClockHistory
    },
    {
      name: "Entertainment",
      description: "Movies, music, TV shows, and pop culture quizzes.",
      themeColor: "#f59e0b", // amber,
      icon:MdLiveTv
    },
    {
      name: "Sports",
      description: "Challenges on athletes, teams, and sports trivia.",
      themeColor: "#ef4444", // red
      icon:MdOutlineSportsHandball
    },
    // {
    //   name: "Geography",
    //   description: "Capitals, countries, and global landmarks await.",
    //   themeColor: "#14b8a6", // teal
    // }
  ];


  const [selectedCategory,setSelectedCategory] =  useState<string|null>(null)
  const [selectedDifficulty,setSelectedDifficulty] =  useState<TDifficulty>(EDifficulty.EASY)
   

  
  
  return (
    <div>
    <Container>
    <h1 className="text-2xl text-black dark:text-gray-50  font-semibold text-center w-10/12 mx-auto mt-10">Choose one from categories below & see how questions you can <br /> answer correctly</h1>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-5 gap-8">
      {
        categories.map((category,index)=>(
          <div key={index} onClick={()=>setSelectedCategory(category.name)} className={`md:p-5 p-2 pb-10  rounded-t-3xl ${selectedCategory === category.name? 'outline-4 outline-offset-8  outline-secondary': null}`}
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
          <div className="flex items-center gap-1  px-8 py-2 border-2 dark:text-gray-200 border-secondary rounded-full ">
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
    <div className="my-20 flex justify-center">
   
   <QuizProccedButton timeMinutes={20} category={selectedCategory} difficulty={selectedDifficulty} totalQuestions={20}/>
 
    </div>
    </Container>
    </div>
  )
}

export default Home