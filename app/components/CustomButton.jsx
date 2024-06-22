import React from 'react';
import Link from 'next/link';

const CustomButton = ({ children, className = '', onClick = () => {}, href = '', height = 'h-auto' }) => {
  const commonClasses = `px-8 py-2  rounded-full font-bold ${className} ${height} focus:outline-none focus:shadow-outline`;

  if (href) {
    return (
      <Link href={href} className={commonClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={commonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;