import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Notification(props) {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0 ">
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-600"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          <div className="absolute right-10 bottom-1/4 flex w-96 items-center gap-2 rounded-xl bg-red-200 py-4 px-6 text-red-500 drop-shadow-xl transition-all">
            <p className="flex-1 font-bold">Veuillez remplir la case</p>
            <button
              className="opacity-50 hover:opacity-100"
              onClick={props.closeNotification}
            ></button>
          </div>
        </Transition.Child>
      </div>
    </Transition.Root>
  );
}

export default Notification;
