"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Type } from "lucide-react";
import { Fragment } from "react";

import type { FilterModalProps } from "@/types";

import Accordion from "@/components/Accordion/Accordion";

export default function FilterModal({ isOpen, onClose }: FilterModalProps) {
  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          leave="ease-in duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-opacity-30 fixed inset-0 bg-transparent transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              leave="ease-in duration-200"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-right shadow-xl transition-all">
                {/* Header Modal */}
                <div className="mb-4 flex items-center justify-between border-1 border-gray-200 p-4">
                  <button
                    className="text-xl font-bold text-red-500"
                    type="button"
                    onClick={onClose}
                  >
                    ×
                  </button>
                  <DialogTitle className="text-lg font-medium">
                    فیلتر
                  </DialogTitle>
                </div>

                {/* Accordion های فیلتر */}
                <div className="flex flex-col space-y-4">
                  <Accordion
                    title="دسته بندی"
                    items={[
                      "ساعت",
                      "لپ تاپ",
                      "لوازم جانبی",
                      "لوازم خانه",
                      "موبایل",
                      "هدفون",
                    ]}
                  />

                  <Accordion
                    title="برند"
                    items={[
                      "اسنوا",
                      "ال جی",
                      "برپل",
                      "دوو",
                      "شیائومی",
                      "قدیمی",
                      "مهیا",
                    ]}
                  />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
