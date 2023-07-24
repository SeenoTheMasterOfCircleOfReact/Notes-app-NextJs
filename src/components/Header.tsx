import Button from '@/UI/Button';
import PageWrapper from './PageWrapper';

export default function Header() {
  return (
    <header className="bg-violet-800">
      <PageWrapper>
        <div className="text-5xl font-black py-5 flex justify-between items-center">
          <div>
            <span className="text-amber-400">یا</span>دت نره
          </div>

          <Button>افزودن یادداشت</Button>
        </div>
      </PageWrapper>
    </header>
  );
}
