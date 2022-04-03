import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

export function getHeaderTitle(route: any) {
  return getFocusedRouteNameFromRoute(route) ?? 'Home';
}
