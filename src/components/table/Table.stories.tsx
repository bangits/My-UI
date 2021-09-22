import React from 'react';
import Table from './Table';
import TableHead from './TableHead';
import TableCell from './TableCell';
import TableRow from './TableRow';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    component: Table,
    subcomponents: {TableHead, TableCell,TableRow},
    decorators: [withKnobs],
    title: 'components/Table/Table'
}

export const Default = () => {
    return (
        <>
        </>
    );
}