'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-primary-background text-primary-foreground hover:bg-primary-dark focus:ring-primary-background',
        secondary: 'bg-secondary-background text-secondary-foreground hover:bg-gray-100 focus:ring-gray-500',
        outline: 'border-2 border-primary-background text-primary-background bg-transparent hover:bg-primary-light hover:text-white focus:ring-primary-background',
        danger: 'bg-accent-color text-accent-foreground hover:bg-red-700 focus:ring-accent-color',
      },
      size: {
        small: 'text-xs px-2 py-1',
        medium: 'text-sm px-3 py-2',
        large: 'text-base px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border?: string;
  border_border_radius?: string;
  text_text_transform?: string;
  
  // Optional parameters
  layout_align_self?: string;
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;
  
  // Standard React props
  children?: ReactNode;
}

const Button = ({
  // Required parameters with defaults (converted to valid Tailwind)
  text = "",
  text_font_size = "text-xs",
  text_font_family = "Roboto",
  text_font_weight = "font-medium",
  text_line_height = "leading-tight",
  text_text_align = "center",
  text_color = "text-text-primary",
  fill_background_color = "bg-secondary-background",
  border_border = "1px solid #00000084",
  border_border_radius = "rounded-none rounded-b-sm",
  text_text_transform = "",
  
  // Optional parameters (no defaults)
  layout_align_self,
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidAlignSelf = layout_align_self && typeof layout_align_self === 'string' && layout_align_self.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidAlignSelf ? `self-${layout_align_self}` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    // Only use inline styles for truly custom values
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
    ...(text_text_transform && { textTransform: text_text_transform as any }),
  }

  // Parse border string to get border color
  const getBorderColor = (borderStr: string) => {
    const colorMatch = borderStr.match(/#[0-9a-fA-F]+/)
    if (colorMatch) {
      const color = colorMatch[0]
      // Check if color exists in our style mapping
      const borderColorKey = Object.entries({
        "border-border-secondary": "#00000084",
        "border-border-primary": "#dbe0e4", 
        "border-primary-background": "#52002d"
      }).find(([key, value]) => value === color)?.[0]
      
      return borderColorKey ? borderColorKey.replace('border-', '') : `[${color}]`
    }
    return 'border-secondary'
  }

  const borderColor = getBorderColor(border_border)

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    `text-${text_text_align}`,
    text_color,
    // Only apply these if not using variant system
    !variant ? fill_background_color : '',
    !variant ? `border border-${borderColor}` : '',
    border_border_radius,
  ].filter(Boolean).join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button