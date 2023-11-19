'use client';

import { Dropdown } from 'flowbite-react';
import { User } from 'next-auth';
import { HiCog, HiUser } from 'react-icons/hi';
import Link from 'next/link';
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from 'react-icons/ai';
import { signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useParamsStore } from '@/hooks/useParamStore';

type Props = {
  user: User;
};
export default function UserActions({ user }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const setParams = useParamsStore((state) => state.setParams);
  function setWinner() {
    setParams({ winner: user.username, seller: undefined });
    if (pathname !== '/') {
      router.push('/');
    }
  }

  function setSeller() {
    setParams({ winner: undefined, seller: user.username });
    if (pathname !== '/') {
      router.push('/');
    }
  }

  return (
    <Dropdown label={`Welcom ${user.name}`} inline>
      <Dropdown.Item icon={HiUser} onClick={setSeller}>
        <Link href='/'>My Auctions</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillTrophy} onClick={setWinner}>
        <Link href='/'>Auctions won</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillCar}>
        <Link href='/auctions/create'>Sell my car</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={HiCog}>
        <Link href='/session'>Session (dev only)</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        icon={AiOutlineLogout}
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}
