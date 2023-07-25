import { RootState } from '@/redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

export type NoteType = {
  id: string;
  type: 'text' | 'todo';
  title: string;
  content: string;
  list: TodoType[];
};

type AddTodoPayload = {
  noteId: string;
  todo: TodoType;
};

const initialState: NoteType[] = [
  { id: '1', type: 'text', title: 'ffff', content: 'fffff', list: [] },
  {
    id: '2',
    type: 'todo',
    title: 'ffff',
    content: '',
    list: [{ id: 'ssdfd', text: 'ststt', completed: false }],
  },
];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<NoteType>) {
      state.push(action.payload);
    },
    addTodo(state, action: PayloadAction<AddTodoPayload>) {
      const { noteId, todo } = action.payload;
      // we are finding the note that we're going to update it's todo
      const existingNote = state.find(note => note.id === noteId);
      // return if we didn't find it
      if (!existingNote) return;

      existingNote.list.push(todo);
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
