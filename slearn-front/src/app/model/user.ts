export interface User {
  id?: number,  //? == optional param
  firstname: string,
  lastname: string,
  email: string,
  phone: string,
  address: string,
  password?: string,
  passwordRepeat?: string,
}
