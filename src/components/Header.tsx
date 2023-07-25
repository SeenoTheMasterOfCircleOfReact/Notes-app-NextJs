'use client';

import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/redux/hooks';
import { nanoid } from '@reduxjs/toolkit';

import { addNote } from '@/redux/features/notes/notesSlice';

import Button from '@/UI/Button';
import PageWrapper from './PageWrapper';
import Link from 'next/link';

export default function Header() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // I could have opened a form and add the note after creating the content for it
  // but i've decided to add an empty note first and then navigate to it and edit the content from there because:
  // 1) I think it's cooler this way :P
  // 2) I don't need a complex logic for add and edit form. it simply has one form for editing
  // 3) google keep works this way
  const addNoteHandler = () => {
    const id = nanoid();
    dispatch(addNote({ id, type: 'text', title: '', content: '', list: [] }));
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-violet-800">
      <PageWrapper>
        <div className="text-5xl font-black py-5 flex justify-between items-center">
          <Link href="/">
            <div>
              <span className="text-amber-400">یا</span>دت نره
            </div>
          </Link>

          <Button onClick={addNoteHandler}>افزودن یادداشت</Button>
        </div>
      </PageWrapper>
    </header>
  );
}
