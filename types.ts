export interface RoutineItem {
    id: number;
    emoji: string;
    label: string;
    isCompleted: boolean;
}

export interface NavItem {
    label: string;
    href: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
    colorClass: string;
    bgClass: string;
}
