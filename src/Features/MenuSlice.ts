import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  listCata: [] as any,
  detaildele: null,
};
export const getAllDanhMuc = createAsyncThunk(
  "/AllDanhMuc",
  // Declare the type your function argument here:
  async () => {
    try {
      const res = await axios.get(
        "https://6285c338f0e8f0bb7c08fe54.mockapi.io/Loai"
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getDanhMucByID = createAsyncThunk(
  "/getDanhMucByID",
  // Declare the type your function argument here:
  async (payload: any) => {
    try {
      const res = await axios.get(
        `https://6285c338f0e8f0bb7c08fe54.mockapi.io/Loai/${payload}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteDanhMucByID = createAsyncThunk(
  "/deleteDanhMucByID",
  // Declare the type your function argument here:
  async (payload: any) => {
    try {
      const res = await axios.delete(
        `https://6285c338f0e8f0bb7c08fe54.mockapi.io/Loai/${payload}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateDanhMucByID = createAsyncThunk(
  "/updateDanhMucByID",
  // Declare the type your function argument here:
  async (payload: any) => {
    try {
      const res = await axios.put(
        `https://6285c338f0e8f0bb7c08fe54.mockapi.io/Loai/${payload.id}`, payload
      );
      console.log('payload',payload);
      
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const AddNewLoai = createAsyncThunk(
  "/AddNew",
  // Declare the type your function argument here:
  async (payload: any) => {
    try {
      const res = await axios.post(
        `https://6285c338f0e8f0bb7c08fe54.mockapi.io/Loai`,
        payload.data
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const AllDanhMucSlice = createSlice({
  name: "SanPham",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all danh muc
      .addCase(getAllDanhMuc.pending, (state, action) => {
        state.listCata = [];
      })
      .addCase(getAllDanhMuc.fulfilled, (state, action) => {
        state.listCata = action.payload;
      })
      .addCase(getAllDanhMuc.rejected, (state, action) => {
        state.listCata = [];
      })

      // get danh muc
      .addCase(getDanhMucByID.pending, (state, action) => {
        state.detaildele = null;
      })
      .addCase(getDanhMucByID.fulfilled, (state, action) => {
        state.detaildele = action.payload;
      })
      .addCase(getDanhMucByID.rejected, (state, action) => {
        state.detaildele = null;
      })

      // delete danh muc
      .addCase(deleteDanhMucByID.pending, (state, action) => {
        state.detaildele = null;
      })
      .addCase(deleteDanhMucByID.fulfilled, (state, action) => {
        for (let i = 0; i < state.listCata.length; i++) {
          if (state.listCata[i]._id === action.payload) {
            state.listCata.splice(action.payload, 1);
          }
        }
      })
      .addCase(deleteDanhMucByID.rejected, (state, action) => {
        state.detaildele = null;
      })
      // update danh muc
      .addCase(updateDanhMucByID.pending, (state, action) => {
        state.detaildele = null;
      })
      .addCase(updateDanhMucByID.fulfilled, (state, action) => {
        for (let i = 0; i < state.listCata.length; i++) {
          if (state.listCata[i]._id === action.payload.id) {
            state.listCata.splice(i, 1, action.payload);
          }
        }
      })
      .addCase(updateDanhMucByID.rejected, (state, action) => {
        state.detaildele = null;
      })

      // create new loại sp
      .addCase(AddNewLoai.pending, (state, action) => {
        state.listCata = [];
      })
      .addCase(AddNewLoai.fulfilled, (state, action) => {
        state.listCata.push(action.payload);
      })
      .addCase(AddNewLoai.rejected, (state, action) => {
        state.listCata = [];
      });
  },
});
export default AllDanhMucSlice.reducer;
