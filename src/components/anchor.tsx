interface AnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const Anchor = ({ children, ...props }: AnchorProps) => {
  return (
    <a
      {...props}
      className='inline-block underline decoration-dashed decoration-2 decoration-red-600 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 rounded-sm font-semibold hover:no-underline cursor-pointer transition ease-in duration-200 hover:-translate-y-1 hover:scale-110'
    >
      {children}
    </a>
  );
};

export default Anchor;
