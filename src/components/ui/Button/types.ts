import React from 'react'

export interface IButtonProps {
    children: React.ReactNode,
    func?: () => void,
    color: string,
    disable?: boolean
}