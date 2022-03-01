import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./promoSection.module.scss";

export interface PromoSectionProps {
    title?: string;
    titleSize?: "small" | "medium" | "large";
    titleColor?: string;
    subtitle?: string;
    subtitleSize?: "small" | "medium" | "large";
    subtitleColor?: string;
    contentCustomClass?: string;
    image?: StaticImageData;
    imageAlt?: string;
    imageWidth?: string;
    imageLayout?: string;
    imageLoading?: string;
    imageCustomClass?: string;
    imageEffect?: "skewLeft" | "skewRight" | "skewBottom" | "skewTop" | "skewBottomRight" | "skewBottomLeft" | "skewTopRight" | "skewTopLeft";
    buttonText?: string;
    buttonUrl?: string;
    reverse?: boolean;
}

const PromoSection: React.FC<PromoSectionProps> = ({
    title,
    titleSize,
    titleColor,
    subtitle,
    subtitleSize,
    subtitleColor,
    contentCustomClass,
    image,
    imageAlt,
    imageWidth = "480px",
    imageLayout,
    imageLoading,
    imageCustomClass,
    imageEffect,
    buttonText,
    buttonUrl,
    reverse
}) => (
    <div className={[styles.promo, reverse && styles.reverse].join(' ')}>
        <div className={styles.promo_image_container}
            style={{
                maxWidth: imageWidth,

            }}
        >
            {image && <Image src={image} alt={imageAlt || ""}/>}
        </div>
        <div className={[styles.promo_content, contentCustomClass && styles[`${contentCustomClass}`]].join(' ')}>
            {title && <h2 className={styles.promo_content_title}
                style={{
                    color: titleColor || "",
                    fontSize: titleSize && `var(--font-size-h2-${titleSize})`
                }}
            >
                {title}
            </h2>}
            {subtitle && <p
                className={styles.promo_content_subtitle}
                style={{
                    color: subtitleColor || "",
                    fontSize: subtitleSize && `var(--font-size-p-${subtitleSize})`
                }}
            >
                {subtitle}
            </p>}
            {buttonText && buttonUrl && <Link href={buttonUrl}><a className={styles.promo_content_button}>{buttonText}</a></Link>}
        </div>
    </div>
);

export default PromoSection;
