import React from 'react';

import { Container } from './style.ts';

export function HighlightCard(){
    return(
        <Container>
            <Header>
                <Title></Title>
                <Icon name="arrow-up-circle" />
            </Header>
        </Container>
    )
}