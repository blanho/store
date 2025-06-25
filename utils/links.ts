type NavLink = {
    href: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { href: '/', label: 'home' },
    { href: '/products', label: 'products' },
    { href: '/about', label: 'about' },
    { href: '/cart', label: 'cart' },
    { href: '/orders', label: 'orders' },
    { href: '/favorites', label: 'favorites' },
];