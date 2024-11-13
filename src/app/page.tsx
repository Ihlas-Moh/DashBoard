/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity, Flag, FlagIcon, Database, AppWindow } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import UsersPage from "./formsStuff/page";
import NavBar from "@/components/navBar/page";


const cardData: CardProps[] = [
  {
    label: "Stock Total",
    amount: "150000",
    discription: "increased by 60%",
    icon:AppWindow
  },
  {
    label: "Total Profit",
    amount: "$25000",
    discription: "Increased by 30%",
    icon: Database
  },
  {
    label: "Unicque Visitors",
    amount: "250000",
    discription: "Increased by 80%",
    icon: FlagIcon
  },

];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <NavBar/>
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-3 h-60 ">
      <div className="border rounded-lg bg-gradient-to-r from-purple-300  to-purple-400 text-white p-8">
        <AppWindow/>
        <p>Stock Total</p>
        <h1 className="text-xl font-semibold">$150000</h1>
        <p className=" mt-8">increased by 60%</p>
      </div>
      <div className="border rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white p-8">
        <Database/>
        <p>Total Profit</p>
        <p className="text-xl font-semibold">$25000</p>
        <p className="mt-8">increased by 30%</p>
      </div>
      <div className="border rounded-lg bg-gradient-to-r from-red-300 to-orange-400 text-white p-8">
        <FlagIcon/>
        <p>Unique Visitors</p>
        <p className="text-xl font-semibold">$250000</p>
        <p className="mt-8 ">increased by 80%</p>
      </div>
      </section>
      <section>
       <UsersPage/>

        {/*  */}
      </section>
    </div>
  );
}
