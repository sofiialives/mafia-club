"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import PrivacyPage from "@/app/(legal)/privacy/page";
import TermsPage from "../../terms/page";

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <TermsPage />
    </Modal>
  );
}
