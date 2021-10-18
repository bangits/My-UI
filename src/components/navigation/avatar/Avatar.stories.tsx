import { HomeIcon } from '@/icons';
import { text, withKnobs } from '@storybook/addon-knobs';
import Avatar from './Avatar';

export default {
  component: Avatar,
  decorators: [withKnobs],
  title: 'components/Navigation/Avatar'
};

export const Default = () => {
  return (
    <Avatar
      imageSource={text('imageSource', 'https://avatars.design/wp-content/uploads/2016/09/28_GIF.gif')}
      avatarLabel={text('avatarLabel', 'Evgenia')}
      dropdownTitle={text('dropdownTitle', 'Profile Settings')}
      topButtonLabel={text('topButtonLabel', 'View Profile')}
      bottomButtonLabel={text('bottomButtonLabel', 'Log Out')}
      onTopButtonClick={() => {
        alert('View Profile');
      }}
      onBottomButtonClick={() => {
        alert('Log Out');
      }}
      dropdownLinks={[
        {
          label: 'Lorem Ipsum',
          icon: <HomeIcon />,
          onClick: () => {
            alert('Lorem Ipsum 1');
          }
        },
        {
          label: 'Lorem Ipsum',
          icon: <HomeIcon />,
          onClick: () => {
            alert('Lorem Ipsum 2');
          }
        },
        {
          label: 'Lorem Ipsum',
          icon: <HomeIcon />,
          onClick: () => {
            alert('Lorem Ipsum 3');
          }
        }
      ]}
    />
  );
};
