import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import TableHead from './TableHead';

export default { 
    component: TableHead,
    decorators: [withKnobs],
    title: 'components/Table/Table Head'
}

export const Default = () => {
    return (<TableHead  direction='asc'>Hello World</TableHead>);
}