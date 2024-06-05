import HeaderLogo from './Logo';

const HeaderLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header className="w-full flex justify-between items-center px-12 pt-2 border-b border-blue-30 pb-3">
      <HeaderLogo />
      {children}
    </header>
  );
};
export default HeaderLayout;
