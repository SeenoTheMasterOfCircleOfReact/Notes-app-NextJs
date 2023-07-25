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

type TodoPayloadType = {
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
    addTodo(state, action: PayloadAction<TodoPayloadType>) {
      const { noteId, todo } = action.payload;
      // we are finding the note that we're going to update it's todo
      const existingNote = state.find(note => note.id === noteId);
      // return if we didn't find it
      if (!existingNote) return;

      existingNote.list.push(todo);
    },
    updateTodo(state, action: PayloadAction<TodoPayloadType>) {
      const { noteId, todo } = action.payload;
      // we are finding the note that we're going to update it's todo
      const existingNote = state.find(note => note.id === noteId);
      // return if we didn't find it
      if (!existingNote) return;

      // checking to see if the todo that we are trying to edit exist
      const existingTodo = existingNote.list.find(t => t.id === todo.id);
      if (!existingTodo) return;

      // and finally we'll update the todo if there is no problem
      existingTodo.text = todo.text;
      existingTodo.completed = todo.completed;
    },
    // here passing the whole todo for removing is unnecessary but i don't want to create a new type for just this payload.
    removeTodo(state, action: PayloadAction<TodoPayloadType>) {
      const { noteId, todo } = action.payload;
      // we are finding the note that we're going to update it's todo
      const existingNote = state.find(note => note.id === noteId);
      // return if we didn't find it
      if (!existingNote) return;

      // checking to see if the todo that we are trying to edit exist
      const existingTodo = existingNote.list.find(t => t.id === todo.id);
      if (!existingTodo) return;

      // and finally we'll delete the todo if there is no problem
      existingNote.list = existingNote.list.filter(todo => todo.id !== todo.id);
    },
  },
});

export const { addNote, addTodo, updateTodo, removeTodo } = notesSlice.actions;

// creating a selector for selecting a single note from store
export const selectNote = (state: RootState, id: string) =>
  state.notes.find(note => note.id === id);
// getting the todo list of a note
export const selectNoteList = (state: RootState, id: string) => {
  const existingNote = state.notes.find(note => note.id === id);
  // if the note didn't exist we return and empty array. the page will show error 404 anyway
  if (!existingNote) return [];

  return existingNote.list;
};

export default notesSlice.reducer;
