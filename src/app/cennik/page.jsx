'use client';

import { PriceListDisplay } from '../components/PriceListDisplay/PriceListDisplay';
import { PriceListPicker } from '../components/PriceListPicker/PriceListPicker';

const CennikPage = () => {
  return (
    <>
      <PriceListPicker />
      <PriceListDisplay />
    </>
  );
};

export default CennikPage;
