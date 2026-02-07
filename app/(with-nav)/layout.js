import Navigation from '@/components/Navigation/Navigation';

export default function WithNavLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
