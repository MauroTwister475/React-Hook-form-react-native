type Option = {
  letter: string;
  resp: string;
  correct: boolean;
};

type Question = {
  question: string;
  options: Option[];
};

export type QuestionsType = {
  [key: string]: Question[];
};