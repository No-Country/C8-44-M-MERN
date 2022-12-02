export interface Habit{
    name: string;
    description: string;
    category: string;
    priority: number;
    experience: number;
    frequency: string;
    isActive?: boolean;
}
