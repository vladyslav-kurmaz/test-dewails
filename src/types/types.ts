export type useHttpType = (
  url: string,
  token: string
) => void;

export type User = {
    avatar_url: string,
    name: string,
    bio: string,
    html_url: string
}

export type userInfo = {
  user: User | null,
  inputFocus: boolean,
  inputValue: string,
  loading: boolean,
  error: boolean
}