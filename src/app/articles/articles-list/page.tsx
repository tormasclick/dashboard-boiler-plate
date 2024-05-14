import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CategoriesView from "@/components/Tables/CategoriesView";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Articles List View",
  description:
    "Articles View",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Articles View" />
      <div className="flex flex-col gap-10">
        <CategoriesView />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
