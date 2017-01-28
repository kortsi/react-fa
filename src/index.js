/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 */

if (typeof window !== 'undefined') {
  // Only require CSS when running in browser
  require('font-awesome/css/font-awesome.css');
}

import Icon from './Icon';
import IconStack from './IconStack';

export {
  Icon as default,
  Icon,
  IconStack
};
