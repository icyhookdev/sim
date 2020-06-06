import React from 'react';
import { WrapFlex } from './styles/Shared';
import RepeatColumn from './components/RepeatColumns/RepeatColumns';
import OrderColumns from './components/OrderColumns/OrderColumns';


const items = [
  { id: 1, name: 'SKT_ID' },
  { id: 2, name: 'ORDER_ID' },
  { id: 3, name: 'TOTAL_AMOUNT' },
  { id: 4, name: 'CREATION_DATE' },
  { id: 5, name: 'USER_ID' },
  { id: 6, name: 'GATEAWAY_REFERENCE' },
  { id: 7, name: 'STATUS' },
  { id: 8, name: 'BIN' },
  { id: 9, name: 'LAST4' },
  { id: 10, name: 'SKT_TEAM' },
  { id: 11, name: 'SKT_WOW' },
  { id: 12, name: 'TOTAL_ITEMS' },
];

const App = () => (
  <WrapFlex>
    <RepeatColumn itemList={items} />
    <OrderColumns itemList={items} />
  </WrapFlex>
)

export default App;