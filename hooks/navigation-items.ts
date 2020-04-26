import {
  mdiBookshelf,
  mdiEmail,
  mdiHome,
  mdiPackageVariantClosed,
  mdiRayStartArrow,
} from '@mdi/js';

const useNavigationItems = () => {
  return [
    {
      to: '/',
      icon: mdiHome,
      title: 'Home',
    },
    {
      to: '/service',
      icon: mdiPackageVariantClosed,
      title: 'Service',
    },
    {
      to: '/flow',
      icon: mdiRayStartArrow,
      title: 'Flow',
    },
    {
      to: '/works',
      icon: mdiBookshelf,
      title: 'Works',
    },
    {
      to: '/contact',
      icon: mdiEmail,
      title: 'Contact',
    },
  ];
};

export type NavigationItems = ReturnType<typeof useNavigationItems>;
export default useNavigationItems;
