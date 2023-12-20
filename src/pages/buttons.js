import Button from "@components/Button";
import IconButton from "@components/IconButton";
import Layout from "@components/Layout";
import React from "react";
import { HiHome, HiTrash, HiZoomIn, HiZoomOut } from "react-icons/hi";

const buttons = () => {
  return (
    <Layout>
      <div className="block bg-white dark:bg-base p-4 sm:w-full">
        <div className="p-2">Buttons</div>
        <div className="flex flex-row flex-wrap gap-6">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="link">Link</Button>
        </div>

        <div className="p-2 mt-6">Icon Normal Buttons</div>
        <div className="flex flex-row gap-6">
          <IconButton variant="primary">
            <HiHome className="h-6 w-6 text-white" />
          </IconButton>
          <IconButton variant="secondary">
            <HiZoomIn className="h-6 w-6 text-base" />
          </IconButton>
          <IconButton variant="danger">
            <HiTrash className="h-6 w-6 text-white" />
          </IconButton>
          <IconButton variant="link">
            <HiZoomOut className="h-6 w-6 text-primary" />
          </IconButton>
        </div>

        <div className="p-2 mt-6">Icon Rounded Buttons</div>
        <div className="flex flex-row gap-6">
          <IconButton variant="primary" rounded={true}>
            <HiHome className="h-6 w-6 text-white" />
          </IconButton>
          <IconButton variant="secondary" rounded={true}>
            <HiZoomIn className="h-6 w-6 text-base" />
          </IconButton>
          <IconButton variant="danger" rounded={true}>
            <HiTrash className="h-6 w-6 text-white" />
          </IconButton>
          <IconButton variant="link" rounded={true}>
            <HiZoomOut className="h-6 w-6 text-primary" />
          </IconButton>
        </div>
      </div>
    </Layout>
  );
};

export default buttons;
