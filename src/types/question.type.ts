export interface IRetrieveQuizQuestion {
    
        type: "multiple" | "boolean"; // OpenTDB usually has "multiple" or "boolean"
        difficulty: "easy" | "medium" | "hard";
        category: string;
        question: string;
        correct_answer: string;
        incorrect_answers: string[];
      
}


export interface IQuizQuestion {
        id:string,
        category: string;
        question: string;
        options:string[]
        correct_answer: string;
}


type TOption  = {
        A:string,
        B:string,
        C:string,
        D:string
}


export interface IQuestionAnswer 
        {id:string,option:string}
