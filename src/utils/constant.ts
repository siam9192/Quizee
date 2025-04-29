import { BsClockHistory } from "react-icons/bs";
import { FaMasksTheater } from "react-icons/fa6";
import { GiBookCover, GiBrain, GiCartwheel, GiElephant, GiEmptyChessboard, GiFeather, GiHotMeal, GiMaterialsScience, GiMinotaur, GiMusicalNotes, GiSamuraiHelmet, GiTheater, GiVote, GiWorld, } from "react-icons/gi";
import { MdBrush, MdComputer, MdDirectionsCar, MdLiveTv, MdLocalMovies, MdOutlineComputer, MdOutlineSportsHandball, MdPhoneAndroid, MdSportsEsports, MdStars } from "react-icons/md";
import { PiMathOperationsFill } from "react-icons/pi";

export const categories = [
    {
      id: 9,
      name: "General Knowledge",
      description: "Test your knowledge across a wide range of topics.",
      themeColor: "#3b82f6", // blue
      icon: GiBrain
    },
    {
      id: 10,
      name: "Entertainment: Books",
      description: "Trivia about famous books, authors, and literary works.",
      themeColor: "#8b5cf6", // violet
      icon: GiBookCover
    },
    {
      id: 11,
      name: "Entertainment: Film",
      description: "Dive into the world of movies and iconic films.",
      themeColor: "#f59e0b", // amber
      icon: MdLocalMovies
    },
    {
      id: 12,
      name: "Entertainment: Music",
      description: "Test your memory of songs, genres, and musicians.",
      themeColor: "#10b981", // emerald
      icon: GiMusicalNotes
    },
    {
      id: 13,
      name: "Entertainment: Musicals & Theatres",
      description: "Explore Broadway, musicals, and famous plays.",
      themeColor: "#ec4899", // pink
      icon: GiTheater
    },
    {
      id: 14,
      name: "Entertainment: Television",
      description: "Questions on TV shows, series, and characters.",
      themeColor: "#a855f7", // purple
      icon: MdLiveTv
    },
    {
      id: 15,
      name: "Entertainment: Video Games",
      description: "Gaming trivia about consoles, games, and characters.",
      themeColor: "#22c55e", // green
      icon: MdSportsEsports
    },
    {
      id: 16,
      name: "Entertainment: Board Games",
      description: "Test your knowledge of classic and modern board games.",
      themeColor: "#f43f5e", // red
      icon: GiEmptyChessboard
    },
    {
      id: 17,
      name: "Science & Nature",
      description: "Explore physics, biology, chemistry, and more.",
      themeColor: "#06b6d4", // cyan
      icon: GiMaterialsScience
    },
    {
      id: 18,
      name: "Science: Computers",
      description: "Computer science, tech history, and innovations.",
      themeColor: "#0ea5e9", // sky blue
      icon: MdComputer
    },
    {
      id: 19,
      name: "Science: Mathematics",
      description: "Solve mathematical puzzles and challenges.",
      themeColor: "#facc15", // yellow
      icon: PiMathOperationsFill
    },
    {
      id: 20,
      name: "Mythology",
      description: "Dive into myths, legends, and ancient stories.",
      themeColor: "#c084fc", // light purple
      icon: GiMinotaur
    },
    {
      id: 21,
      name: "Sports",
      description: "Trivia about athletes, games, and sporting events.",
      themeColor: "#ef4444", // red
      icon: MdOutlineSportsHandball
    },
    {
      id: 22,
      name: "Geography",
      description: "Questions about countries, cities, and landmarks.",
      themeColor: "#3b82f6", // blue
      icon: GiWorld
    },
    {
      id: 23,
      name: "History",
      description: "Explore key events and important figures of history.",
      themeColor: "#a855f7", // purple
      icon: BsClockHistory
    },
    {
      id: 24,
      name: "Politics",
      description: "Governments, leaders, and political events trivia.",
      themeColor: "#f97316", // orange
      icon: GiVote
    },
    {
      id: 25,
      name: "Art",
      description: "Questions about art movements, artists, and masterpieces.",
      themeColor: "#e11d48", // rose
      icon: MdBrush
    },
    {
      id: 26,
      name: "Celebrities",
      description: "Trivia about famous personalities and celebrities.",
      themeColor: "#22d3ee", // cyan
      icon: MdStars
    },
    {
      id: 27,
      name: "Animals",
      description: "Fascinating facts about animals from around the world.",
      themeColor: "#16a34a", // green
      icon: GiElephant
    },
    {
      id: 28,
      name: "Vehicles",
      description: "Cars, bikes, and other vehicles trivia.",
      themeColor: "#6366f1", // indigo
      icon: MdDirectionsCar
    },
    {
      id: 29,
      name: "Entertainment: Comics",
      description: "Test your knowledge of comic books and superheroes.",
      themeColor: "#f43f5e", // pink red
      icon: FaMasksTheater
    },
    {
      id: 30,
      name: "Science: Gadgets",
      description: "Trivia about tech gadgets and inventions.",
      themeColor: "#14b8a6", // teal
      icon: MdPhoneAndroid
    },
    {
      id: 31,
      name: "Entertainment: Japanese Anime & Manga",
      description: "Dive into anime and manga trivia!",
      themeColor: "#f59e0b", // amber
      icon: GiSamuraiHelmet
    },
    {
      id: 32,
      name: "Entertainment: Cartoon & Animations",
      description: "Cartoon series, animated movies, and more!",
      themeColor: "#fb7185", // rose pink
      icon: GiCartwheel
    }
  ];
  

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Shakespeare", "Dickens", "Tolkien", "Rowling"],
      answer: "Shakespeare"
    },
    {
      question: "What is the boiling point of water?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C"
    },
    {
      question: "Which gas do plants absorb?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
      answer: "Carbon Dioxide"
    },
    {
      question: "What color is chlorophyll?",
      options: ["Red", "Green", "Yellow", "Blue"],
      answer: "Green"
    },
    {
      question: "Which language is primarily spoken in Brazil?",
      options: ["Spanish", "English", "Portuguese", "French"],
      answer: "Portuguese"
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific"
    },
    {
      question: "Which number is a prime number?",
      options: ["9", "15", "17", "21"],
      answer: "17"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Gd", "Go"],
      answer: "Au"
    },
    {
      question: "Which planet has rings?",
      options: ["Earth", "Mars", "Saturn", "Venus"],
      answer: "Saturn"
    },
    {
      question: "In which year did World War II end?",
      options: ["1942", "1945", "1950", "1939"],
      answer: "1945"
    },
    {
      question: "How many legs does a spider have?",
      options: ["6", "8", "10", "12"],
      answer: "8"
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Oxygen", "Helium", "Hydrogen", "Nitrogen"],
      answer: "Hydrogen"
    },
    {
      question: "What is the tallest mountain on Earth?",
      options: ["K2", "Kilimanjaro", "Everest", "Denali"],
      answer: "Everest"
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile"
    },
    {
      question: "What does 'CPU' stand for?",
      options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processing Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Thailand", "Japan", "Korea"],
      answer: "Japan"
    }
  ];

  export function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }


  export const questionOptionsIndex = ['A', 'B', 'C', 'D'];