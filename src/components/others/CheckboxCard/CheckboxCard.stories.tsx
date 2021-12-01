import { withKnobs } from '@storybook/addon-knobs';
import CheckboxCard from './CheckboxCard';

export default {
	component: CheckboxCard,
	decorators: [withKnobs],
	title: 'components/Others/Checkbox Card'
};

export const Default = () => {
	return <CheckboxCard />;
};
