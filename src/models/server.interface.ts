import { ReactNode } from 'react'
export interface IServerButton {
    serverName: string;
    serverImage?: string;
    id?: string;
    notifications: number;
    children?: ReactNode,
    onClick(channel_id?: string): void;
}