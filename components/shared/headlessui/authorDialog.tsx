import Submit from "@/util/buttons/submit";
import { updatedAtDateFormatter } from "@/util/dateFormatter";
import { DashBoardAuthorTableType } from "@/util/types/types";
import { Dialog, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import useSwr from "swr";
export default function AuthorDialog({
  isOpen,
  setIsOpen,
  user,
}: {
  setIsOpen: any;
  isOpen: any;
  user: DashBoardAuthorTableType;
}) {
  const { mutate } = useSwr("/api/auth");
  const [loading, setLoading] = useState<boolean>(false);
  const [first__name, setFirstName] = useState<string>(user?.first__name);
  const [last__name, setLastName] = useState<string>(user?.last__name);
  const [phone__numb, setPhone] = useState<any>(user?.phone__numb);
  const [email, setEmail] = useState<string>(user?.email__id);
  const [photo__URL, setPhoto] = useState<string>(user?.photo__URL);
  const [gender, setGender] = useState<string>(user?.gender);
  const [role, setRole] = useState<string>(user?.role);
  function closeModal() {
    setIsOpen(false);
  }
  const { theme } = useTheme();
  const createdUser = updatedAtDateFormatter(user?.updatedAt);
  const handleOnUserInfoUpdate = async (e: any) => {
    e.preventDefault();
    const id = user?.id;
    setLoading(true);

    try {
      await mutate(async () => {
        const res = await fetch("/api/auth", {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            id,
            first__name,
            last__name,
            phone__numb,
            email__id: email,
            photo__URL,
            gender,
            role,
          }),
        });

        const response = await res.json();
        if (!response.success) {
          setLoading(false);
          toast.error(response.message, {
            duration: 5000,
          });
        } else {
          setLoading(false);
          toast.success(response.message, {
            duration: 2000,
          });
          closeModal();
        }
      });
    } catch (err) {
      setLoading(false);
      toast.error("something went wrong", {
        duration: 5000,
      });
    }
  };
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
                <Dialog.Panel className="w-full sm:max-w-md lg:max-w-4xl transform overflow-hidden rounded-2xl dark:bg-gray-800 bg-slate-200 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-HSBold text-center  leading-6 text-gray-600 mb-5"
                  >
                    UPDATE USER INFO
                  </Dialog.Title>
                  <form onSubmit={handleOnUserInfoUpdate}>
                    <div className="grid grid-cols-3 space-x-2 ">
                      <input
                        defaultValue={first__name}
                        className={`py-3 px-2 rounded-md dark:bg-gray-700`}
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <input
                        defaultValue={last__name}
                        className={`py-3 px-2 rounded-md dark:bg-gray-700`}
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                      />{" "}
                      <input
                        defaultValue={phone__numb}
                        className={`py-3 px-2 rounded-md dark:bg-gray-700`}
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>{" "}
                    <div className="grid grid-cols-2 space-x-2  mt-3">
                      <input
                        defaultValue={email}
                        className={`py-3 px-2 rounded-md dark:bg-gray-700`}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        defaultValue={photo__URL}
                        className={`py-3 px-2 rounded-md dark:bg-gray-700`}
                        type="text"
                        onChange={(e) => setPhoto(e.target.value)}
                      />{" "}
                    </div>
                    <div className="grid grid-cols-4 space-x-2  mt-3">
                      <select
                        onChange={(e) => setGender(e.target.value)}
                        name="GENDER-SELECT"
                        id="gender"
                      >
                        <option value={gender}>{gender}</option>

                        <option value="male">male</option>

                        <option value="female">female</option>

                        <option value="others">others</option>
                      </select>
                      <select
                        onChange={(e) => setRole(e.target.value)}
                        name="ROLE-SELECT"
                        id="role"
                      >
                        <option value={role}>{role}</option>

                        <option value="STUDENT">STUDENT</option>

                        <option value="MEMBER">MEMBER</option>

                        <option value="ADMIN">ADMIN</option>
                      </select>
                      <input
                        defaultValue={`Updated was : ${createdUser}`}
                        disabled
                        className={`py-3 px-2 rounded-md dark:bg-gray-700 disabled:bg-slate-300 col-span-2`}
                        type="text"
                      />{" "}
                    </div>
                    <div className="mt-5">
                      <Submit buttonText="Update" loading={loading} />
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
