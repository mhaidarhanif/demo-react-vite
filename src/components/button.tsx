interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className="bg-teal-500">{children}</button>;
};

interface ButtonsProps {
  data: React.ReactNode[];
}

export const Buttons = ({ data }: ButtonsProps) => {
  return (
    <>
      {data.map((children) => {
        return <Button key={String(children)}>{children}</Button>;
      })}
    </>
  );
};
