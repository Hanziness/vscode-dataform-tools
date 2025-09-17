import { IconLoader2 } from "@tabler/icons-react";

interface ButtonProps {
    children: any
    /** Callback function for when the button is clicked */
    onClick?: () => void
    /** Button variant */
    variant?: 'outline' | 'filled',
    className?: string
    /** Whether to show an animated spinner instead of the button contents */
    loading?: boolean
    /** Whether the button cannot be clicked */
    disabled?: boolean
}

const classes: Record<keyof ButtonProps['variant'], string> = {
    outline: "text-primary",
    filled: "bg-primary text-white"
}; 

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <button className={["p-2 rounded-lg border-2 border-primary", classes[(props.variant ?? "outline") as keyof ButtonProps["variant"]], props.disabled && "opacity-70 pointer-events-none", props.className].join(" ")} onClick={() => { if (props.disabled !== true) { props.onClick?.(); } }}>
        {props.loading ? (<IconLoader2 className="animate-spin" />) : props.children}
    </button>;
}; 