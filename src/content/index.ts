import { HeaderItem, HeaderItemType } from "@/types/ui/navigation";

export const NavHeaderItems: HeaderItem[] =
    [
        {
            "id": "main-nav-item-logo",
            "label": "Linear Logo",
            "type": HeaderItemType.BrandLogo
        },
        {
            "id": "main-nav-item-features",
            "label": "Features",
            "type": HeaderItemType.MenuItemWithDropDown
        },
        {
            "id": "main-nav-item-method",
            "label": "Method",
            "href": "#",
            "type": HeaderItemType.MenuItemWithLink,
        },
        {
            "id": "main-nav-item-customers",
            "label": "Customers",
            "href": "#",
            "type": HeaderItemType.MenuItemWithLink,
        },
        {
            "id": "main-nav-item-changelog",
            "label": "Changelog",
            "href": "#",
            "type": HeaderItemType.MenuItemWithLink,
        },
        {
            "id": "main-nav-item-pricing",
            "label": "Pricing",
            "href": "#",
            "type": HeaderItemType.MenuItemWithLink,
        },
        {
            "id": "main-nav-item-company",
            "label": "Company",
            "href": "#",
            "type": HeaderItemType.MenuItemWithLink,
        },
        {
            "id": "main-nav-item-contact",
            "label": "Contact",
            "href": "#",
            "type": HeaderItemType.MenuItemWithLink,
        },
        {
            "id": "main-nav-item-docs",
            "label": "Docs",
            "href": "#",
            "type": HeaderItemType.SecondaryButton,
        },
        {
            "id": "main-nav-item-openApp",
            "label": "Open app",
            "href": "/open-app",
            "type": HeaderItemType.PrimaryButton,
            "onClickAction": "navigateToApp",
            "dropdownMenuContent": {
                "shortcut": "L",
                "bg": "linear-kbd-bg"
            }
        }
    ]
