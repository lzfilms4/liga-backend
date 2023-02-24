class Quiz
{
    constructor(type, questions)
    {
        this.type = type;
        //Массив с вопросами
        this.questions = questions;
        //Номер текущего вопроса
        this.current = 0;
    }
    Next()
    {
        this.current++;
        if(this.current >= this.questions.length)
        {
            this.End();
        }
    }
    End();
}

class Question
{
    constructor(text, answers)
    {
        this.text = text;
        this.answers = answers;
    }

}

//Класс, представляющий ответ
class Answer
{
    constructor(text, value)
    {
        this.text = text;
        this.value = value;
    }
}

//Класс, представляющий результат
class Result
{
    constructor(text, value)
    {
        this.text = text;
        this.value = value;
    }



}
const results =
    [
        new Result("", 0),
        new Result("", 2),
        new Result("", 4),
        new Result("", 6)
    ];

//Массив с вопросами
const questions =
    [
        new Question("2 + 2 = ",
            [
                new Answer("2", 0),
                new Answer("3", 0),
                new Answer("4", 1),
                new Answer("0", 0)
            ])
    ];

//Сам тест
const quiz = new Quiz(1, questions, results);