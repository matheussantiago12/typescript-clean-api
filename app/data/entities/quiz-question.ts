class QuizQuestion {
    public id: number
    public title: string
    public answer: string

    constructor (id: number, title: string, answer: string) {
        this.id = id
        this.title = title
        this.answer = answer
    }
}

export default QuizQuestion
