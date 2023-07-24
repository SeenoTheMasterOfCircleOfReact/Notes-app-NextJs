import React from 'react';

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
        className="px-10 w-max h-10 bg-slate-200 hover:bg-slate-300 active:bg-slate-100 flex items-center rounded-md shadow-md text-lg font-semibold text-slate-500"
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
