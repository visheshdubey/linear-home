"use client";

import { HeaderItem, HeaderItemType } from "@/types/ui/navigation";

import IconLinearLogo from "@/icons/ic_linear_logo";

type NavbarProps = {
  items: HeaderItem[]
};

type PropsWithClassName = { className?: string }

type MenuItemProps = PropsWithClassName & { item: HeaderItem }

const BrandLogoNavItem: React.FC<MenuItemProps> = (props) =>
  <li className={props.className}>
    <IconLinearLogo />
  </li>

const LinkNavItem: React.FC<MenuItemProps> = (props) =>
  <li className={props.className}>
    {props.item.label}
  </li>

const DropdownNavItem: React.FC<MenuItemProps> = (props) =>
  <li className={props.className}>
    {props.item.label}
  </li>

const SecondaryButtonNavItem: React.FC<MenuItemProps> = (props) =>
  <li className={props.className}>
    <a
      href={props.item.href || '#'}
      className="bg-linear-bg-quaternary hover:brightness-125 transition-all ease-in-out shadow-linear-stack-low flex shrink-0 items-center justify-center h-8 px-3 rounded-linear-radius-8"
    >
      {props.item.label}
    </a>
  </li>

const PrimaryButtonNavItem: React.FC<MenuItemProps> = (props) =>
  <li className={props.className}>
    <a
      href={props.item.href || '#'}
      className="px-3 gap-2 flex shrink-0 bg-neutral-200 h-8 font-medium items-center justify-center text-linear-bg-secondary rounded-linear-radius-8"
    >
      {props.item.label}
      <span className="bg-linear-kbd-bg py-[3px] px-[6px] h-fit text-[10px] rounded-[5px] ml-px -mr-1 font-mono">
        L
      </span>
    </a>
  </li>

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="fixed top-4 flex-col w-full inset-0 flex items-center h-12 overflow-hidden px-3 max-w-linear-header-max-width mx-auto text-linear-small z-layer-header border border-linear-header-border rounded-linear-header-radius bg-neutral-950/20 backdrop-blur-xl saturate-150">
      <ul className="flex items-center *:cursor-pointer overflow-hidden shrink-0 justify-between w-full h-12">
        {props.items.map(item => {
          switch (item.type) {
            case HeaderItemType.BrandLogo:
              return <BrandLogoNavItem className="px-2" item={item} key={item.id} />
            case HeaderItemType.MenuItemWithLink:
              return <LinkNavItem className="px-4" item={item} key={item.id} />
            case HeaderItemType.MenuItemWithDropDown:
              return <DropdownNavItem className="px-4" item={item} key={item.id} />
            case HeaderItemType.SecondaryButton:
              return <SecondaryButtonNavItem item={item} key={item.id} />
            case HeaderItemType.PrimaryButton:
              return <PrimaryButtonNavItem item={item} key={item.id} />
            default:
              return <></>
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
