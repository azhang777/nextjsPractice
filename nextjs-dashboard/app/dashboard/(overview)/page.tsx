import { fetchCardData } from "../../lib/data";
import CardWrapper, { Card } from "../../ui/dashboard/cards";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import { lusitana } from "../../ui/fonts";
import { Suspense } from "react";
import {
  CardSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/ui/skeletons";

/*
Take a look at your dashboard page, is there anything you would've done differently?

Don't worry. There isn't a right answer.

You could stream the whole page like we did with loading.tsx... but that may lead to a longer loading time if one of the components has a slow data fetch.
You could stream every component individually... but that may lead to UI popping into the screen as it becomes ready.
You could also create a staggered effect by streaming page sections. But you'll need to create wrapper components.
*/
export default async function Page() {
  await Promise.all([fetchCardData]);
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2x1`}>
        Dashboard
      </h1>
      <div className='grid gap-6 sm:grid:cols-2 lg:grid-cols-4'>
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
