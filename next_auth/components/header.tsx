interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <header className="flex flex-col w-full gap-y-4 items-center justify-center">
      <div>
        <h1 className="text-3xl font-semibold">Auth</h1>
        <p className="text-muted-foreground text-sm">{label}</p>
      </div>
    </header>
  );
};
