interface AnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const Anchor = ({ children, ...props }: AnchorProps) => {
  return (
    <a
      {...props}
      className='inline-block underline decoration-dashed decoration-2 decoration-primary'
    >
      {children}
    </a>
  );
};

export default Anchor;
