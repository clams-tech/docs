import {useEffect} from 'react';
import {useHistory} from '@docusaurus/router';

export default function Home() {
  const history = useHistory();
  
  useEffect(() => {
    // Redirect to the intro page (which is now at the root because of routeBasePath: '/')
    history.replace('/intro');
  }, [history]);
  
  // Return null as this component will redirect and not render anything
  return null;
}
