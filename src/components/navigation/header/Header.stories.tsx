import { withKnobs, text, number } from '@storybook/addon-knobs';
import Header from './Header';
import { HomeIcon, NotificationIcon } from '@/icons';
import AvatarImg from '@/images/avatar.png';

export default {
  component: Header,
  decorators: [withKnobs],
  title: 'components/Navigation/Header'
};

export const Default = () => {
  return (
    <Header
      notificationProps={{ icon: <NotificationIcon />, quantity: number('quantity', 7) }}
      avatarProps={{
        imageSource: AvatarImg,
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
