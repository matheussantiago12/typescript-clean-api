import QuizQuestion from 'App/data/entities/quiz-question'

class Quiz {
    public id: number
    public questions: QuizQuestion[]

    constructor (id: number, questions: QuizQuestion[], playerName: string) {
        this.id = id
        this.questions = questions
    }
}

export default Quiz
