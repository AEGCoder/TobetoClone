import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // kullanıcı bilgilerine erişelim
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    // kullanıcı bilgilerini silelim
    logout: (state) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    },

  },
})

export const { setCredentials,logout } = authSlice.actions

export default authSlice.reducer