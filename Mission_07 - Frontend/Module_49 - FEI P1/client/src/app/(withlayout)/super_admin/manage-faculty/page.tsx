"use client";

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
        ]}
      />
      <h1>Student List</h1>
      <Link href={`/${role}/admin/create`}>
        <Button>Create Student</Button>
      </Link>
    </div>
  );
};

export default ManageAdmin;
