import type { FC, ReactNode, Ref } from "react";
import { isValidElement } from "react";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
    extend: {
        theme: {
            text: ["display-xs", "display-sm", "display-md", "display-lg", "display-xl", "display-2xl"],
        },
    },
});

/**
 * This function is a wrapper around the twMerge function.
 * It is used to merge the classes inside style objects.
 */
export const cx = twMerge;

/**
 * This function does nothing besides helping us to be able to
 * sort the classes inside style objects which is not supported
 * by the Tailwind IntelliSense by default.
 */
export function sortCx<T extends Record<string, string | number | Record<string, string | number | Record<string, string | number>>>>(classes: T): T {
    return classes;
}
/* We cannot use type `unknown` instead of `any` here because it will break the type assertion `isReactComponent` function is providing. */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";

type ReactComponent = React.FC<any> | React.ComponentClass<any, any>;

/**
 * Checks if a given value is a function component.
 */
export const isFunctionComponent = (component: any): component is React.FC<any> => {
    return typeof component === "function";
};

/**
 * Checks if a given value is a class component.
 */
export const isClassComponent = (component: any): component is React.ComponentClass<any, any> => {
    return typeof component === "function" && component.prototype && (!!component.prototype.isReactComponent || !!component.prototype.render);
};

/**
 * Checks if a given value is a forward ref component.
 */
export const isForwardRefComponent = (component: any): component is React.ForwardRefExoticComponent<any> => {
    return typeof component === "object" && component !== null && component.$$typeof.toString() === "Symbol(react.forward_ref)";
};

/**
 * Checks if a given value is a valid React component.
 */
export const isReactComponent = (component: any): component is ReactComponent => {
    return isFunctionComponent(component) || isForwardRefComponent(component) || isClassComponent(component);
};


const iconsSizes = {
    sm: "*:data-icon:size-4",
    md: "*:data-icon:size-5",
    lg: "*:data-icon:size-7", // 28 пикселей
    xl: "*:data-icon:size-7",
};

// CSS для переливающихся градиентов
const gradientAnimation = `
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .animate-gradient-shift {
    animation: gradient-shift 3s ease infinite;
    background-size: 200% 200%;
  }
`;

const styles = sortCx({
    light: {
        base: "rounded-full",
        sizes: {
            sm: "size-8",
            md: "size-10",
            lg: "size-12",
            xl: "size-14",
        },
        colors: {
            brand: "bg-brand-secondary text-featured-icon-light-fg-brand",
            gray: "bg-tertiary text-featured-icon-light-fg-gray",
            error: "bg-error-secondary text-featured-icon-light-fg-error",
            warning: "bg-warning-secondary text-featured-icon-light-fg-warning",
            success: "bg-success-secondary text-featured-icon-light-fg-success",
        },
    },

    gradient: {
        base: "rounded-full text-fg-white before:absolute before:inset-0 before:size-full before:rounded-full before:border before:mask-b-from-0% after:absolute after:block after:rounded-full",
        sizes: {
            sm: "size-8 after:size-6 *:data-icon:size-4",
            md: "size-10 after:size-7 *:data-icon:size-4",
            lg: "size-12 after:size-8 *:data-icon:size-5",
            xl: "size-14 after:size-10 *:data-icon:size-5",
        },
        colors: {
            brand: "before:border-utility-brand-200 before:bg-utility-brand-50 after:bg-brand-solid",
            gray: "before:border-utility-gray-200 before:bg-utility-gray-50 after:bg-secondary-solid",
            error: "before:border-utility-error-200 before:bg-utility-error-50 after:bg-error-solid",
            warning: "before:border-utility-warning-200 before:bg-utility-warning-50 after:bg-warning-solid",
            success: "before:border-utility-success-200 before:bg-utility-success-50 after:bg-success-solid",
        },
    },

    dark: {
        base: "text-fg-white shadow-xs-skeumorphic before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0%",
        sizes: {
            sm: "size-8 rounded-md before:rounded-[5px]",
            md: "size-10 rounded-lg before:rounded-[7px]",
            lg: "size-12 rounded-[10px] before:rounded-[9px]",
            xl: "size-14 rounded-xl before:rounded-[11px]",
        },
        colors: {
            brand: "bg-brand-solid before:border-utility-brand-200/12",
            gray: "bg-secondary-solid before:border-utility-gray-200/12",
            error: "bg-error-solid before:border-utility-error-200/12",
            warning: "bg-warning-solid before:border-utility-warning-200/12",
            success: "bg-success-solid before:border-utility-success-200/12",
        },
    },

    modern: {
        base: "bg-primary shadow-xs-skeumorphic ring-1 ring-inset",
        sizes: {
            sm: "size-8 rounded-md",
            md: "size-10 rounded-lg",
            lg: "size-12 rounded-[10px]",
            xl: "size-14 rounded-xl",
        },
        colors: {
            brand: "",
            gray: "text-fg-secondary ring-primary",
            error: "",
            warning: "",
            success: "",
        },
    },
    "modern-neue": {
        base: [
            "bg-primary_alt ring-1 ring-inset before:absolute before:inset-1",
            // Shadow
            "before:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),1px_8px_5px_0px_rgba(0,0,0,0.05),2px_21px_6px_0px_rgba(0,0,0,0),0px_0px_0px_1px_rgba(0,0,0,0.08),1px_13px_5px_0px_rgba(0,0,0,0.01),0px_-2px_2px_0px_rgba(0,0,0,0.13)_inset] before:ring-1 before:ring-secondary_alt",
        ].join(" "),
        sizes: {
            sm: "size-8 rounded-[8px] before:rounded-[4px]",
            md: "size-10 rounded-[10px] before:rounded-[6px]",
            lg: "size-12 rounded-[12px] before:rounded-[8px]",
            xl: "size-14 rounded-[14px] before:rounded-[10px]",
        },
        colors: {
            brand: "",
            gray: "text-fg-secondary ring-primary",
            error: "",
            warning: "",
            success: "",
        },
    },

    outline: {
        base: "before:absolute before:rounded-full before:border-2 after:absolute after:rounded-full after:border-2",
        sizes: {
            sm: "size-4 before:size-6 after:size-8.5",
            md: "size-5 before:size-7 after:size-9.5",
            lg: "size-6 before:size-8 after:size-10.5",
            xl: "size-7 before:size-9 after:size-11.5",
        },
        colors: {
            brand: "text-fg-brand-primary before:border-fg-brand-primary/30 after:border-fg-brand-primary/10",
            gray: "text-fg-tertiary before:border-fg-tertiary/30 after:border-fg-tertiary/10",
            error: "text-fg-error-primary before:border-fg-error-primary/30 after:border-fg-error-primary/10",
            warning: "text-fg-warning-primary before:border-fg-warning-primary/30 after:border-fg-warning-primary/10",
            success: "text-fg-success-primary before:border-fg-success-primary/30 after:border-fg-success-primary/10",
        },
    },
});

interface FeaturedIconProps {
    ref?: Ref<HTMLDivElement>;
    children?: ReactNode;
    className?: string;
    icon?: FC<{ className?: string }> | ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    color: "brand" | "gray" | "success" | "warning" | "error";
    theme?: "light" | "gradient" | "dark" | "outline" | "modern" | "modern-neue";
    category?: string; // Добавляем категорию для определения градиента
}

// Функция для получения градиента по категории
const getCategoryGradient = (category?: string) => {
    switch (category) {
        case "Инъекционные методики":
            return "bg-gradient-to-br from-violet-400 to-purple-500";
        case "Ботокс":
            return "bg-gradient-to-br from-yellow-400 to-orange-500";
        case "Контурная пластика":
            return "bg-gradient-to-br from-green-400 to-emerald-500";
        case "Увеличение губ":
            return "bg-gradient-to-br from-pink-400 to-rose-500";
        case "Нитевые методики":
            return "bg-gradient-to-br from-green-600 to-emerald-700";
        case "Мезотерапия":
            return "bg-gradient-to-br from-blue-400 to-cyan-500";
        case "Комплексные процедуры":
            return "bg-gradient-to-br from-orange-400 to-red-500";
        case "Эстетика лица":
            return "bg-gradient-to-br from-teal-400 to-blue-500";
        case "Slim & Wellness":
            return "bg-gradient-to-br from-lime-400 to-green-500";
        case "Консультации":
            return "bg-gradient-to-br from-indigo-400 to-purple-500";
        case "Обучение":
            return "bg-gradient-to-br from-amber-400 to-yellow-500";
        default:
            return "bg-gradient-to-br from-purple-400 to-pink-500";
    }
};

export const FeaturedIcon = (props: FeaturedIconProps) => {
    const { size = "sm", theme: variant = "light", color = "brand", icon: Icon, category, ...otherProps } = props;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: gradientAnimation }} />
            <div
                {...otherProps}
                data-featured-icon
                className={cx(
                    "relative flex shrink-0 items-center justify-center",

                    iconsSizes[size],
                    styles[variant].base,
                    styles[variant].sizes[size],
                    styles[variant].colors[color],

                    props.className,
                )}
            >
                {isReactComponent(Icon) && <Icon data-icon className="z-1" />}
                {isValidElement(Icon) && <div className="z-1">{Icon}</div>}


                {props.children}
            </div>
        </>
    );
};








