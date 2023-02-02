/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Set text
     */
    label: string;
    /**
     * Set text size
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Set Uppercase
     */
    allCaps?: boolean;
    /**
     * Set color theme
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Set custom color
     */
    fontColor?: string;
    /**
     * Set custom color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
