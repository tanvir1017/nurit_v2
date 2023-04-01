import { responseType } from "@/util/types/types";
import { Dialog, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Modal({
  isOpen,
  setIsOpen,
  response,
}: {
  isOpen: boolean;
  setIsOpen: any;
  response: responseType;
}) {
  function closeModal() {
    setIsOpen(false);
  }
  const { theme } = useTheme();

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={`fixed inset-0 backdrop-blur-md ${
                theme === "dark" ? "bg-[#3c33334d]" : "bg-white/30"
              }`}
              aria-hidden="true"
            />
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#E2EEF7] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-HSBold text-center  leading-6 text-blue-600"
                  >
                    {response.title}
                    <p className="text-sm text-gray-500">
                      {response.description}
                    </p>
                  </Dialog.Title>
                  <div className="mt-2">
                    <Image
                      width={500}
                      height={100}
                      src={response.image}
                      alt="email already exist"
                    />
                  </div>

                  <div className="mt-4">
                    {response.buttonLink ? (
                      <Link href={response.buttonLink}>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          {response.buttonText}
                        </button>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        {response.buttonText}
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
