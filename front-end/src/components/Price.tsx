interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'; 
  color?: string; 
  alignSelf?: string;
  children: React.ReactNode;
}

export default function Price({ children, size = 'sm', color = '#9EA5B8', alignSelf = 'self-start' }: Props) {
  return (
    <p className={`text-${size} text-[${color}] ${alignSelf}`}>
      {children}
    </p>
  );
}
