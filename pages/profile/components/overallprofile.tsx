import {
  createdAtDateFormatterWithTime,
  updatedAtDateFormatter,
} from "@/util/dateFormatter";

type OverAllProfilePropsType = {
  createdAt: string;
  updatedAt: string;
  email__id: string;
  phone__numb: number;
  id: string;
};

const OverallProfile = ({
  createdAt,
  updatedAt,
  email__id,
  phone__numb,
  id,
}: OverAllProfilePropsType) => {
  return (
    <div className="border rounded-lg col-span-4  dark:border-gray-800">
      <div className="p-5 dark:bg-[#0e0f1c] bg-gray-200 rounded-t-lg">
        <h3>Overall Information</h3>
        <p className="text-sm font-HSLight">
          All of the information are safe and secure
        </p>
      </div>
      <hr className="dark:border-gray-800" />

      <div className="p-5 grid md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <div className="mb-5">
            <p className="font-HSLight dark:text-gray-400">Joined on</p>
            <p className="font-HSLight dark:text-gray-200">
              {createdAtDateFormatterWithTime(createdAt)}
            </p>
          </div>
          <div className="mb-5">
            <p className="font-HSLight dark:text-gray-400">Email address</p>
            <p className="font-HSLight dark:text-gray-200">{email__id}</p>
          </div>
          <div className="mb-5">
            <p className="font-HSLight dark:text-gray-400">Contact info</p>
            <p className="font-HSLight dark:text-gray-200">0{phone__numb}</p>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <p className="font-HSLight dark:text-gray-400 ">
              Profile last updated
            </p>
            <p className="font-HSLight dark:text-gray-200">
              {updatedAtDateFormatter(updatedAt)}
            </p>
          </div>
          <div>
            <p className="font-HSLight dark:text-gray-400 ">UserID</p>
            <p className="font-HSLight dark:text-gray-200">{id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallProfile;
