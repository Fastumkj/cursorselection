//credit to 
//mouse cursor images - http://www.rw-designer.com/cursor-detail
//animation to gif(take note no animation on cursor property) - https://ezgif.com/ani-to-gif
//inspired by - https://rvrc.nus.edu.sg/rvrc-family/house-committees/

import cursor1A from '../assets/pangolin1.png';
import cursor1NonA from '../assets/pangolin2.1.png';
import cursor2A from '../assets/pangolin2.1.png';
import cursor2NonA from '../assets/pangolin4.2.png';
import cursor3A from '../assets/pangolin1.png';
//no ANIMATION AS CURSOR PROPERTY DOES NOT SUPPORT ANIMATED CURSORS.
import owl from '../assets/ani/owl.gif'
import owl1 from '../assets/ani/owl1.gif'  
import owl2 from '../assets/ani/owl2.gif'  
import owl3 from '../assets/ani/owl3.gif'
import owl4 from '../assets/ani/owl4.gif'
import tiger from '../assets/ani/tiger.png'
import tiger1 from '../assets/ani/tiger1.png'
import tiger2 from '../assets/ani/tiger2.gif'
import tiger3 from '../assets/ani/tiger3.gif'
import deer from '../assets/ani/deer.gif'
import deer1 from '../assets/ani/deer1.gif'
import deer2 from '../assets/ani/deer2.gif'
import deer3 from '../assets/ani/deer3.gif'           
// Add more cursor pairs as needed

const cursorImages = [
  //manis - pangolins
  { a: 'http://www.rw-designer.com/cursor-extern.php?id=119320', nonA: 'http://www.rw-designer.com/cursor-extern.php?id=119318', borderRadius: '50%' },
  { a: 'http://www.rw-designer.com/cursor-extern.php?id=119321', nonA: 'http://www.rw-designer.com/cursor-extern.php?id=119319', borderRadius: '50%' },
  { a: 'http://www.rw-designer.com/cursor-extern.php?id=119320', nonA: 'http://www.rw-designer.com/cursor-extern.php?id=119316', borderRadius: '50%' },
  { a: 'http://www.rw-designer.com/cursor-extern.php?id=119321', nonA: 'http://www.rw-designer.com/cursor-extern.php?id=119317', borderRadius: '50%' },

  //orcaella - owl
  { a: owl, nonA: owl2, borderRadius: '50%' },
  { a: owl1, nonA: owl3, borderRadius: '50%' },
  { a: 'http://www.rw-designer.com/cursor-extern.php?id=141269', nonA: owl4, borderRadius: '50%' },

  //pantherea - tiger/leopard
  { a: tiger, nonA: tiger1, borderRadius: '50%' },
  { a: tiger2, nonA: tiger3, borderRadius: '50%' },
  { a: 'http://www.rw-designer.com/cursor-extern.php?id=130367', nonA: 'http://www.rw-designer.com/cursor-extern.php?id=123257', borderRadius: '50%' },

  //rusa - deer
  { a: 'http://www.rw-designer.com/cursor-extern.php?id=134501', nonA: 'http://www.rw-designer.com/cursor-extern.php?id=61275', borderRadius: '50%' },
  { a: deer, nonA: deer1, borderRadius: '50%' },
  { a: deer2, nonA: deer3, borderRadius: '50%' },

];

export default cursorImages;
