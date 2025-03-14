import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SortStateI {
    sortBy: string;
}

const initialState: SortStateI = {
  sortBy: 'alphAsc'
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state: SortStateI, action: PayloadAction<string>) => {
        state.sortBy = action.payload;
    }
  },
});

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;