const CourseCertificateCard = () => {
  return (
    <div className="border rounded-lg  col-span-3 dark:border-gray-800">
      <div className="p-2 dark:bg-[#0e0f1c] bg-gray-200 rounded-t-lg">
        <h3>Certificate list</h3>
        <p className="text-sm font-HSLight">
          This certificate are consider as soft copy
        </p>
      </div>
      <hr className="dark:border-gray-800" />
      <div className="p-5 grid grid-cols-1 gap-10">Coming soon</div>
    </div>
  );
};

export default CourseCertificateCard;
