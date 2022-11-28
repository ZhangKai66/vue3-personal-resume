export interface MenuItem {
  icon?: string,
  name: string,
  index: number | string,
  children?: MenuItem[],
}