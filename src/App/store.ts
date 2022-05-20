import { configureStore } from '@reduxjs/toolkit'
import allDanhMuc from '../Features/MenuSlice'
import allSanPham from '../Features/SanPhamSlice'
import allHoaDon from '../Features/HoaDonSlice'
export const store = configureStore({
  reducer: {
      listDanhMuc:allDanhMuc,
      listSanPham:allSanPham,
      listHoaDon: allHoaDon
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch