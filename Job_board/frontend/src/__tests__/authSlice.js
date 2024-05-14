import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ userInfo: 'dono', isAuthenticated: false, error: "" }]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push({
        userInfo: state.reduce((maxId, todo) => Math.max(user.id, maxId), -1) + 1,
        isAuthenticated: true,
        error: action.payload
      })
    }
  }
})

export const { todoAdded } = todosSlice.actions

export default todosSlice.reducer
