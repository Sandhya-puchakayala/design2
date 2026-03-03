'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, forwardRef, CSSProperties } from 'react';

const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-input-background text-text-primary border-border-primary focus:ring-primary-background',
        filled: 'bg-gray-100 text-gray-900 border-transparent focus:bg-white focus:ring-primary-background',
        outlined: 'bg-transparent border-2 border-border-primary focus:border-primary-background focus:ring-primary-background',
      },
      size: {
        small: 'text-xs px-2 py-1',
        medium: 'text-sm px-3 py-2',
        large: 'text-base px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
)

interface EditTextProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof editTextClasses> {
  // Required parameters with defaults
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border?: string;
  border_border_radius?: string;
  
  // Optional parameters
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  // Required parameters with defaults (converted to valid Tailwind)
  placeholder = "Enter your email address",
  text_font_size = "text-sm",
  text_font_family = "Inter",
  text_font_weight = "font-normal",
  text_line_height = "leading-normal",
  text_text_align = "left",
  text_color = "text-text-muted",
  fill_background_color = "bg-input-background",
  border_border = "1px solid #dbe0e4",
  border_border_radius = "rounded-lg",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  type = 'text',
  ...props
}, ref) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    // Only use inline styles for truly custom values
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Parse border string to get border color
  const getBorderColor = (borderStr: string) => {
    const colorMatch = borderStr.match(/#[0-9a-fA-F]+/)
    if (colorMatch) {
      const color = colorMatch[0]
      // Check if color exists in our style mapping
      const borderColorKey = Object.entries({
        "border-border-primary": "#dbe0e4",
        "border-border-secondary": "#00000084",
        "border-primary-background": "#52002d"
      }).find(([key, value]) => value === color)?.[0]
      
      return borderColorKey ? borderColorKey.replace('border-', '') : `[${color}]`
    }
    return 'border-primary'
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

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      style={customStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  )
})

EditText.displayName = 'EditText'

export default EditText