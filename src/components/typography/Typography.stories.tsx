import { COLOR_TYPES } from '@/types';
import { optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Typography from './Typography';
import TYPOGRAPHY_TYPES from './typography-types';
import { getColorKnobs } from '@/configs';

export default {
	component: Typography,
	decorators: [withKnobs],
	title: 'components/Typography/Typography'
} as ComponentMeta<typeof Typography>;

export const H1 = () => (
	<Typography
		color={getColorKnobs()}
		variant={optionsKnob('variant', TYPOGRAPHY_TYPES, TYPOGRAPHY_TYPES.H1, {
			display: 'inline-radio'
		})}>
		{text('children', 'H1: The quick brown fox jumps over the lazy dog')}
	</Typography>
);

export const H2 = () => (
	<Typography
		color={getColorKnobs()}
		variant={optionsKnob('variant', TYPOGRAPHY_TYPES, TYPOGRAPHY_TYPES.H2, {
			display: 'inline-radio'
		})}>
		{text('children', 'H2: The quick brown fox jumps over the lazy dog')}
	</Typography>
);

export const H3 = () => (
	<Typography
		color={getColorKnobs()}
		variant={optionsKnob('variant', TYPOGRAPHY_TYPES, TYPOGRAPHY_TYPES.H3, {
			display: 'inline-radio'
		})}>
		{text('children', 'H3: The quick brown fox jumps over the lazy dog')}
	</Typography>
);

export const H4 = () => (
	<Typography
		color={getColorKnobs()}
		variant={optionsKnob('variant', TYPOGRAPHY_TYPES, TYPOGRAPHY_TYPES.H4, {
			display: 'inline-radio'
		})}>
		{text('children', 'H4: The quick brown fox jumps over the lazy dog')}
	</Typography>
);

export const H5 = () => (
	<Typography
		color={getColorKnobs()}
		variant={optionsKnob('variant', TYPOGRAPHY_TYPES, TYPOGRAPHY_TYPES.H5, {
			display: 'inline-radio'
		})}>
		{text('children', 'H5: The quick brown fox jumps over the lazy dog')}
	</Typography>
);

export const H6 = () => (
	<Typography
		color={getColorKnobs()}
		variant={optionsKnob('variant', TYPOGRAPHY_TYPES, TYPOGRAPHY_TYPES.H6, {
			display: 'inline-radio'
		})}>
		{text('children', 'H6: The quick brown fox jumps over the lazy dog')}
	</Typography>
);

export const P1 = () => (
	<Typography
		color={getColorKnobs()}
		variant={optionsKnob('variant', TYPOGRAPHY_TYPES, TYPOGRAPHY_TYPES.P1, {
			display: 'inline-radio'
		})}>
		{text('children', 'P1: The quick brown fox jumps over the lazy dog')}
	</Typography>
);

export const P2 = () => (
	<Typography
		color={getColorKnobs()}
		variant={optionsKnob('variant', TYPOGRAPHY_TYPES, TYPOGRAPHY_TYPES.P2, {
			display: 'inline-radio'
		})}>
		{text('children', 'P2: The quick brown fox jumps over the lazy dog')}
	</Typography>
);

export const P3 = () => (
	<Typography
		color={getColorKnobs()}
		variant={optionsKnob('variant', TYPOGRAPHY_TYPES, TYPOGRAPHY_TYPES.P3, {
			display: 'inline-radio'
		})}>
		{text('children', 'P3: The quick brown fox jumps over the lazy dog')}
	</Typography>
);

export const P4 = () => (
	<Typography
		color={getColorKnobs()}
		variant={optionsKnob('variant', TYPOGRAPHY_TYPES, TYPOGRAPHY_TYPES.P4, {
			display: 'inline-radio'
		})}>
		{text('children', 'P4: The quick brown fox jumps over the lazy dog')}
	</Typography>
);
