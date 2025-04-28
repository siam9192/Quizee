export interface IQuizQuestion {
    
        type: "multiple" | "boolean"; // OpenTDB usually has "multiple" or "boolean"
        difficulty: "easy" | "medium" | "hard";
        category: string;
        question: string;
        correct_answer: string;
        incorrect_answers: string[];
      
}