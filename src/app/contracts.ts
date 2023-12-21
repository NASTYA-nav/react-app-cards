export interface IArticle {
    userId: number
    id: number
    title: string
    body: string
}

export interface IInitialArticleState {
    isLoading: boolean
    error: string | null
    data: IArticle[]
}

export interface IUser {
    name: string
    username?: string
    id: number
    email: string
    website: string
    phone: string
    address?: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    company?: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export interface IInitialUserState {
    isLoading: boolean
    error: string | null
    data: IUser[]
}

export interface IPhoto {
    id: number
    title: string
    url: string
}

export interface IInitialPhotosState {
    isLoading: boolean
    error: string | null
    data: IPhoto[]
}