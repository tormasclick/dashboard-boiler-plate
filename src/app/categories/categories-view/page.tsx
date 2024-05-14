import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CategoriesView from "@/components/Tables/CategoriesView";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Categories View",
  description:
    "Categories View",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Categories View" />
      <div className="flex flex-col gap-10">
        <CategoriesView />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
