"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageAdmin = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <ActionBar title={"Admin List"}>
        <Link href={`/${role}/admin/create`}>
          <Button>Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdmin;
