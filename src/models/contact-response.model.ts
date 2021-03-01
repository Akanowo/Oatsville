export interface IContactResponse {
  status: string,
  message: string,
  response?: {
    id: string,
    message: string,
    messageId: string
  },
  error?: {
    message: string
  }
}