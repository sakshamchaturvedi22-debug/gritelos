import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, to, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-[14px] font-bold uppercase tracking-[0.1em] transition-all duration-200 rounded-sm";
  
  const variants = {
    primary: "bg-red-accent text-pure-white hover:bg-opacity-90",
    secondary: "bg-pure-white text-navy hover:bg-off-white",
    outline: "border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-navy"
  };

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (to) {
    return <Link to={to} onClick={onClick}>{content}</Link>;
  }

  return <button onClick={onClick}>{content}</button>;
}
