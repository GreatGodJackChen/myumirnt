import RenderAuthorize from '@/components/Authorized';
import { getAuthority, mygetAuthority } from './authority';

/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-mutable-exports */
let Authorized = RenderAuthorize(mygetAuthority());

// Reload the rights component
const reloadAuthorized = (): void => {
  Authorized = RenderAuthorize(mygetAuthority());
};

export { reloadAuthorized };
export default Authorized;
