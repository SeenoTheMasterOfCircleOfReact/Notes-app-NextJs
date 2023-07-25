// a reusable button component
// it will get a optional variant prop for styling
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
}

function Button(props: ButtonProps) {
  // selecting the variant prop and other props with destructuring
  const { variant, ...rest } = props;

  if (variant === 'secondary') {
    return (
      <button
        {...rest}
        className="px-10 w-max h-10 flex items-center rounded-md shadow-md text-lg font-semibold text-white hover:bg-violet-800 active:bg-violet-600 disabled:bg-violet-200 disabled:cursor-not-allowed"
      />
    );
  }

  return (
    <button
      {...rest}
      className="px-4 py-2 rounded-full text-lg text-violet-950 font-extrabold bg-amber-500 hover:bg-amber-600 active:bg-amber-400 disabled:bg-amber-200 disabled:cursor-not-allowed"
    />
  );
}

export default Button;
