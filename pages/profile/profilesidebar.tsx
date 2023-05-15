import Link from "next/link";

const ProfileSidebar = () => {
  return (
    <div>
      <ul>
        <li>tab 1</li>
        <li>
          <Link href="/profile/password">tab 2</Link>
        </li>
        <li>
          <Link href="/profile/account">tab 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
