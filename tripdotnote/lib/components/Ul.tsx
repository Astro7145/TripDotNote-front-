import { styled } from '@mui/material';
import React from 'react'

const StyledUl = styled('ul')(() => ({
    marginLeft: 0,
    listStyle: 'none',
}));

export default function Ul({ children }: { children: React.ReactNode }) {
    return <StyledUl>{children}</StyledUl>;
}
