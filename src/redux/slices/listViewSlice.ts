import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ListViewStateI {
    listView: string;
}

const initialState: ListViewStateI = {
  listView: 'row'
};

export const listViewSlice = createSlice({
  name: 'listView',
  initialState,
  reducers: {
    setListView: (state: ListViewStateI, action: PayloadAction<string>) => {
        state.listView = action.payload;
    }
  },
});

export const { setListView } = listViewSlice.actions;

export default listViewSlice.reducer;