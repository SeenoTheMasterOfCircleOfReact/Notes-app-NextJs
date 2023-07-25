import { RootState } from '@/redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodosType = {
  id: string;
  type: 'todo';
  title: string;
  content: TodoType[];
};

export type TextType = {
  id: string;
  type: 'text';
  title: string;
  content: string;
};

export type NoteType = TextType | TodosType;

const initialState: NoteType[] = [
  { id: '1', type: 'text', title: 'ffff', content: 'fffff' },
  {
    id: '2',
    type: 'todo',
    title: 'ffff',
    content: [{ id: 'ssdfd', text: 'ststt', completed: false }],
  },
];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<NoteType>) {
      state.push(action.payload);
    },
    updateTodo(state, action: PayloadAction<NoteType>) {
      // const { id, title, checked } = action.payload;
      // const existingTodo = state.find(todo => todo.id === id);
      // if (!existingTodo) return;
      // existingTodo.title = title;
      // existingTodo.checked = checked;
    },
    removeTodo(state, action: PayloadAction<string>) {
      const id = action.payload;

      return state.filter(todo => todo.id !== id);
    },
  },
});

export const { addNote, updateTodo, removeTodo } = notesSlice.actions;

// creating a selector for selecting a single note from store
export const selectNote = (state: RootState, id: string) =>
  state.notes.find(note => note.id === id);

export default notesSlice.reducer;
