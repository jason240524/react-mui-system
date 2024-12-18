import { ReactNode } from 'react';
import Box from '@mui/system/Box';


interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <Box component="button" sx={{
      backgroundColor: 'primary.main',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: 'primary.dark'
      }
    }}>
      {children}
    </Box>
  )
}
