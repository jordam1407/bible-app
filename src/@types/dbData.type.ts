export interface IHistory {
    userId: string
    date: string
    read: IRead[]
    write: IWrite[]
}

export interface IRead {
    book: string
    chapter: number
    verse: number
}

export interface IWrite {
    book: string
    chapter: number
    verse: number
    description: string
}
