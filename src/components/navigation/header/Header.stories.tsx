import { HomeIcon, NotificationIcon } from '@/icons';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import Header from './Header';

export default {
  component: Header,
  decorators: [withKnobs],
  title: 'components/Navigation/Header'
};

export const Default = () => {
  return (
    <Header
      notificationProps={{ children: <NotificationIcon />, quantity: number('quantity', 7) }}
      avatarProps={{
        imageSource: text('imageSource', 'https://avatars.design/wp-content/uploads/2016/09/28_GIF.gif'),
        avatarLabel: text('avatarLabel', 'Evgenia'),
        dropdownTitle: text('dropdownTitle', 'Profile Settings'),
        topButtonLabel: text('topButtonLabel', 'View Profile'),
        bottomButtonLabel: text('bottomButtonLabel', 'Log Out'),
        onTopButtonClick: () => {
          alert('View Profile');
        },
        onBottomButtonClick: () => {
          alert('Log Out');
        },
        dropdownLinks: [
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
        ]
      }}
    />
  );
};
