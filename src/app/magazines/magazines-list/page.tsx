import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import MagazineView from "@/components/Tables/MagazineView";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "DecodeAfrica",
  description:
    "Magazines View",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Magazines View" />
      <div className="flex flex-col gap-10">
        <MagazineView />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
