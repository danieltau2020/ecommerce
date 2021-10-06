import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWQ1Njg3NzFmN2Y2MzczZGY4YTNmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzUwNzE4MCwiZXhwIjoxNjMzNzY2MzgwfQ.4FlYpwFwFG9UiGuV_dUrrtGh5r7RK67CMjj5xbzVufg'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
})
