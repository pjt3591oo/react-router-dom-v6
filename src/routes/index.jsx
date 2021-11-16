import { useRoutes } from 'react-router-dom';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

const routes = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let elements = useRoutes([
    { 
      path: '/page1/*', 
      element: <Page1 />,
      children: [
        { path: '', element: <>blank of page1</> },
        { path: 'a', element: <>a of page1</> },
      ] 
    }, { 
      path: 'page2', 
      element: <Page2 /> ,
      children: [
        { path: '', element: <>blank of page2</> },
        { path: 'b', element: <>b of page2</> },
      ]
    },
  ]);
  return elements;
}

export default routes;