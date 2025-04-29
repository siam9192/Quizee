import React from 'react'
import { questionOptionsIndex, shuffleArray } from '../../utils/constant';
interface IProps {
    options:string[],
    onSelect:(option:string)=>void,
    selectedAnswer:string
}
function QuestionOptions(props:IProps) {
    const options = React.useMemo(() => {
        return shuffleArray(props.options);
      }, []);


  return (
  options.map((option, optionIdx) => (
                    <div
                      key={optionIdx}
                      onClick={() => props.onSelect(option)}
                      className={`px-3 py-4 border-2 rounded-lg flex gap-2 cursor-pointer 
                        ${props.selectedAnswer === option
                          ? 'bg-primary text-white border-primary'
                          : 'bg-gray-50 dark:bg-dark-secondary border-primary'
                        }`}
                    >
                      <p className="text-lg font-medium dark:text-gray-100">
                        <span className={`${props.selectedAnswer === option ? 'text-white' : 'text-secondary'}`}>
                          {questionOptionsIndex[optionIdx]}.
                        </span>{' '}
                        {option}
                      </p>
                    </div>
                  ))
  )
}

export default QuestionOptions