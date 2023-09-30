"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudent = () => {
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
            label: "student",
            link: "/super_admin/manage-student",
          },
        ]}
      />
      <ActionBar title={"Student List"}>
        <Link href={`/${role}/manage-student/create`}>
          <Button>Create Student</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageStudent;
