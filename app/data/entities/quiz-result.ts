class QuizResult {
    public id: number
    public score: number
    public playerName: string

    constructor (id: number, score: number, playerName: string) {
        this.id = id
        this.score = score
        this.playerName = playerName
    }
}

export default QuizResult
