export interface LoginResponse {
    message: string
    token: string
    email: string
    name: string
    id: string
    role: 'user' | 'admin'
}