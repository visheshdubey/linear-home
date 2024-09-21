export enum HeaderItemType {
    BrandLogo = 0,
    MenuItemWithLink,
    MenuItemWithDropDown,
    SecondaryButton,
    PrimaryButton
}

export type HeaderItem = {
    id: string,
    label: string
    href?: string
    type: HeaderItemType,
    onClickAction?: string,
    dropdownMenuContent?: any
}