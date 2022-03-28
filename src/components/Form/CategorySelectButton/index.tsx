import React from 'react';

import { 
    Container,
    Category,
    Icon

} from './styles.ts';

interface PRops {
    title: string;
}

export function CategorySelectButton({ title, ...rest }: Props){
    return(
        <Container { ...rest }>
            <Category>{title}</Category>
            <Icon name="chevron-down" />
        </Container>
    )
}